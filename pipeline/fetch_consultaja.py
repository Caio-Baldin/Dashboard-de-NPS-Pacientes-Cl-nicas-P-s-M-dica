"""CLI: busca agendas + agendamentos na API da ConsultaJá e salva um Excel
consolidado em ../dados-fonte/ (Base_Consulta_Ja<AA>_<MM>_<DD>.xlsx). Rode
manualmente quando quiser atualizar a base de agendamentos; depois rode
update_attendance.py apontando para o arquivo novo (ver instrução impressa
no final). Se precisar de uma cópia na pasta "Pós Medica - Documentações -
Triagem", copie manualmente a partir de dados-fonte/.

Este script não é agendado nem automático -- só roda quando você chama.
Cada execução traz nome e celular de paciente da API; o arquivo gerado
fica fora do controle de versão -- dados-fonte/ tem seu próprio .gitignore
-- e não deve ser hospedado.

Configuração: copie pipeline/.env.example para pipeline/.env e preencha
CONSULTAJA_TOKEN (veja .env.example para as variáveis opcionais de período).

Uso:
    python fetch_consultaja.py --dry-run
    python fetch_consultaja.py
    python fetch_consultaja.py --start-date 2026-01-01 --end-date 2026-12-31

Também pode ser chamado por outro script (ex.: atualizar_local.py) via
fetch_and_save(), que devolve o caminho salvo (ou None em --dry-run/vazio).
"""
from __future__ import annotations

import argparse
from datetime import date
from pathlib import Path

import pandas as pd

from config import DADOS_FONTE_DIR, PIPELINE_DIR, load_consultaja_config
from consultaja_client import ConsultaJaClient, ConsultaJaConfigurationError


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Baixa a base de agendamentos da ConsultaJá.")
    parser.add_argument("--start-date", help="AAAA-MM-DD (padrão: CONSULTAJA_START_DATE do .env)")
    parser.add_argument("--end-date", help="AAAA-MM-DD (padrão: CONSULTAJA_END_DATE do .env)")
    parser.add_argument("--dry-run", action="store_true", help="Não salva o Excel, só mostra o resumo")
    return parser.parse_args()


def _write_excel(df: pd.DataFrame, path) -> None:
    with pd.ExcelWriter(path, engine="openpyxl") as writer:
        df.to_excel(writer, index=False, sheet_name="Planilha1")
        ws = writer.sheets["Planilha1"]
        for col in ws.columns:
            max_len = max((len(str(cell.value or "")) for cell in col), default=0)
            ws.column_dimensions[col[0].column_letter].width = min(max_len + 2, 40)


def fetch_and_save(
    *, start_date: str | None = None, end_date: str | None = None, dry_run: bool = False
) -> Path | None:
    """Busca na API e salva em dados-fonte/. Devolve o caminho salvo, ou
    None se --dry-run ou se não houver agendamentos no período.

    Levanta ConsultaJaConfigurationError (token ausente/inválido) ou
    RuntimeError (nenhuma agenda encontrada) -- quem chamar decide como
    reportar o erro.
    """
    client = ConsultaJaClient(load_consultaja_config())
    df = client.fetch_all(start_date=start_date, end_date=end_date)

    if df.empty:
        print("Nenhum agendamento encontrado no período informado.")
        return None

    print(f"{len(df)} agendamento(s) coletados.")
    if dry_run:
        print("\n--dry-run: nenhum arquivo foi salvo.")
        return None

    filename = f"Base_Consulta_Ja{date.today():%y_%m_%d}.xlsx"

    DADOS_FONTE_DIR.mkdir(exist_ok=True)
    output_path = DADOS_FONTE_DIR / filename
    _write_excel(df, output_path)
    print(f"\nSalvo em {output_path.relative_to(PIPELINE_DIR.parent)}")

    return output_path


def main() -> None:
    args = parse_args()

    try:
        output_path = fetch_and_save(start_date=args.start_date, end_date=args.end_date, dry_run=args.dry_run)
    except (ConsultaJaConfigurationError, RuntimeError) as e:
        raise SystemExit(str(e))

    if output_path:
        rel = output_path.relative_to(PIPELINE_DIR.parent)
        print(f"Agora rode: python update_attendance.py ../{rel} --dry-run")


if __name__ == "__main__":
    main()

"""Orquestra a atualização local completa do dashboard: busca as duas
fontes -- ConsultaJá (-> ATENDIMENTOS) e Indecx (-> RECORDS/WEEKLY) -- e
regrava script.js, imprimindo (+ logando) um resumo do que mudou e o que
falhou, se falhou. Pensado pra rodar com um único comando, sem precisar de
.bat:

    python pipeline/atualizar_tudo.py

Só roda quando alguém chama -- nada aqui é agendado. Não faz git add/commit/
push: isso continua manual de propósito (ver README.md > "Atualizar os
dados e publicar") -- é a checagem antes de qualquer coisa sair da máquina.
O resumo (console e pipeline/atualizacoes.log) só contém contagens
agregadas -- nunca nome, celular, comentário ou qualquer dado identificável
de paciente.
"""
from __future__ import annotations

import sys
import traceback
from datetime import datetime

from attendance import load_attendance
from attendance import to_records as attendance_to_records
from config import PIPELINE_DIR, SCRIPT_JS_PATH
from consultaja_client import ConsultaJaConfigurationError
from fetch_consultaja import fetch_and_save as fetch_consultaja
from fetch_indecx import fetch_and_save as fetch_indecx
from indecx_client import IndecxConfigurationError
from loaders import read_from_file
from render_script import upsert_const
from transform import build_records, build_weekly

LOG_PATH = PIPELINE_DIR / "atualizacoes.log"


def _log(lines: list[str]) -> None:
    text = "\n".join(lines) + "\n"
    print(text)
    with LOG_PATH.open("a", encoding="utf-8") as f:
        f.write(f"\n===== {datetime.now():%Y-%m-%d %H:%M:%S} =====\n")
        f.write(text)


def _atualizar_atendimentos(report: list[str]) -> bool:
    report.append("PASSO 1/4 -- buscar agendamentos na API da ConsultaJá")
    try:
        output_path = fetch_consultaja()
    except ConsultaJaConfigurationError as e:
        report.append(f"  FALHOU: {e}")
        return False
    except RuntimeError as e:
        report.append(f"  FALHOU: {e}")
        return False
    except Exception:
        report.append("  FALHOU: erro inesperado ao buscar na API. Detalhes:")
        report.append(traceback.format_exc())
        return False

    if output_path is None:
        report.append("  Nenhum agendamento novo encontrado -- ATENDIMENTOS não foi alterado.")
        return True
    report.append(f"  OK -- planilha salva em {output_path.relative_to(PIPELINE_DIR.parent)}")

    report.append("\nPASSO 2/4 -- recalcular ATENDIMENTOS")
    try:
        agg = load_attendance(output_path)
        records = attendance_to_records(agg)
        upsert_const(SCRIPT_JS_PATH, "ATENDIMENTOS", records)
    except Exception:
        report.append("  FALHOU: erro ao processar/gravar ATENDIMENTOS. Detalhes:")
        report.append(traceback.format_exc())
        return False
    report.append(f"  OK -- {len(records)} combinações dia+unidade.")
    return True


def _atualizar_nps(report: list[str]) -> bool:
    report.append("\nPASSO 3/4 -- buscar planilha de NPS de paciente na API do Indecx")
    try:
        output_path = fetch_indecx()
    except IndecxConfigurationError as e:
        report.append(f"  FALHOU: {e}")
        return False
    except RuntimeError as e:
        report.append(f"  FALHOU: {e}")
        return False
    except Exception:
        report.append("  FALHOU: erro inesperado ao buscar na API. Detalhes:")
        report.append(traceback.format_exc())
        return False
    report.append(f"  OK -- planilha salva em {output_path.relative_to(PIPELINE_DIR.parent)}")

    report.append("\nPASSO 4/4 -- recalcular RECORDS/WEEKLY")
    warnings: list[str] = []
    try:
        raw_df = read_from_file(output_path)
        records = build_records(raw_df, warnings=warnings)
        weekly = build_weekly(records)
        upsert_const(SCRIPT_JS_PATH, "RECORDS", records)
        upsert_const(SCRIPT_JS_PATH, "WEEKLY", weekly)
    except Exception:
        report.append("  FALHOU: erro ao processar/gravar RECORDS/WEEKLY. Detalhes:")
        report.append(traceback.format_exc())
        return False
    report.append(f"  OK -- {len(records)} respostas · {len(weekly)} semanas.")
    if warnings:
        report.append("  Avisos de sanitização (revisar manualmente):")
        for w in warnings:
            report.append(f"    - {w}")
    return True


def main() -> int:
    report: list[str] = []
    ok_atendimentos = _atualizar_atendimentos(report)
    ok_nps = _atualizar_nps(report)

    if ok_atendimentos and ok_nps:
        report.append(
            "\nTudo certo. Próximos passos (ver README.md > \"Atualizar os dados e publicar\"):\n"
            "  git status\n"
            "  git diff -- script.js\n"
            "  git add index.html style.css script.js\n"
            '  git commit -m "Atualiza dados do dashboard"\n'
            "  git push"
        )
    else:
        report.append("\nAlgo falhou -- revise as mensagens acima antes de publicar.")

    _log(report)
    return 0 if (ok_atendimentos and ok_nps) else 1


if __name__ == "__main__":
    sys.exit(main())

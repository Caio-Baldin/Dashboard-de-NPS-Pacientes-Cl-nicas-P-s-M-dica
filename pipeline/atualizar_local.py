"""Orquestra a atualização local do dashboard: busca a base de agendamentos
na API da ConsultaJá, atualiza ATENDIMENTOS em script.js e imprime (+ grava
em log) um resumo do que mudou, se funcionou e o que fazer em seguida.

Pensado para ser chamado pelo atalho "Atualizar Dashboard.bat" (raiz do
projeto), mas também roda direto:

    python atualizar_local.py

Só roda quando alguém chama -- nada aqui é agendado. O resumo (console e
pipeline/atualizacoes.log) só contém contagens agregadas (nº de
agendamentos, nº de combinações dia+unidade) -- nunca nome, celular ou
qualquer dado identificável de paciente.
"""
from __future__ import annotations

import json
import re
import sys
import traceback
from datetime import datetime

from attendance import load_attendance, to_records
from config import PIPELINE_DIR, SCRIPT_JS_PATH
from consultaja_client import ConsultaJaConfigurationError
from fetch_consultaja import fetch_and_save
from render_script import upsert_const

LOG_PATH = PIPELINE_DIR / "atualizacoes.log"
_CONST_RE = re.compile(r"^const\s+ATENDIMENTOS\s*=\s*(.*);\s*$")


def _read_atendimentos_snapshot() -> tuple[int, int]:
    """Lê o ATENDIMENTOS atual de script.js sem carregar o resto do
    arquivo (RECORDS/WEEKLY são muito maiores). Devolve
    (nº combinações dia+unidade, total de atendimentos).
    """
    with SCRIPT_JS_PATH.open("r", encoding="utf-8") as f:
        for line in f:
            m = _CONST_RE.match(line)
            if m:
                records = json.loads(m.group(1))
                return len(records), sum(r.get("atendimentos", 0) for r in records)
    return 0, 0


def _log(lines: list[str]) -> None:
    text = "\n".join(lines) + "\n"
    print(text)
    with LOG_PATH.open("a", encoding="utf-8") as f:
        f.write(f"\n===== {datetime.now():%Y-%m-%d %H:%M:%S} =====\n")
        f.write(text)


def main() -> int:
    report: list[str] = []
    report.append("PASSO 1/3 -- buscar agendamentos na API da ConsultaJá")
    try:
        output_path = fetch_and_save()
    except ConsultaJaConfigurationError as e:
        report.append(f"  FALHOU: {e}")
        _log(report)
        return 1
    except RuntimeError as e:
        report.append(f"  FALHOU: {e}")
        _log(report)
        return 1
    except Exception:
        report.append("  FALHOU: erro inesperado ao buscar na API. Detalhes:")
        report.append(traceback.format_exc())
        _log(report)
        return 1

    if output_path is None:
        report.append("  Nenhum agendamento novo encontrado -- script.js não foi alterado.")
        _log(report)
        return 0
    report.append(f"  OK -- planilha salva em {output_path.relative_to(PIPELINE_DIR.parent)}")

    report.append("\nPASSO 2/3 -- recalcular ATENDIMENTOS a partir da planilha")
    try:
        antes_n, antes_total = _read_atendimentos_snapshot()
        agg = load_attendance(output_path)
        records = to_records(agg)
    except Exception:
        report.append("  FALHOU: erro ao processar a planilha baixada. Detalhes:")
        report.append(traceback.format_exc())
        _log(report)
        return 1
    depois_total = sum(r.get("atendimentos", 0) for r in records)
    report.append(f"  Antes:  {antes_n} combinações dia+unidade · {antes_total} atendimentos no total")
    report.append(f"  Depois: {len(records)} combinações dia+unidade · {depois_total} atendimentos no total")
    report.append(f"  Diferença: {len(records) - antes_n:+d} combinações · {depois_total - antes_total:+d} atendimentos")

    report.append("\nPASSO 3/3 -- gravar script.js")
    try:
        upsert_const(SCRIPT_JS_PATH, "ATENDIMENTOS", records)
    except Exception:
        report.append("  FALHOU: erro ao regravar script.js -- o arquivo pode ter ficado inalterado. Detalhes:")
        report.append(traceback.format_exc())
        _log(report)
        return 1
    report.append(f"  OK -- {SCRIPT_JS_PATH.name} atualizado.")

    report.append(
        "\nTudo certo. Próximos passos (ver README.md > \"Atualizar e publicar\"):\n"
        "  git status\n"
        "  git add index.html style.css script.js\n"
        '  git commit -m "Atualiza dados do dashboard"\n'
        "  git push"
    )
    _log(report)
    return 0


if __name__ == "__main__":
    sys.exit(main())

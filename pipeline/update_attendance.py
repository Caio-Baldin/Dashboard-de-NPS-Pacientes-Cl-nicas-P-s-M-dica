"""CLI: atualiza ATENDIMENTOS em script.js a partir da base de agendamentos
(planilha separada de dados-fonte/, não a do Indecx).

Uso:
    python update_attendance.py ../dados-fonte/Base_Consulta_Ja26_08_28.xlsx
    python update_attendance.py ../dados-fonte/Base_Consulta_Ja26_08_28.xlsx --dry-run
"""
from __future__ import annotations

import argparse
from pathlib import Path

from attendance import load_attendance, to_records
from config import SCRIPT_JS_PATH
from render_script import upsert_const


def main() -> None:
    parser = argparse.ArgumentParser(description="Atualiza ATENDIMENTOS no dashboard de NPS.")
    parser.add_argument("input", help="Caminho da planilha de agendamentos (.xlsx)")
    parser.add_argument("--dry-run", action="store_true", help="Não grava script.js, só mostra o resumo")
    args = parser.parse_args()

    path = Path(args.input)
    if not path.exists():
        raise SystemExit(f"Arquivo não encontrado: {path}")

    agg = load_attendance(path)
    records = to_records(agg)

    print(f"{len(records)} combinações dia+unidade agregadas ({agg['atendimentos'].sum()} atendimentos no total).")
    if args.dry_run:
        print("\n--dry-run: script.js não foi alterado.")
        return

    upsert_const(SCRIPT_JS_PATH, "ATENDIMENTOS", records)
    print(f"\n{SCRIPT_JS_PATH} atualizado.")


if __name__ == "__main__":
    main()

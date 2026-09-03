"""CLI do pipeline: busca os dados (planilha em mãos ou baixada na hora via
API do Indecx), normaliza e regrava script.js.

Uso -- planilha já em mãos (exportada manualmente ou por fetch_indecx.py):
    python main.py --source file --input caminho/para/export.xlsx

Uso -- baixa a planilha na hora via API do Indecx (login → exportação →
polling → download, ver indecx_client.py) e já processa em seguida:
    python main.py --source api --dry-run
    python main.py --source api
"""
from __future__ import annotations

import argparse

from config import SCRIPT_JS_PATH
from loaders import read_from_file
from render_script import upsert_const
from transform import build_records, build_weekly


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Atualiza os dados do dashboard de NPS.")
    parser.add_argument("--source", choices=["file", "api"], required=True)
    parser.add_argument("--input", help="Caminho do CSV/XLSX exportado (obrigatório com --source file)")
    parser.add_argument("--sheet", default=0, help="Nome/índice da aba, se for XLSX (padrão: primeira)")
    parser.add_argument("--dry-run", action="store_true", help="Não grava script.js, só mostra o resumo")
    return parser.parse_args()


def main() -> None:
    args = parse_args()

    if args.source == "file":
        if not args.input:
            raise SystemExit("--input é obrigatório com --source file")
        raw_df = read_from_file(args.input, sheet_name=args.sheet)
    else:
        from fetch_indecx import fetch_and_save  # import tardio: requests só é preciso aqui

        input_path = fetch_and_save(dry_run=False)
        if input_path is None:
            raise SystemExit("Nenhuma planilha foi baixada -- nada para processar.")
        raw_df = read_from_file(input_path)

    warnings: list[str] = []
    records = build_records(raw_df, warnings=warnings)
    weekly = build_weekly(records)

    print(f"{len(records)} respostas processadas · {len(weekly)} semanas.")
    if warnings:
        print("\nAvisos de sanitização (revisar manualmente):")
        for w in warnings:
            print(f"  - {w}")

    if args.dry_run:
        print("\n--dry-run: script.js não foi alterado.")
        return

    upsert_const(SCRIPT_JS_PATH, "RECORDS", records)
    upsert_const(SCRIPT_JS_PATH, "WEEKLY", weekly)
    print(f"\n{SCRIPT_JS_PATH} atualizado.")


if __name__ == "__main__":
    main()

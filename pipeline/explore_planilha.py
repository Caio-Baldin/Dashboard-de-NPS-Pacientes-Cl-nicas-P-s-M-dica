"""Explora a estrutura de uma planilha sem expor dado identificável de
paciente: lista abas, cabeçalhos, tipos inferidos e contagem de preenchidos.

Deliberadamente NÃO imprime valores de célula (nome, CPF, telefone, data de
nascimento etc. podem estar na planilha). Para colunas que parecem
categóricas (poucos valores distintos, ex.: unidade, status, convênio),
mostra a contagem por valor -- isso é seguro porque agrega, não expõe o
dado de uma pessoa específica.

Uso:
    python explore_planilha.py "../dados-fonte/Base_Consulta_Ja26_08_28.xlsx"
"""
from __future__ import annotations

import sys
from pathlib import Path

import pandas as pd

# Colunas com esses termos no nome nunca têm a contagem por valor mostrada,
# mesmo que pareçam "categóricas" por terem poucos distintos (ex.: um CPF
# malformado repetido, ou um nome comum) -- proteção extra, não só o limiar.
SENSITIVE_HINTS = [
    "nome", "paciente", "cpf", "rg", "nascimento", "telefone", "celular",
    "email", "e-mail", "endereco", "endereço", "cep", "prontuario",
    "prontuário", "responsavel", "responsável", "mae", "mãe", "pai",
]


def is_sensitive(col_name: str) -> bool:
    normalized = str(col_name).strip().lower()
    return any(hint in normalized for hint in SENSITIVE_HINTS)


def describe_sheet(path: Path, sheet_name) -> None:
    df = pd.read_excel(path, sheet_name=sheet_name)
    print(f"\n=== Aba: {sheet_name} ({len(df)} linhas, {len(df.columns)} colunas) ===")
    for col in df.columns:
        non_null = df[col].notna().sum()
        dtype = df[col].dtype
        n_unique = df[col].nunique(dropna=True)
        flag = " [sensível -- valores ocultos]" if is_sensitive(col) else ""
        print(f"  - {col!r}: tipo={dtype}, preenchidos={non_null}/{len(df)}, distintos={n_unique}{flag}")

        # Só mostra a contagem por valor se: não é sensível, e tem poucos
        # valores distintos (indício de coluna categórica, ex.: unidade,
        # status, convênio) -- nunca para colunas de texto livre/identificação.
        if not is_sensitive(col) and 1 < n_unique <= 15:
            counts = df[col].value_counts(dropna=True)
            for value, count in counts.items():
                print(f"      · {value!r}: {count}")


def main() -> None:
    if len(sys.argv) != 2:
        raise SystemExit("Uso: python explore_planilha.py <caminho_da_planilha.xlsx>")

    path = Path(sys.argv[1])
    if not path.exists():
        raise SystemExit(f"Arquivo não encontrado: {path}")

    xls = pd.ExcelFile(path)
    print(f"Arquivo: {path.name}")
    print(f"Abas encontradas: {xls.sheet_names}")

    for sheet_name in xls.sheet_names:
        describe_sheet(path, sheet_name)


if __name__ == "__main__":
    main()

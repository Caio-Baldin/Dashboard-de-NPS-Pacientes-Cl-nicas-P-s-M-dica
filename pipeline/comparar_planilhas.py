"""Compara duas planilhas exportadas do Indecx célula a célula, sem expor
dado identificável de paciente -- só cabeçalho, contagem de linhas e nº de
diferenças agregado por coluna (nunca o valor de uma célula específica).
Útil pra validar que a exportação via API (fetch_indecx.py) bate com uma
exportação manual da mesma pesquisa.

Uso:
    python comparar_planilhas.py ../dados-fonte/export_indecx_AA_MM_DD.xlsx ../dados-fonte/manual.xlsx
"""
from __future__ import annotations

import sys
from pathlib import Path

import pandas as pd

CHAVE = "db-id"


def carregar(caminho: Path) -> pd.DataFrame:
    return pd.read_excel(caminho, dtype=str, keep_default_na=False)


def comparar_cabecalhos(nome_a: str, df_a: pd.DataFrame, nome_b: str, df_b: pd.DataFrame) -> None:
    cols_a = list(df_a.columns)
    cols_b = list(df_b.columns)

    print("=" * 50)
    print("CABEÇALHO")
    print("=" * 50)

    if cols_a == cols_b:
        print(f"Idêntico nos dois arquivos ({len(cols_a)} colunas).")
        return

    so_a = [c for c in cols_a if c not in cols_b]
    so_b = [c for c in cols_b if c not in cols_a]
    if so_a:
        print(f"Colunas só em {nome_a}:")
        for c in so_a:
            print("  -", c)
    if so_b:
        print(f"Colunas só em {nome_b}:")
        for c in so_b:
            print("  -", c)
    if not so_a and not so_b:
        print("Mesmas colunas, porém em ordem diferente.")


def comparar_dados(nome_a: str, df_a: pd.DataFrame, nome_b: str, df_b: pd.DataFrame) -> None:
    print()
    print("=" * 50)
    print("LINHAS")
    print("=" * 50)
    print(f"{nome_a}: {len(df_a)} linhas")
    print(f"{nome_b}: {len(df_b)} linhas")

    if CHAVE not in df_a.columns or CHAVE not in df_b.columns:
        print(f"\nColuna-chave '{CHAVE}' não encontrada em algum dos arquivos, abortando comparação célula a célula.")
        return

    df_a = df_a.set_index(CHAVE)
    df_b = df_b.set_index(CHAVE)

    for nome, df in ((nome_a, df_a), (nome_b, df_b)):
        dups = df.index[df.index.duplicated()].unique()
        if len(dups):
            print(f"\nAviso: '{CHAVE}' duplicado em {len(dups)} linha(s) de {nome} (mantida a última ocorrência).")

    df_a = df_a[~df_a.index.duplicated(keep="last")]
    df_b = df_b[~df_b.index.duplicated(keep="last")]

    ids_a = set(df_a.index)
    ids_b = set(df_b.index)
    so_a = ids_a - ids_b
    so_b = ids_b - ids_a
    comuns = ids_a & ids_b

    print(f"\nRespostas só em {nome_a}: {len(so_a)}")
    print(f"Respostas só em {nome_b}: {len(so_b)}")
    print(f"Respostas em comum: {len(comuns)}")

    if not comuns:
        print("\nNenhuma resposta em comum para comparar célula a célula.")
        return

    colunas_comuns = [c for c in df_a.columns if c in df_b.columns]
    a_comum = df_a.loc[sorted(comuns), colunas_comuns]
    b_comum = df_b.loc[sorted(comuns), colunas_comuns]

    diffs = a_comum.ne(b_comum)
    total_celulas = diffs.size
    total_diferentes = int(diffs.values.sum())

    print()
    print("=" * 50)
    print("CÉLULAS (apenas respostas em comum)")
    print("=" * 50)
    print(f"Total de células comparadas: {total_celulas}")
    if total_celulas:
        print(f"Total de células diferentes: {total_diferentes} ({total_diferentes / total_celulas:.2%})")

    por_coluna = diffs.sum().sort_values(ascending=False)
    por_coluna = por_coluna[por_coluna > 0]
    if por_coluna.empty:
        print("\nNenhuma diferença em nenhuma coluna.")
    else:
        print(f"\nDiferenças por coluna ({len(por_coluna)} colunas com alguma diferença):")
        for col, qtd in por_coluna.items():
            print(f"  {qtd:5d}  {col}")


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("Uso: python comparar_planilhas.py <planilha_a.xlsx> <planilha_b.xlsx>")

    path_a, path_b = Path(sys.argv[1]), Path(sys.argv[2])
    df_a, df_b = carregar(path_a), carregar(path_b)

    comparar_cabecalhos(path_a.name, df_a, path_b.name, df_b)
    comparar_dados(path_a.name, df_a, path_b.name, df_b)


if __name__ == "__main__":
    main()

"""Leitura da fonte bruta (planilha exportada ou payload de API) e
normalização das colunas para o vocabulário interno do pipeline
(nota/data/hora/unidade/feedback/reacao/sentimento).
"""
from __future__ import annotations

import unicodedata
from pathlib import Path

import pandas as pd

from config import COLUMN_ALIASES


def _normalize_header(name: str) -> str:
    name = str(name).strip().lower()
    name = unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode("ascii")
    return name


def map_columns(df: pd.DataFrame) -> pd.DataFrame:
    """Renomeia as colunas do DataFrame bruto para o vocabulário interno,
    usando COLUMN_ALIASES (config.py). Colunas não mapeadas são descartadas
    -- propositalmente, para não carregar nome/e-mail/telefone/CPF junto.
    """
    normalized = {_normalize_header(col): col for col in df.columns}
    rename_map: dict[str, str] = {}
    missing: list[str] = []

    for internal_key, aliases in COLUMN_ALIASES.items():
        found = next((normalized[a] for a in aliases if a in normalized), None)
        if found:
            rename_map[found] = internal_key
        elif internal_key in ("nota", "data", "unidade"):
            missing.append(internal_key)

    if missing:
        raise ValueError(
            "Não encontrei coluna para os campos obrigatórios "
            f"{missing} no arquivo de origem. Colunas disponíveis: {list(df.columns)}. "
            "Ajuste COLUMN_ALIASES em config.py com o cabeçalho real."
        )

    kept = df[list(rename_map.keys())].rename(columns=rename_map)
    for optional in ("hora", "feedback", "reacao", "sentimento"):
        if optional not in kept.columns:
            kept[optional] = None
    return kept


def read_from_file(path: str | Path, sheet_name: str | int = 0) -> pd.DataFrame:
    """Lê uma planilha exportada do Indecx (CSV ou XLSX) e devolve o
    DataFrame já com as colunas normalizadas."""
    path = Path(path)
    if not path.exists():
        raise FileNotFoundError(f"Arquivo não encontrado: {path}")

    if path.suffix.lower() == ".csv":
        raw = pd.read_csv(path)
    else:
        raw = pd.read_excel(path, sheet_name=sheet_name)

    return map_columns(raw)

"""Normaliza o DataFrame (já com colunas mapeadas por loaders.map_columns)
para o formato que script.js espera: a lista RECORDS e os agregados
semanais WEEKLY.
"""
from __future__ import annotations

import math

import pandas as pd

from sanitize import scrub_feedback


def _categoria(nota: int) -> str:
    if nota >= 9:
        return "promotor"
    if nota >= 7:
        return "passivo"
    return "detrator"


def _parse_dates(series: pd.Series) -> pd.Series:
    """Faz o parse de datas sem assumir uma única ordem dia/mês/ano.

    pandas com dayfirst=True/False aplica a mesma regra pro campo inteiro --
    o que quebra silenciosamente formatos ISO (AAAA-MM-DD, sem ambiguidade)
    se dayfirst=True estiver ligado, e quebra formatos BR (DD/MM/AAAA) se
    estiver desligado. Como a origem pode variar (export do Indecx vs.
    payload de API), detecta o padrão por linha antes de decidir.
    """
    text = series.astype(str).str.strip()
    iso_mask = text.str.match(r"^\d{4}-\d{1,2}-\d{1,2}")

    parsed = pd.Series(pd.NaT, index=text.index, dtype="datetime64[ns]")
    if iso_mask.any():
        parsed.loc[iso_mask] = pd.to_datetime(text.loc[iso_mask], errors="coerce")
    if (~iso_mask).any():
        parsed.loc[~iso_mask] = pd.to_datetime(text.loc[~iso_mask], dayfirst=True, errors="coerce")
    return parsed


def _clean(value):
    """None / NaN -> None; string -> strip; senão devolve como está."""
    if value is None:
        return None
    if isinstance(value, float) and math.isnan(value):
        return None
    if isinstance(value, str):
        stripped = value.strip()
        return stripped
    return value


def build_records(df: pd.DataFrame, *, warnings: list[str]) -> list[dict]:
    df = df.copy()
    df["nota"] = pd.to_numeric(df["nota"], errors="coerce")
    df = df.dropna(subset=["nota", "data"])
    df["nota"] = df["nota"].astype(int)

    parsed_data = _parse_dates(df["data"])
    df = df.loc[parsed_data.notna()].copy()
    df["_data_dt"] = parsed_data.loc[parsed_data.notna()]

    records: list[dict] = []
    for _, row in df.iterrows():
        dt = row["_data_dt"]
        hora = _clean(row.get("hora"))
        if not hora and hasattr(row["_data_dt"], "hour") and (dt.hour or dt.minute):
            hora = dt.strftime("%H:%M")

        unidade = _clean(row.get("unidade")) or ""
        feedback = _clean(row.get("feedback")) or ""
        label = f"unidade={unidade} data={dt.date().isoformat()}"
        feedback = scrub_feedback(feedback, record_label=label, warnings=warnings)

        records.append({
            "nota": int(row["nota"]),
            "categoria": _categoria(int(row["nota"])),
            "data": dt.strftime("%Y-%m-%d"),
            "data_br": dt.strftime("%d/%m/%Y"),
            "hora": hora or "",
            "unidade": unidade,
            "feedback": feedback,
            "reacao": _clean(row.get("reacao")),
            "sentimento": _clean(row.get("sentimento")),
        })

    records.sort(key=lambda r: (r["data"], r["hora"]))
    return records


def _stats(records: list[dict]) -> dict:
    total = len(records)
    promotores = sum(1 for r in records if r["categoria"] == "promotor")
    passivos = sum(1 for r in records if r["categoria"] == "passivo")
    detratores = sum(1 for r in records if r["categoria"] == "detrator")
    nps = round(((promotores / total) - (detratores / total)) * 1000) / 10 if total else 0.0
    avg = round(sum(r["nota"] for r in records) / total, 2) if total else 0.0
    return {
        "total": total,
        "promotores": promotores,
        "passivos": passivos,
        "detratores": detratores,
        "nps": nps,
        "avg": avg,
    }


def build_weekly(records: list[dict]) -> list[dict]:
    """Agrega por semana ISO (segunda-feira como início), igual à lógica
    de weeklyForUnit() em script.js, para os dois lados baterem."""
    by_week: dict[str, list[dict]] = {}
    for r in records:
        dt = pd.Timestamp(r["data"])
        monday = dt - pd.Timedelta(days=dt.weekday())
        key = monday.strftime("%Y-%m-%d")
        by_week.setdefault(key, []).append(r)

    weekly: list[dict] = []
    for key in sorted(by_week):
        recs = by_week[key]
        stats = _stats(recs)
        label = pd.Timestamp(key).strftime("%d/%m")
        weekly.append({"week": key, "label": label, **stats})
    return weekly

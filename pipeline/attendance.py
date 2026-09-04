"""Lê a base de agendamentos (planilha separada da pesquisa de NPS -- ver
dados-fonte/) e agrega em contagem de atendimentos por dia + unidade. Isso
vira o denominador do card "Engajamento": respostas de NPS / atendimentos
no mesmo período e unidade.

Regra confirmada com o time: "atendimento" = Status em {Compareceu,
Atendido}. Os demais status (Cancelado, Faltou, Agendado, Confirmado) não
contam -- não houve, ou ainda não houve, a visita que gera a pesquisa.

Só as colunas Data/Status/Unidade são lidas -- Paciente/Celular/Profissional
nunca entram no agregado, então não há dado identificável de paciente no
resultado.
"""
from __future__ import annotations

from pathlib import Path

import pandas as pd

ATTENDED_STATUSES = {"Compareceu", "Atendido"}

# Nome da unidade na base de agendamentos -> nome usado no dashboard de NPS.
# Confirmado com o time: "São Paulo" (agendamentos) = "CONSOLAÇÃO" (NPS).
#
# Bug encontrado em 04/09/2026: o Indecx passou a exportar o nome da unidade
# com o prefixo "QUINTAL SLM - " (ex.: "QUINTAL SLM - CONSOLAÇÃO"), mas esse
# mapa ainda apontava pro nome antigo sem prefixo -- comparação exata em
# script.js (a.unidade===currentUnit) nunca batia, então Engajamento sempre
# mostrava "Sem dados de atendimento" ao filtrar por qualquer unidade
# específica (não só num dia -- em qualquer período). Corrigido para bater
# com o valor real de RECORDS[].unidade.
UNIT_MAP = {
    "São Paulo": "QUINTAL SLM - CONSOLAÇÃO",
    "Campinas": "QUINTAL SLM - CAMPINAS",
    "Brasília": "QUINTAL SLM - BRASÍLIA",
}

# Unidades sem correspondente no mapa acima (ex.: "Online" -- teleconsulta,
# atende pacientes de qualquer filial, sem divisão física) não são
# descartadas: entram no agregado com o próprio nome original. Decisão do
# time (04/09/2026): contam no total geral de atendimentos (filtro "Tudo"),
# mas naturalmente não aparecem ao filtrar por uma unidade física específica
# -- já que não há como atribuí-las a uma filial.


def load_attendance(path: str | Path) -> pd.DataFrame:
    """Devolve um DataFrame agregado com colunas: data (AAAA-MM-DD),
    unidade (mapeada para o vocabulário do NPS quando possível, ou o nome
    original da base quando não há correspondente -- ex.: "Online"),
    atendimentos (contagem).
    """
    df = pd.read_excel(path, usecols=["Data", "Status", "Unidade"])
    attended = df[df["Status"].isin(ATTENDED_STATUSES)].copy()

    unmapped = sorted(set(attended["Unidade"]) - set(UNIT_MAP))
    if unmapped:
        counts = attended.loc[attended["Unidade"].isin(unmapped), "Unidade"].value_counts()
        print(
            "Aviso: unidades sem correspondente no NPS, mantidas no agregado com o nome original "
            "(contam no total geral, não em nenhuma unidade física específica): "
            + ", ".join(f"{u} ({counts[u]})" for u in unmapped)
        )

    attended["unidade"] = attended["Unidade"].map(UNIT_MAP).fillna(attended["Unidade"])
    attended["data"] = pd.to_datetime(attended["Data"], format="%d/%m/%Y").dt.strftime("%Y-%m-%d")

    agg = (
        attended.groupby(["data", "unidade"])
        .size()
        .reset_index(name="atendimentos")
        .sort_values(["data", "unidade"])
    )
    return agg


def to_records(agg: pd.DataFrame) -> list[dict]:
    return agg.to_dict(orient="records")

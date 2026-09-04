"""Lê a base de agendamentos (planilha separada da pesquisa de NPS -- ver
dados-fonte/) e agrega em contagem de atendimentos por dia + unidade. Isso
vira o denominador do card "Engajamento": respostas de NPS / atendimentos
no mesmo período e unidade.

Regra confirmada com o time (atualizada em 04/09/2026): "atendimento" =
Status "Compareceu". "Atendido" era a nomenclatura antiga -- parou de ser
usada em ago/2025 (confirmado nos dados: nenhum registro com esse status
depois dessa data) -- então foi removida da contagem para refletir só a
nomenclatura atual. Os demais status (Cancelado, Faltou, Agendado,
Confirmado) não contam -- não houve, ou ainda não houve, a visita que gera
a pesquisa.

Só as colunas Data/Status/Unidade são lidas -- Paciente/Celular/Profissional
nunca entram no agregado, então não há dado identificável de paciente no
resultado.
"""
from __future__ import annotations

from pathlib import Path

import pandas as pd

ATTENDED_STATUSES = {"Compareceu"}

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

# "Online" (teleconsulta, sem divisão de filial) não entra no agregado --
# decisão do time (04/09/2026): desconsiderar essa unidade por completo do
# card de Engajamento, não só ao filtrar por filial. Reportada à parte
# (aviso no console), não descartada em silêncio.


def load_attendance(path: str | Path) -> pd.DataFrame:
    """Devolve um DataFrame agregado com colunas: data (AAAA-MM-DD),
    unidade (já mapeada para o vocabulário do NPS), atendimentos (contagem).
    """
    df = pd.read_excel(path, usecols=["Data", "Status", "Unidade"])
    attended = df[df["Status"].isin(ATTENDED_STATUSES)].copy()

    unmapped = sorted(set(attended["Unidade"]) - set(UNIT_MAP))
    if unmapped:
        counts = attended.loc[attended["Unidade"].isin(unmapped), "Unidade"].value_counts()
        print(
            "Aviso: unidades sem correspondente no NPS, excluídas do agregado por completo: "
            + ", ".join(f"{u} ({counts[u]})" for u in unmapped)
        )

    attended["unidade"] = attended["Unidade"].map(UNIT_MAP)
    attended["data"] = pd.to_datetime(attended["Data"], format="%d/%m/%Y").dt.strftime("%Y-%m-%d")

    mapped = attended.dropna(subset=["unidade"])
    agg = (
        mapped.groupby(["data", "unidade"])
        .size()
        .reset_index(name="atendimentos")
        .sort_values(["data", "unidade"])
    )
    return agg


def to_records(agg: pd.DataFrame) -> list[dict]:
    return agg.to_dict(orient="records")

"""Configuração do pipeline: caminhos, credenciais e mapeamento de colunas.

Credenciais nunca ficam hardcoded aqui -- vêm de variáveis de ambiente
(arquivo .env local, fora do controle de versão). Veja .env.example.
"""
from __future__ import annotations

import os
from dataclasses import dataclass
from pathlib import Path

from dotenv import load_dotenv

load_dotenv()

PIPELINE_DIR = Path(__file__).resolve().parent
PROJECT_DIR = PIPELINE_DIR.parent
SCRIPT_JS_PATH = PROJECT_DIR / "script.js"
DADOS_FONTE_DIR = PROJECT_DIR / "dados-fonte"


@dataclass(frozen=True)
class IndecxConfig:
    email: str | None
    senha: str | None
    frontend_access_key: str | None

    @property
    def is_configured(self) -> bool:
        return bool(self.email and self.senha and self.frontend_access_key)


def load_indecx_config() -> IndecxConfig:
    return IndecxConfig(
        email=os.getenv("INDECX_EMAIL") or None,
        senha=os.getenv("INDECX_SENHA") or None,
        frontend_access_key=os.getenv("INDECX_FRONTEND_ACCESS_KEY") or None,
    )


@dataclass(frozen=True)
class ConsultaJaConfig:
    token: str | None
    start_date: str | None
    end_date: str | None

    @property
    def is_configured(self) -> bool:
        return bool(self.token)


def load_consultaja_config() -> ConsultaJaConfig:
    return ConsultaJaConfig(
        token=os.getenv("CONSULTAJA_TOKEN") or None,
        start_date=os.getenv("CONSULTAJA_START_DATE") or None,
        end_date=os.getenv("CONSULTAJA_END_DATE") or None,
    )


# Campos que o dashboard usa (script.js). Qualquer coluna da planilha/API que
# não esteja mapeada aqui é descartada -- isso é proposital: é a proteção
# contra vazar coluna de nome/e-mail/telefone/CPF/prontuário sem querer.
# Cada chave interna aceita uma lista de apelidos (normalizados: minúsculo,
# sem acento) para casar com o nome real da coluna exportada. Ajuste as
# listas se o cabeçalho do Indecx não for reconhecido automaticamente.
COLUMN_ALIASES: dict[str, list[str]] = {
    "nota": ["nota", "score", "nps", "grade", "avaliacao"],
    "data": [
        "data", "data da resposta", "data resposta", "data_resposta",
        "data de envio", "data_envio", "created at", "data envio",
    ],
    "hora": ["hora", "horario", "hora da resposta"],
    "unidade": ["unidade", "clinica", "unit", "local", "filial"],
    "feedback": [
        "feedback", "comentario", "observacao", "resposta aberta",
        "comentario livre", "sugestao", "texto",
    ],
    # Opcionais: só existem se a planilha/API já vier com essa classificação.
    "reacao": ["reacao", "sentimento_categoria", "classificacao"],
    "sentimento": ["sentimento", "sentiment_score", "score sentimento", "sentimento_score"],
}

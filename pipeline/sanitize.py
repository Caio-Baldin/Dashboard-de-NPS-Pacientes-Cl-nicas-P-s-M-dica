"""Rede de segurança extra contra PII digitada por engano no campo de
comentário livre (já aconteceu antes -- ver README.md do projeto: um
telefone foi apagado manualmente do dataset atual).

Isto NÃO substitui a etapa de anonimização por coluna feita em transform.py
(que já descarta nome/e-mail/telefone/CPF/prontuário por não fazer parte do
esquema do dashboard). É só uma checagem adicional dentro do texto livre.
"""
from __future__ import annotations

import re

_EMAIL_RE = re.compile(r"[\w.+-]+@[\w-]+\.[a-zA-Z]{2,}")
_CPF_RE = re.compile(r"\b\d{3}\.?\d{3}\.?\d{3}-?\d{2}\b")
_PHONE_RE = re.compile(r"(?:\+?55\s?)?\(?\d{2}\)?[\s.-]?9?\d{4}[-.\s]?\d{4}\b")

_PATTERNS = {
    "e-mail": _EMAIL_RE,
    "CPF": _CPF_RE,
    "telefone": _PHONE_RE,
}


def scrub_feedback(text: str, *, record_label: str, warnings: list[str]) -> str:
    """Remove padrões de e-mail/CPF/telefone de um comentário livre.

    `record_label` identifica o registro (ex.: "unidade=BRASÍLIA data=2026-08-06")
    para o aviso -- nunca o conteúdo sensível em si.
    """
    if not text:
        return text
    cleaned = text
    for kind, pattern in _PATTERNS.items():
        if pattern.search(cleaned):
            cleaned = pattern.sub("[removido]", cleaned)
            warnings.append(f"{kind} removido do comentário ({record_label}) -- revisar manualmente")
    return cleaned

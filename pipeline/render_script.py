"""Regrava constantes de dados no topo de script.js (const RECORDS, const
WEEKLY, const ATENDIMENTOS...), preservando todo o resto do arquivo (lógica
dos gráficos, filtros etc.) intocado.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

_CONST_RE = re.compile(r"^const\s+([A-Za-z_][A-Za-z0-9_]*)\s*=")


def upsert_const(script_path: Path, name: str, value) -> None:
    """Substitui a declaração `const {name} = ...;` existente no bloco de
    dados no topo do arquivo, ou insere uma nova no fim desse bloco se ainda
    não existir. Não toca em nada fora desse bloco.
    """
    # newline="" desliga a tradução automática de fim de linha: sem isso, no
    # Windows, write_text() converteria todo "\n" para "\r\n" -- inclusive
    # nas linhas que nem foram tocadas -- e o diff mostraria o arquivo
    # inteiro como alterado a cada execução.
    lines = script_path.read_text(encoding="utf-8", newline="").splitlines(keepends=True)

    block_end = 0
    for line in lines:
        if _CONST_RE.match(line):
            block_end += 1
        else:
            break

    if block_end == 0:
        raise RuntimeError(
            f"{script_path} não começa com uma declaração 'const NOME = ...;' -- "
            "abortando para não corromper o arquivo. Verifique manualmente antes de rodar de novo."
        )

    new_line = f"const {name} = {json.dumps(value, ensure_ascii=False)};\n"

    for i in range(block_end):
        if _CONST_RE.match(lines[i]).group(1) == name:
            lines[i] = new_line
            break
    else:
        lines.insert(block_end, new_line)

    script_path.write_text("".join(lines), encoding="utf-8", newline="")

"""Cliente para a API do Indecx -- login, disparo da exportação da pesquisa
de NPS de paciente, espera (polling) e download do xlsx pronto.

Ao contrário da versão anterior deste arquivo (um template especulativo,
nunca testado contra a API real), este cliente replica um fluxo que já
funciona de verdade em outro projeto (ouvidoria-csat/motor, mesma empresa
Indecx, porém pesquisa de ouvidoria acadêmica) -- aqui só com
groupId/actionId/metric trocados para a pesquisa de NPS de paciente
(capturados via DevTools em 2026-09-03, na tela de exportação dessa
pesquisa). companyId é o mesmo nos dois casos (mesma conta Indecx).

Não usa navegador/Selenium -- reproduz diretamente as requisições HTTP que
o front-end do Indecx faz (login → solicitar exportação → polling em
/v2/downloads/ até status "concluido" → resolver o link do arquivo pronto).

Só deve ser chamado manualmente (via fetch_indecx.py ou
`main.py --source api`). Nenhuma automação não-supervisionada
(agendador/cron) foi configurada -- mesma decisão consciente já tomada para
a ConsultaJá (ver consultaja_client.py): cada exportação traz comentário
livre de paciente, então cada execução deve continuar sendo uma decisão de
quem está rodando.
"""
from __future__ import annotations

import time
from datetime import date, datetime, timedelta, timezone
from pathlib import Path

import requests

from config import IndecxConfig

USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/151.0.0.0 Safari/537.36"
)

LOGIN_URL = "https://indecx.com/v2/login?lang=br&systemLanguage=br"
VALIDATE_TOKEN_URL = "https://indecx.com/v2/validateToken/?lang=br&systemLanguage=br"

COMPANY_ID = "62ed67c01d963405b0c7cad7"

# Pesquisa de NPS de paciente -- diferente da pesquisa de ouvidoria
# acadêmica usada em outro projeto (mesma empresa, groupId/actionId/metric
# próprios de cada pesquisa).
GROUP_ID = "6a282489ddfe28001af8c1a4"
ACTION_ID = '["6a15af9e877fbb00340336e9"]'
METRIC = "nps-0-10"

EXPORT_URL = (
    "https://5wt0wckoze.execute-api.us-east-1.amazonaws.com"
    f"/production/v3/answers/download/{COMPANY_ID}/xlsx/"
)
DOWNLOADS_URL = f"https://indecx.com/v2/downloads/{COMPANY_ID}/"
DOWNLOAD_URL = "https://5wt0wckoze.execute-api.us-east-1.amazonaws.com/production/v3/download/"

DOWNLOADS_PARAMS = {"page": "1", "limit": "10", "totalSize": "0", "lang": "br", "systemLanguage": "br"}

# Status que indicam que a exportação não vai terminar -- para de esperar e
# falha na hora em vez de rodar as tentativas todas até estourar o timeout.
STATUS_FALHA = {"erro", "error", "falhou", "failed"}

POLL_TENTATIVAS = 60
POLL_INTERVALO_SEGUNDOS = 5


class IndecxConfigurationError(RuntimeError):
    """Faltam INDECX_EMAIL/INDECX_SENHA/INDECX_FRONTEND_ACCESS_KEY no .env,
    ou as credenciais foram rejeitadas pela API."""


def _build_export_params() -> dict:
    """Monta os parâmetros da exportação com a janela de datas terminando
    sempre hoje (últimos 365 dias), em vez de datas fixas que ficam
    desatualizadas com o tempo."""
    hoje = date.today()
    um_ano_atras = hoje - timedelta(days=365)
    return {
        "startDate": um_ano_atras.isoformat(),
        "endDate": hoje.isoformat(),
        "metric": METRIC,
        "actionId": ACTION_ID,
        "groupId": GROUP_ID,
        "indicatorRange": '{"selected":null,"end":null,"start":null}',
        "page": "1",
        "limit": "10",
        "totalSize": "138",
        "selectComments": "false",
        "sortDesc": "false",
        "csvSeparator": "comma",
        "lang": "br",
        "systemLanguage": "br",
    }


class IndecxClient:
    def __init__(self, cfg: IndecxConfig, *, timeout: float = 30.0):
        if not cfg.is_configured:
            raise IndecxConfigurationError(
                "INDECX_EMAIL / INDECX_SENHA / INDECX_FRONTEND_ACCESS_KEY não configurados. "
                "Copie pipeline/.env.example para pipeline/.env e preencha."
            )
        self._cfg = cfg
        self._timeout = timeout

    def _headers_base(self, token: str | None = None, origem: str = "https://v3.app-indecx.com") -> dict:
        headers = {
            "frontend-access-key": self._cfg.frontend_access_key,
            "origin": origem,
            "referer": f"{origem}/",
        }
        if token:
            headers["x-access-token"] = token
        return headers

    def _fazer_login(self) -> str:
        # Diferente dos outros endpoints, o login não exige
        # frontend-access-key/origin/referer -- só email/senha no corpo.
        response = requests.post(
            LOGIN_URL,
            json={"email": self._cfg.email, "password": self._cfg.senha},
            timeout=self._timeout,
        )
        if response.status_code != 200:
            raise IndecxConfigurationError(f"Falha no login do Indecx: {response.text}")

        token = response.json().get("token")
        if not token:
            raise IndecxConfigurationError("Login no Indecx realizado, mas nenhum token foi recebido.")
        return token

    def _validar_token(self, token: str) -> None:
        headers = {"content-type": "application/json", **self._headers_base(token)}
        response = requests.post(
            VALIDATE_TOKEN_URL, headers=headers, json={"token": token}, timeout=self._timeout
        )
        if response.status_code != 200:
            raise IndecxConfigurationError(f"Token do Indecx rejeitado: {response.text}")

    def validar_credenciais(self) -> None:
        """Faz login e valida o token, sem disparar exportação nem baixar
        nada -- usado pelo --dry-run de fetch_indecx.py pra checar o .env
        sem gerar uma exportação de verdade."""
        token = self._fazer_login()
        self._validar_token(token)

    def _solicitar_exportacao(self, token: str) -> str:
        """Dispara a geração assíncrona do xlsx. A resposta só confirma que
        o pedido foi aceito -- quem acha o arquivo pronto depois é o
        polling em _aguardar_download()."""
        headers = {
            "accept": "application/json, text/plain, */*",
            "user-agent": USER_AGENT,
            **self._headers_base(token),
        }
        inicio = datetime.now(timezone.utc).isoformat()
        response = requests.get(
            EXPORT_URL, params=_build_export_params(), headers=headers, timeout=self._timeout
        )
        if response.status_code != 200:
            raise RuntimeError(f"Falha ao solicitar exportação no Indecx: {response.text}")
        return inicio

    def _obter_downloads(self, token: str) -> list[dict]:
        headers = {
            "accept": "application/json, text/plain, */*",
            "user-agent": USER_AGENT,
            **self._headers_base(token),
        }
        response = requests.get(DOWNLOADS_URL, params=DOWNLOADS_PARAMS, headers=headers, timeout=self._timeout)
        if response.status_code != 200:
            raise RuntimeError(f"Erro ao consultar downloads do Indecx: {response.text}")
        return response.json().get("availableDownloads", [])

    def _aguardar_download(self, token: str, inicio_exportacao: str) -> str:
        """Faz polling em _obter_downloads() até achar a exportação que
        acabamos de solicitar (identificada por createdAt > inicio, já que
        a API não devolve o ID no momento da solicitação) chegar a
        status "concluido". Tenta por até 5 minutos."""
        for tentativa in range(POLL_TENTATIVAS):
            for download in self._obter_downloads(token):
                if (
                    download.get("fileExtension") == "xlsx"
                    and download.get("type") == "answers"
                    and download.get("createdAt", "") > inicio_exportacao
                ):
                    status = download.get("status")
                    if status == "concluido":
                        return download["_id"]
                    if status in STATUS_FALHA:
                        raise RuntimeError(f"Exportação falhou no Indecx (status={status}).")
                    break
            if tentativa < POLL_TENTATIVAS - 1:
                time.sleep(POLL_INTERVALO_SEGUNDOS)
        raise RuntimeError("A exportação no Indecx não foi concluída dentro de 5 minutos.")

    def _baixar_arquivo(self, token: str, download_id: str, caminho_destino: Path) -> None:
        """DOWNLOAD_URL + download_id devolve não o xlsx em si, mas um link
        (geralmente S3/CDN) -- por isso os dois requests em sequência."""
        headers = {
            "accept": "application/json, text/plain, */*",
            **self._headers_base(token, origem="https://indecx.com"),
        }
        response = requests.get(
            f"{DOWNLOAD_URL}{download_id}",
            params={"lang": "br", "systemLanguage": "br"},
            headers=headers,
            timeout=self._timeout,
        )
        if response.status_code != 200:
            raise RuntimeError(f"Erro ao obter link do arquivo no Indecx: {response.text}")

        xlsx_url = response.json()
        arquivo = requests.get(xlsx_url, timeout=self._timeout)
        if arquivo.status_code != 200:
            raise RuntimeError(f"Erro ao baixar o xlsx do Indecx: status {arquivo.status_code}")

        caminho_destino.write_bytes(arquivo.content)

    def baixar_planilha(self, caminho_destino: Path) -> Path:
        """Fluxo completo: login → validar token → solicitar exportação →
        aguardar (até 5min) → baixar. Sempre baixa a exportação mais
        recente da pesquisa de NPS de paciente (últimos 365 dias)."""
        token = self._fazer_login()
        self._validar_token(token)
        inicio = self._solicitar_exportacao(token)
        download_id = self._aguardar_download(token, inicio)
        self._baixar_arquivo(token, download_id, caminho_destino)
        return caminho_destino

# Progresso — Dashboard de NPS (SLMandic)

Documento de continuidade: estado atual do projeto, decisões tomadas e o que falta. Última atualização: 2026-09-03.

## Próximo passo imediato (retomar daqui)

**Pendência do Indecx resolvida nesta sessão (03/09/2026) -- falta só preencher o `.env` e testar.**
`indecx_client.py` deixou de ser um template especulativo: agora replica o fluxo real de automação já validado
em outro projeto (`ouvidoria-csat/motor`, mesma empresa Indecx, pesquisa diferente -- ouvidoria acadêmica) --
login → solicitar exportação → polling em `/v2/downloads/` → download do xlsx. Só o `groupId`/`actionId`/`metric`
mudam entre as duas pesquisas; `companyId` é o mesmo. Os valores da pesquisa de NPS de paciente foram capturados
via DevTools nesta sessão (ver constantes no topo de `indecx_client.py`).

Novo arquivo `fetch_indecx.py` (mesmo padrão de `fetch_consultaja.py`): baixa a planilha e salva em
`dados-fonte/export_indecx_AAAA_MM_DD.xlsx` (avisa no console se o arquivo do dia já existir, em vez de
sobrescrever em silêncio -- diferente do bug conhecido do `fetch_consultaja.py`, ver pendência 5 abaixo).
`main.py --source api` agora chama esse fluxo direto (baixa + já processa), sem precisar de `--date-from`/`--date-to`
(a janela é sempre os últimos 365 dias, calculada na hora, igual ao motor original).

**Falta você fazer, antes de rodar de verdade:**
1. Copiar `pipeline/.env.example` para `pipeline/.env` e preencher `INDECX_EMAIL` / `INDECX_SENHA` /
   `INDECX_FRONTEND_ACCESS_KEY` -- mesma conta Indecx que você já usa pra exportar a planilha na mão (login/senha
   iguais; o assistente não tem acesso a esses valores, nunca foram digitados na conversa).
2. Rodar `python fetch_indecx.py --dry-run` primeiro (só valida login/token, não gera exportação) --
   se der erro, revisar as credenciais antes de seguir.
3. Depois, `python main.py --source api --dry-run` (baixa de verdade + mostra resumo, mas não grava `script.js`)
   e conferir o nº de respostas/avisos de sanitização antes de rodar sem `--dry-run`.
4. Se `groupId`/`actionId` capturados estiverem errados (ex.: pesquisa/período errado), o request de exportação
   ainda retorna 200 mas o arquivo baixado pode vir vazio ou com a pesquisa errada -- comparar o nº de respostas
   com o que aparece na tela do Indecx antes de confiar no primeiro resultado.

Confirmado em sessão anterior (31/08/2026): `ATENDIMENTOS` (ConsultaJá → card "Engajamento") e `RECORDS`/`WEEKLY`
(Indecx → NPS Score/Respostas/Nota média/Promotores/Detratores) são fontes **completamente independentes** --
rodar um pipeline não atualiza o outro. Ver `script.js:30-53` (`computeStats()` usa `RECORDS`, `computeEngajamento()`
usa `ATENDIMENTOS`).

`base-manual-certa.xlsx` (colocada na raiz do projeto por engano em 31/08) foi movida para `dados-fonte/` nesta
sessão -- estrutura conferida (`explore_planilha.py`, só cabeçalho/contagens agregadas): é uma base de
agendamentos (mesmo formato ConsultaJá), não a planilha do Indecx. Serve como fonte alternativa pro
`update_attendance.py` (Engajamento), não pro NPS.

Outras pendências (repositório GitHub ainda não criado, hospedagem, etc.) estão listadas em "Pendências / próximos
passos", no fim deste documento.

`codigo-consultaja.txt` (rascunho do script original, que ficava na raiz) **foi apagado** -- toda a lógica dele já
está em `pipeline/consultaja_client.py`/`fetch_consultaja.py`, então não fazia mais falta.

## Estrutura do projeto

```
index.html          estrutura da página
style.css            tema navy/gold, claro/escuro
script.js            dados embutidos (RECORDS/WEEKLY/ATENDIMENTOS) + toda a lógica de gráficos/filtros
README.md            visão geral do dashboard + fluxo de atualização/publicação
.gitignore            raiz do projeto -- protege .env, dado bruto, .venv, log local (ver seção de segurança abaixo)
Atualizar Dashboard.bat   atalho local: roda o pipeline da ConsultaJá e mostra o resumo

dados-fonte/          planilhas brutas (gitignored -- nunca versionar/hospedar)
  Base_Consulta_Ja26_08_28.xlsx, Base_Consulta_Ja26_08_30.xlsx, ...   base de agendamentos (uma por execução, geradas por fetch_consultaja.py), usada só pelo Engajamento

pipeline/             scripts Python que regeneram os dados de script.js
  main.py                  RECORDS/WEEKLY a partir de export do Indecx (planilha em mãos ou baixada via API)
  update_attendance.py     ATENDIMENTOS a partir da base de agendamentos
  fetch_consultaja.py      busca a base de agendamentos direto na API da ConsultaJá (opcional, manual)
  fetch_indecx.py          busca a planilha de NPS de paciente direto na API do Indecx (opcional, manual)
  atualizar_local.py       orquestra fetch_consultaja.py + update_attendance.py e gera o resumo (chamado pelo .bat)
  explore_planilha.py      explora estrutura de uma planilha nova sem expor dado de paciente
  attendance.py, transform.py, loaders.py, sanitize.py, render_script.py, config.py, indecx_client.py, consultaja_client.py
  atualizacoes.log         (gitignored) histórico local das execuções -- só contagens agregadas
  README.md                 como rodar cada script
```

Não existe Node/build step -- é HTML/CSS/JS puro servido estaticamente. O Python do pipeline é só para regenerar os dados embutidos em `script.js`; o dashboard em si não depende de Python em tempo de execução.

## O que já está implementado

**Dashboard (`index.html`/`style.css`/`script.js`)**
- KPIs gerais (Visão geral): NPS Score, Respostas, Nota média, Promotores, Detratores, Engajamento.
- Seletor Tudo/Dia/Semana/Mês/Ano na Visão geral -- mostra o **período mais recente** daquela granularidade (não navega para períodos antigos ainda). Só afeta o KPI row, o resto do dashboard continua mostrando o total.
- Distribuição das respostas: donut por categoria NPS + barras por nota.
- Evolução ao longo do tempo: gráfico de linha com filtro Dia/Semana/Mês/Ano (independente do filtro da Visão geral).
- NPS por unidade, reação do comentário (classificação de sentimento do texto livre), lista de comentários com busca e filtro por categoria.
- Filtro global por unidade (topo da página) e tema claro/escuro.

**Pipeline Python**
- `main.py --source file --input planilha.xlsx` -- lê export do Indecx, gera `RECORDS`/`WEEKLY`.
- `update_attendance.py planilha.xlsx` -- lê a base de agendamentos, gera `ATENDIMENTOS`.
- `fetch_consultaja.py` -- busca agendas/agendamentos direto na API da ConsultaJá e salva o Excel em `dados-fonte/` (mesmo formato que já era exportado manualmente). Substitui só o passo de exportar a planilha à mão; o próximo passo continua sendo `update_attendance.py` no arquivo gerado. Roda só quando chamado manualmente -- não há agendador/cron configurado, por decisão consciente (cada resposta da API traz nome/celular de paciente).
- `atualizar_local.py` (chamado por `Atualizar Dashboard.bat`, na raiz) -- encadeia `fetch_consultaja.py` + `update_attendance.py` num só clique local: busca na API, recalcula `ATENDIMENTOS`, grava `script.js` e imprime um resumo (nº de combinações dia+unidade e atendimentos antes/depois, o que falhou se falhou). Se algo quebrar antes do passo de gravação, `script.js` não é tocado. O resumo também vai para `pipeline/atualizacoes.log` (gitignored) -- só contagens agregadas, nunca nome/celular de paciente.
- `render_script.py: upsert_const()` -- mecanismo genérico que substitui só a linha da constante de dados que está sendo atualizada, sem tocar no resto do `script.js` (gráficos/filtros intactos).
- Anonimização por lista de permissão: só os campos que o dashboard usa são extraídos; qualquer coluna de nome/e-mail/telefone/CPF/prontuário é descartada automaticamente, mesmo sem filtrar manualmente.
- `sanitize.py` varre o comentário livre e remove e-mail/CPF/telefone digitado por engano.

## Como cada número da "Visão geral" é calculado

Todos partem do mesmo conjunto de respostas: primeiro filtra por unidade (`filteredRecords()`), depois pelo período escolhido no chip Dia/Semana/Mês/Ano/Tudo (`computeOverviewStats()`, script.js).

- **Respostas** = contagem de respostas nesse conjunto.
- **Nota média** = média do campo `nota` (0–10).
- **Promotores / Detratores** = % de respostas com `categoria` = `promotor` / `detrator` (nota 9–10 = promotor, 7–8 = passivo, 0–6 = detrator).
- **NPS Score** = % promotores − % detratores.
- **Engajamento** = respostas de NPS ÷ atendimentos (`ATENDIMENTOS`, filtrado por `Status` = Compareceu/Atendido) no **mesmo período e unidade**. No modo "Tudo" o período é o intervalo coberto por todas as respostas carregadas (hoje: 10/jun–26/ago/2026); nos outros modos é o período-calendário exato (ex.: mês inteiro, ano inteiro) -- por isso o % muda bastante entre "Tudo" e "Ano" mesmo com o mesmo numerador.

## Decisões de negócio confirmadas

- **Engajamento**: atendimento = `Status` em `Compareceu` ou `Atendido` (demais status -- Cancelado, Faltou, Agendado, Confirmado -- não contam).
- **Mapeamento de unidade**: `São Paulo` (base de agendamentos) = `CONSOLAÇÃO` (NPS). `Campinas`/`Brasília` batem direto. `Online` não tem correspondente no NPS hoje -- fica de fora do agregado por unidade, mas é reportado no terminal ao rodar o pipeline (não descartado em silêncio).

## Pendências / próximos passos

1. **API do Indecx**: resolvida em 03/09/2026 -- `indecx_client.py` agora é uma implementação real (login/exportação/polling/download), não mais um template. Falta só o usuário preencher `pipeline/.env` com as credenciais e rodar `fetch_indecx.py --dry-run` pra validar (ver "Próximo passo imediato" no topo deste arquivo). O caminho por planilha exportada manualmente (`main.py --source file`) continua funcionando como alternativa/fallback.
2. **Hospedagem**: ainda não decidida (repositório GitHub ainda não criado). Por política interna, não hospedar em serviços externos (Vercel/Netlify/Hostinger etc.) -- levar para a TI indicar um ambiente interno, já que os dados (mesmo anonimizados) são de pacientes. Ver aviso em `README.md`. Fluxo de publicação já está pronto (Plano A, item 5 abaixo): quando o repositório existir, é só seguir "Primeira vez" no `README.md`.
   - **Descartado por decisão consciente**: um botão dentro da própria página publicada que chamasse a API da ConsultaJá ao vivo (exigiria token exposto no navegador a qualquer visitante) e atualização automática/agendada rodando sozinha sem supervisão (exigiria um backend em ambiente interno, autenticação no endpoint e alinhamento prévio com a TI). Ver Plano A abaixo, que evita os dois problemas.
3. **Navegação de períodos**: hoje o seletor Dia/Semana/Mês/Ano da Visão geral só mostra o período mais recente. Se quiser navegar para períodos anteriores (setas ‹ ›), fica para uma próxima iteração -- foi a opção descartada quando perguntei.
4. Se a base de agendamentos for atualizada (novo arquivo em `dados-fonte/`), rodar `update_attendance.py` de novo para atualizar `ATENDIMENTOS`. Não precisa rodar toda vez que `RECORDS` muda -- só quando a planilha de agendamentos mudar.
5. **API da ConsultaJá -- Plano A (implementado e testado)**: `Atualizar Dashboard.bat` → `pipeline/atualizar_local.py` roda local, busca na API e regrava `ATENDIMENTOS` em `script.js`, com resumo do que mudou/falhou. Continua exigindo execução manual (decisão consciente: nenhum agendador/cron, porque cada resposta da API traz nome/celular de paciente -- automatizar sem supervisão exigiria alinhar antes com a TI). O token vive só em `pipeline/.env` (nunca commitado, `.gitignore` verificado com simulação de `git add -A`); a versão anterior do script (rodada via Spyder) tinha um token de fallback fixo no código -- isso foi removido nesta integração. Falta só **você rodar o `.bat` você mesmo** pelo menos uma vez (o assistente já rodou e validou várias vezes em 30-31/08/2026).
   - **31/08/2026**: removida a cópia automática na pasta "Pós Medica - Documentações - Triagem" (`config.legacy_consolidado_dir()` foi apagada). Decisão do usuário: `fetch_consultaja.py` agora salva só em `dados-fonte/Base_Consulta_JaAA_MM_DD.xlsx`; se precisar da cópia naquela pasta, é colada manualmente a partir de `dados-fonte/`. `CONSULTAJA_LEGACY_DIR` foi removida de `.env`/`.env.example`.
   - **Bug conhecido, ainda não corrigido**: `fetch_and_save()` grava em `dados-fonte/Base_Consulta_JaAA_MM_DD.xlsx` sem checar se o arquivo já existe -- sobrescreve silenciosamente. Isso já causou perda de uma planilha manual colocada ali por engano (31/08/2026, recuperável só via histórico de versões do OneDrive). Cuidado ao colocar arquivos manuais em `dados-fonte/` com nome `Base_Consulta_JaAA_MM_DD.xlsx` no mesmo dia em que for rodar o fetch.
   - **Testado com token real em 30/08/2026**: `--dry-run` primeiro (49.008 agendamentos coletados, nenhum arquivo gravado), depois execução real. Resultado: `dados-fonte/Base_Consulta_Ja26_08_30.xlsx` salva; `ATENDIMENTOS` foi de 736→738 combinações dia+unidade (22.239→22.325 atendimentos); resto do `script.js` conferido como intocado (linha 4 em diante idêntica). Aviso esperado: 614 registros de "Online" ficaram fora do agregado por unidade (sem correspondente no NPS).
   - Único ponto solto: o `atualizacoes.log` grava só o resumo estruturado (passos 1–3) -- não captura as linhas soltas de aviso que `fetch_consultaja.py`/`update_attendance.py` imprimem no console (ex.: aviso de unidades sem correspondente). Não é um bug, só uma lacuna cosmética do log -- se quiser esses avisos também no arquivo, é um ajuste pequeno em `atualizar_local.py`.

# Pipeline de atualização de dados (Python)

Scripts para regenerar as constantes de dados em `../script.js`:
- `RECORDS`/`WEEKLY` (`main.py`) -- respostas de NPS, a partir de uma
  exportação do Indecx (hoje) ou, futuramente, da API do Indecx.
- `ATENDIMENTOS` (`update_attendance.py`) -- base de agendamentos, usada
  pelo card "Engajamento". Ver seção própria abaixo.

## Instalação

```
cd pipeline
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
```

## Uso hoje: planilha exportada manualmente

```
python main.py --source file --input caminho\para\export.xlsx
```

Use `--dry-run` primeiro para ver o resumo (quantas respostas, avisos de
sanitização) sem gravar `script.js`.

Se alguma coluna obrigatória (nota/data/unidade) não for reconhecida
automaticamente, o erro vai listar as colunas disponíveis no arquivo --
ajuste os apelidos em `COLUMN_ALIASES` (`config.py`) para bater com o
cabeçalho real da exportação.

## Uso futuro: API do Indecx

`indecx_client.py` é um **template**, não uma conexão pronta -- eu não
tenho a documentação oficial da API do Indecx, então não posso confirmar o
endpoint, a autenticação nem os nomes dos parâmetros de filtro. Antes de
usar com dados reais de paciente:

1. Confirme com a TI se essa integração externa está autorizada e qual a
   forma de acesso (é um fornecedor contratado, mas a integração em si
   deve ser validada).
2. Peça ao Indecx/TI a documentação da API (endpoint, autenticação,
   paginação, nomes dos filtros).
3. Ajuste `indecx_client.py` de acordo (os pontos que precisam de revisão
   estão marcados com `TODO` no código).
4. Copie `.env.example` para `.env` e preencha `INDECX_BASE_URL` /
   `INDECX_API_TOKEN` / `INDECX_SURVEY_ID`. **Nunca** commite o `.env`.

```
python main.py --source api --date-from 2026-06-01 --date-to 2026-08-26
```

## Engajamento: base de agendamentos (planilha separada)

O card "Engajamento" (respostas de NPS / atendimentos no mesmo período) usa
uma segunda fonte de dados -- a base de agendamentos, sem relação com o
Indecx -- que fica em `../dados-fonte/` (fora do controle de versão; ver o
`.gitignore` daquela pasta). `explore_planilha.py` foi usado para entender a
estrutura dessa planilha sem expor dado de paciente (só cabeçalho, tipos e
contagem agregada por coluna categórica).

### Buscar a base direto da API da ConsultaJá (opcional)

`fetch_consultaja.py` busca agendas + agendamentos na API da ConsultaJá e
salva um Excel em `../dados-fonte/Base_Consulta_JaAA_MM_DD.xlsx` -- o mesmo
formato que já era exportado manualmente. Ele **substitui só o passo de
exportar a planilha**; o passo seguinte continua sendo rodar
`update_attendance.py` na planilha gerada, como já era feito.

Ele **não salva mais** uma cópia automática na pasta "Pós Medica -
Documentações - Triagem" (isso foi removido de propósito -- se precisar de
uma cópia lá, copie manualmente a partir de `dados-fonte/`). Atenção: o nome
do arquivo é baseado na data de hoje e **é sobrescrito sem aviso** se rodar
de novo no mesmo dia -- se colocar manualmente algum arquivo com esse mesmo
nome em `dados-fonte/` antes de rodar, ele será substituído.

Diferente de `indecx_client.py`, este cliente (`consultaja_client.py`) já
foi validado contra a API real -- veio de um script que a TI/o usuário já
usava. Ainda assim, por decisão consciente, ele **não está configurado para
rodar sozinho** (sem agendador/cron): cada resposta da API traz nome e
celular de paciente, então cada execução deve continuar sendo uma decisão
de quem está rodando. O arquivo gerado (`dados-fonte/`) não é versionado
nem hospedado -- só o agregado anônimo entra em `script.js`. Se decidirem
automatizar essa etapa de fato (rodar sem supervisão), alinhem antes com a
TI -- é uma integração externa processando dado de paciente.

Configuração: copie `.env.example` para `.env` e preencha `CONSULTAJA_TOKEN`
(`CONSULTAJA_START_DATE`/`CONSULTAJA_END_DATE` são opcionais). **Nunca**
commite o `.env`.

```
python fetch_consultaja.py --dry-run
python fetch_consultaja.py
python update_attendance.py ..\dados-fonte\Base_Consulta_JaAA_MM_DD.xlsx --dry-run
python update_attendance.py ..\dados-fonte\Base_Consulta_JaAA_MM_DD.xlsx
```

Ou, num só passo (busca + recálculo + resumo do que mudou): duplo clique em
`Atualizar Dashboard.bat`, na raiz do projeto (ver `atualizar_local.py`).

Regra de negócio confirmada com o time (`attendance.py`):
- "Atendimento" = linhas com `Status` em `Compareceu` ou `Atendido`. Os
  demais status (`Cancelado`, `Faltou`, `Agendado`, `Confirmado`) não
  contam.
- Mapeamento de unidade: `São Paulo` (agendamentos) = `CONSOLAÇÃO` (NPS).
  `Online` não tem correspondente no NPS hoje e fica fora do agregado por
  unidade (mas é reportado no terminal, não descartado em silêncio).

Só as colunas `Data`/`Status`/`Unidade` são lidas -- `Paciente`/`Celular`/
`Profissional` nunca entram no agregado.

```
python update_attendance.py ..\dados-fonte\Base_Consulta_XXXXXXXX.xlsx --dry-run
python update_attendance.py ..\dados-fonte\Base_Consulta_XXXXXXXX.xlsx
```

Isso regrava `const ATENDIMENTOS` em `script.js` (contagem por dia+unidade).
O dashboard calcula o % de engajamento no navegador, comparando com o
período coberto pelas respostas de NPS (`RECORDS`) no momento da visita --
não precisa rodar de novo só porque `RECORDS` mudou, só quando a planilha de
agendamentos for atualizada.

## O que o pipeline garante

- **Anonimização por lista de permissão**: só os campos que o dashboard usa
  (nota, data, hora, unidade, comentário, reação/sentimento se existirem)
  são extraídos -- qualquer coluna de nome/e-mail/telefone/CPF/prontuário
  na planilha/API é descartada automaticamente, mesmo sem ser filtrada
  manualmente. O mesmo vale para a base de agendamentos: só data/status/
  unidade são lidos.
- **Sanitização do texto livre** (`sanitize.py`): remove padrões de
  e-mail/CPF/telefone que o paciente tenha digitado por engano dentro do
  comentário, e avisa no terminal (sem expor o dado) para revisão manual.
- **Regravação cirúrgica** (`render_script.py`): `upsert_const()` substitui
  só a linha da constante de dados que está sendo atualizada
  (`RECORDS`/`WEEKLY`/`ATENDIMENTOS`) -- o resto do arquivo (gráficos,
  filtros, tema) não é tocado.

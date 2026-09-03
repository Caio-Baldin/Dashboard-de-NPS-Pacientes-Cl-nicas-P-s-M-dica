# Dashboard de NPS — Pacientes Clínicas Pós-Médica (SLMandic)

Dashboard estático (HTML + CSS + JS puro, sem dependências além das fontes do Google Fonts) com os dados da pesquisa de NPS por QR code.

## Arquivos

- `index.html` — estrutura da página
- `style.css` — estilos (tema navy/gold SLMandic, com suporte a modo claro/escuro)
- `script.js` — dados da pesquisa (embutidos como JSON) + lógica dos gráficos e filtros

## Atualizar os dados e publicar

O dado sempre é atualizado **localmente primeiro**; só depois o resultado
(já estático e anonimizado) é publicado. Nunca há chamada de API a partir da
página publicada.

1. Dê dois cliques em **`Atualizar Dashboard.bat`** (raiz do projeto). Ele
   busca a base de agendamentos na API da ConsultaJá e recalcula
   `ATENDIMENTOS` em `script.js` (ver `pipeline/atualizar_local.py`).
2. Leia o resumo que aparece no final: quantas combinações dia+unidade e
   atendimentos antes/depois, e se algum passo falhou. Se algo quebrou
   **antes** do passo 3, `script.js` não foi alterado -- corrija o problema
   (normalmente `pipeline/.env` sem `CONSULTAJA_TOKEN` válido) e rode de
   novo. O histórico de execuções fica em `pipeline/atualizacoes.log`
   (só contagens agregadas, nunca dado de paciente).
3. Confira o que mudou antes de publicar:
   ```
   git status
   git diff -- script.js
   ```
4. Suba só os arquivos estáticos -- **nunca use `git add .` ou `git add -A`
   aqui**, para não arriscar versionar `dados-fonte/`, `pipeline/.env` ou o
   `.venv` (o `.gitignore` do projeto já bloqueia isso, mas manter o hábito
   de listar os arquivos é uma segunda camada de proteção):
   ```
   git add index.html style.css script.js
   git commit -m "Atualiza dados do dashboard (AAAA-MM-DD)"
   git push
   ```

### Primeira vez (quando o repositório for criado)

```
git init
git add index.html style.css script.js README.md PROGRESSO.md .gitignore pipeline dados-fonte/.gitignore
git commit -m "Versão inicial do dashboard"
git branch -M main
git remote add origin <URL do repositório privado>
git push -u origin main
```

## Como hospedar no GitHub (repositório PRIVADO)

1. Crie um repositório **privado** no GitHub.
2. Suba os arquivos com os comandos acima.
3. Se for usar GitHub Pages: em *Settings → Pages*, ative a partir da branch principal.

   ⚠️ **Atenção**: no GitHub padrão (não-Enterprise), o GitHub Pages publica o site **publicamente na internet**, mesmo que o repositório seja privado — qualquer pessoa com o link consegue acessar. Os dados embutidos em `script.js` (notas, datas, unidades e comentários de pacientes, já sem CPF/nome/telefone/e-mail) ficariam expostos.
   - Só use Pages se sua organização tiver **GitHub Enterprise Cloud** com Pages privado, ou
   - Restrinja o acesso por outro meio (ex.: não ativar Pages e servir o arquivo apenas internamente).

## Sobre os dados

Os dados em `script.js` já passaram por uma etapa de anonimização: os campos de nome, e-mail, telefone, CPF e número de prontuário foram removidos, e um número de telefone digitado por engano no campo de comentário livre foi apagado. Ainda assim, os comentários de texto livre são reais (falas de pacientes) — trate este conteúdo como informação institucional sensível, mesmo em repositório privado.

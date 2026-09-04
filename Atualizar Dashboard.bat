@echo off
setlocal
cd /d "%~dp0pipeline"

where python >nul 2>nul
if errorlevel 1 (
    echo Python nao encontrado no PATH. Instale o Python ou ative o ambiente virtual
    echo do pipeline antes de rodar este atalho ^(ver pipeline\README.md^).
    pause
    exit /b 1
)

python atualizar_local.py
set EXITCODE=%ERRORLEVEL%

echo.
echo ============================================================
if %EXITCODE%==0 (
    echo Atualizacao concluida. Revise o resumo acima antes do git push.
) else (
    echo A atualizacao encontrou um problema -- script.js NAO foi alterado
    echo se a falha aconteceu antes do PASSO 3. Veja as mensagens acima.
)
echo ============================================================
pause
exit /b %EXITCODE%

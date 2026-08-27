@echo off
title Atharv Ugale Portfolio Local Server
cd /d "%~dp0"
echo ===================================================
echo   Starting Local Server at http://localhost:3000
echo ===================================================
start http://localhost:3000
python -m http.server 3000
pause

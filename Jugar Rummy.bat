@echo off
chcp 65001 >nul
title Rummy Mendocino
cd /d "%~dp0server"
where node >nul 2>nul
if errorlevel 1 (
  echo Falta instalar Node.js. Bajalo de https://nodejs.org y volve a abrir este archivo.
  pause
  exit /b
)
if not exist node_modules call npm install
echo.
echo Deja esta ventana abierta mientras juegan.
echo.
node server.js
pause

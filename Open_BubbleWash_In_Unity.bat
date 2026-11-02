@echo off
setlocal
rem Opens the Bubble Wash Kingdom Unity project with an installed Unity 6.3 (6000.3.x) editor.
set "PROJECT=%~dp0."
set "EDITOR="
for /d %%D in ("C:\Program Files\Unity\Hub\Editor\6000.3.*") do set "EDITOR=%%D\Editor\Unity.exe"
if not defined EDITOR (
  echo Unity 6.3 was not found in "C:\Program Files\Unity\Hub\Editor".
  echo Install Unity 6000.3.x with Unity Hub ^(Installs ^> Install Editor ^> Unity 6.3 LTS^), then run this again.
  echo Or open Unity Hub, choose Add ^> Add project from disk, and select this folder.
  pause
  exit /b 1
)
echo Opening Bubble Wash Kingdom with "%EDITOR%"
start "" "%EDITOR%" -projectPath "%PROJECT%"

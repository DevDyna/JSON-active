@echo off

node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js is not installed. Please install Node.js and try again.
    echo https://nodejs.org/en/download
	timeout -1
)
    node execute.mjs -await
    
::temp
timeout 10 /nobreak > nul

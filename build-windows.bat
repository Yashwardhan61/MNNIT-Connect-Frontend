@echo off
echo Building MNNIT-Connect Frontend for Production...
echo.
npm run clean
npm run build

if %errorlevel% neq 0 (
    echo Build failed!
    pause
    exit /b 1
)

echo.
echo Build successful!
echo Output directory: dist/
echo.
echo To preview the production build, run:
echo npm run preview
echo.
pause
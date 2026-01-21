@echo off
echo 🔍 MNNIT-Connect Frontend - Build Analysis
echo ==========================================
echo.

if not exist "dist" (
    echo ❌ No build found. Run 'npm run build' first.
    pause
    exit /b 1
)

echo 📁 Build Directory Structure:
echo -----------------------------
dir /s /b dist\*.js dist\*.css dist\*.html

echo.
echo 📊 File Sizes and Purposes:
echo ---------------------------

echo 🚀 MAIN APPLICATION:
for %%f in (dist\assets\js\mnnit-connect-app-*.js) do (
    echo    📱 Main App Bundle: %%~zf bytes - %%f
    echo       ^(Core React app, routing, components^)
)

echo.
echo 📦 VENDOR LIBRARIES:

for %%f in (dist\assets\js\vendor-react-*.js) do (
    echo    ⚛️  React Core: %%~zf bytes - %%f
    echo       ^(React, React-DOM, Router^)
)

for %%f in (dist\assets\js\vendor-ui-*.js) do (
    echo    🎨 UI Components: %%~zf bytes - %%f  
    echo       ^(Radix UI components^)
)

for %%f in (dist\assets\js\vendor-utils-*.js) do (
    echo    🔧 Utilities: %%~zf bytes - %%f
    echo       ^(Axios, Class utilities, Tailwind^)
)

for %%f in (dist\assets\js\vendor-icons-*.js) do (
    echo    🎭 Icons: %%~zf bytes - %%f
    echo       ^(Lucide React icons^)
)

for %%f in (dist\assets\js\vendor-forms-*.js) do (
    echo    📝 Forms: %%~zf bytes - %%f
    echo       ^(React Hook Form, Resolvers^)
)

for %%f in (dist\assets\js\vendor-data-*.js) do (
    echo    📊 Data: %%~zf bytes - %%f
    echo       ^(Date-fns, Recharts^)
)

echo.
echo 🎨 STYLES:
for %%f in (dist\assets\styles\mnnit-connect-index-*.css) do (
    echo    💅 Main Stylesheet: %%~zf bytes - %%f
    echo       ^(Tailwind CSS, components^)
)

echo.
echo 💡 WHAT EACH FILE DOES:
echo ========================
echo    mnnit-connect-app-*.js     → Your main application code (pages, components, logic)
echo    vendor-react-*.js          → React framework and routing
echo    vendor-ui-*.js             → Radix UI component library  
echo    vendor-utils-*.js          → HTTP client (Axios) and CSS utilities
echo    vendor-icons-*.js          → Lucide React icon library
echo    vendor-forms-*.js          → Form handling and validation
echo    vendor-data-*.js           → Date formatting and chart libraries
echo    mnnit-connect-index-*.css  → All your styles (Tailwind CSS)
echo.

echo ✅ Build analysis complete!
pause
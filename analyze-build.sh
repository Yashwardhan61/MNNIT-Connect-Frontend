#!/bin/bash
echo "🔍 MNNIT-Connect Frontend - Build Analysis"
echo "=========================================="
echo

if [ ! -d "dist" ]; then
    echo "❌ No build found. Run 'npm run build' first."
    exit 1
fi

echo "📁 Build Directory Structure:"
echo "-----------------------------"
find dist -type f -name "*.js" -o -name "*.css" -o -name "*.html" | sort

echo
echo "📊 File Sizes and Purposes:"
echo "---------------------------"

# Main app file
echo "🚀 MAIN APPLICATION:"
find dist -name "mnnit-connect-app-*.js" -exec ls -lh {} \; | awk '{print "   📱 Main App Bundle: " $5 " - " $9 " (Core React app, routing, components)"}'

echo
echo "📦 VENDOR LIBRARIES:"

# React libraries
find dist -name "vendor-react-*.js" -exec ls -lh {} \; | awk '{print "   ⚛️  React Core: " $5 " - " $9 " (React, React-DOM, Router)"}'

# UI components
find dist -name "vendor-ui-*.js" -exec ls -lh {} \; | awk '{print "   🎨 UI Components: " $5 " - " $9 " (Radix UI components)"}'

# Utilities
find dist -name "vendor-utils-*.js" -exec ls -lh {} \; | awk '{print "   🔧 Utilities: " $5 " - " $9 " (Axios, Class utilities, Tailwind)"}'

# Icons
find dist -name "vendor-icons-*.js" -exec ls -lh {} \; | awk '{print "   🎭 Icons: " $5 " - " $9 " (Lucide React icons)"}'

# Forms
find dist -name "vendor-forms-*.js" -exec ls -lh {} \; | awk '{print "   📝 Forms: " $5 " - " $9 " (React Hook Form, Resolvers)"}'

# Data
find dist -name "vendor-data-*.js" -exec ls -lh {} \; | awk '{print "   📊 Data: " $5 " - " $9 " (Date-fns, Recharts)"}'

echo
echo "🎨 STYLES:"
find dist -name "mnnit-connect-index-*.css" -exec ls -lh {} \; | awk '{print "   💅 Main Stylesheet: " $5 " - " $9 " (Tailwind CSS, components)"}'

echo
echo "📈 TOTAL BUILD SIZE:"
echo "-------------------"
du -sh dist/ | awk '{print "   📦 Total: " $1}'

echo
echo "💡 WHAT EACH FILE DOES:"
echo "========================"
echo "   mnnit-connect-app-*.js     → Your main application code (pages, components, logic)"
echo "   vendor-react-*.js          → React framework and routing"
echo "   vendor-ui-*.js             → Radix UI component library"  
echo "   vendor-utils-*.js          → HTTP client (Axios) and CSS utilities"
echo "   vendor-icons-*.js          → Lucide React icon library"
echo "   vendor-forms-*.js          → Form handling and validation"
echo "   vendor-data-*.js           → Date formatting and chart libraries"
echo "   mnnit-connect-index-*.css  → All your styles (Tailwind CSS)"
echo

echo "✅ Build analysis complete!"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 9002,
    host: '0.0.0.0', // Allow external connections (Windows network access)
    open: true,
    cors: true,
    strictPort: false, // Use different port if 9002 is busy
  },
  build: {
    target: 'es2015', // Better browser compatibility
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        // More descriptive asset naming
        entryFileNames: 'assets/js/mnnit-connect-app-[hash].js',
        chunkFileNames: (chunkInfo) => {
          // Get the chunk name or create a descriptive one
          const name = chunkInfo.name;
          
          // If it's a manual chunk, use that name
          if (name && name.startsWith('vendor-')) {
            return `assets/js/${name}-[hash].js`;
          }
          
          // For other chunks, try to get a meaningful name from the modules
          const moduleIds = Object.keys(chunkInfo.modules || {});
          if (moduleIds.length > 0) {
            const firstModule = moduleIds[0];
            if (firstModule.includes('pages/')) {
              return 'assets/js/pages-chunk-[hash].js';
            } else if (firstModule.includes('components/')) {
              return 'assets/js/components-chunk-[hash].js';
            } else if (firstModule.includes('lib/')) {
              return 'assets/js/lib-chunk-[hash].js';
            } else if (firstModule.includes('services/')) {
              return 'assets/js/services-chunk-[hash].js';
            } else if (firstModule.includes('hooks/')) {
              return 'assets/js/hooks-chunk-[hash].js';
            }
          }
          
          return 'assets/js/chunk-[name]-[hash].js';
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          let extType = info[info.length - 1];
          let fileName = info[0];
          
          // Organize assets by type with descriptive names
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
            extType = 'media';
            return `assets/${extType}/mnnit-connect-${fileName}-[hash].[ext]`;
          } else if (/\.(png|jpe?g|gif|svg|ico|webp|avif)(\?.*)?$/i.test(assetInfo.name)) {
            extType = 'images';
            return `assets/${extType}/mnnit-connect-${fileName}-[hash].[ext]`;
          } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
            extType = 'fonts';
            return `assets/${extType}/mnnit-connect-${fileName}-[hash].[ext]`;
          } else if (/\.(css|scss|sass|less|styl)(\?.*)?$/i.test(assetInfo.name)) {
            extType = 'styles';
            return `assets/${extType}/mnnit-connect-${fileName}-[hash].[ext]`;
          }
          
          return `assets/mnnit-connect-${fileName}-[hash].[ext]`;
        },
        manualChunks: {
          // Main application vendor libraries
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          
          // UI component libraries  
          'vendor-ui': [
            '@radix-ui/react-slot',
            '@radix-ui/react-toast',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox'
          ],
          
          // Form and validation libraries
          'vendor-forms': [
            'react-hook-form', 
            '@hookform/resolvers'
          ],
          
          // HTTP client and utilities
          'vendor-utils': [
            'axios',
            'clsx', 
            'tailwind-merge',
            'class-variance-authority'
          ],
          
          // Icons and graphics
          'vendor-icons': ['lucide-react'],
          
          // Date and charting libraries
          'vendor-data': ['date-fns', 'recharts']
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})

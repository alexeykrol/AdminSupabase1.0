import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Security: Enhanced build configuration
  build: {
    // Generate source maps for production debugging (but don't deploy them)
    sourcemap: false,
    // Minify output for security through obscurity and performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true, // Remove debugger statements
      },
    },
    // Reduce chunk size for better performance
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Ensure consistent chunk naming
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'supabase-vendor': ['@supabase/supabase-js'],
        },
      },
    },
  },
  // Security: Server configuration for development
  server: {
    // Restrict server to localhost only
    host: 'localhost',
    // Disable CORS in development to prevent unauthorized access
    cors: false,
    // Use strict port
    strictPort: true,
    headers: {
      // Add security headers in development
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
    },
  },
  // Security: Preview server configuration
  preview: {
    host: 'localhost',
    strictPort: true,
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
    },
  },
});
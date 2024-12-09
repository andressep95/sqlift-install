import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/sqlift-install/',  // Configuración correcta del base URL para GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

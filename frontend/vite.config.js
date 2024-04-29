import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        // target: 'https://localhost:3000',  // dev
        target: 'https://3.6.6.15:3000',  // prod
        secure: false,
      },
    },
  },

  plugins: [react()],
});

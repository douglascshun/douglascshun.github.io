import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repo de usuário (douglascshun.github.io) → servido na raiz.
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rolldownOptions: {
      output: {
        // Bibliotecas em chunks próprios: cache longo e nenhum chunk acima de 500 kB.
        codeSplitting: {
          groups: [
            { name: 'react', test: /node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/ },
            { name: 'motion', test: /node_modules[\\/](framer-motion|motion-dom|motion-utils|lenis)[\\/]/ },
            { name: 'vendor', test: /node_modules[\\/]/ },
          ],
        },
      },
    },
  },
})

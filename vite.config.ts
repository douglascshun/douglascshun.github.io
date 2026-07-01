import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repo de usuário (douglascshun.github.io) → servido na raiz.
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
})

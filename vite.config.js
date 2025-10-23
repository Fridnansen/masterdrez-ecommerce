import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configurado para GitHub Pages
export default defineConfig({
  base: '/masterweb/',
  plugins: [react()]
})

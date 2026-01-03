import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration - see https://vite.dev/config/ for available options
export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  }
})

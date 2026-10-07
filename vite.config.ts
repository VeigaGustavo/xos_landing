import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serve o site em /xos_landing/
  base: '/xos_landing/',
  plugins: [react()],
})

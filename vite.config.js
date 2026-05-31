import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Palitan ang '/my-portfolio-2026/' ng pangalan ng repository mo sa GitHub
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio-2026/', 
})
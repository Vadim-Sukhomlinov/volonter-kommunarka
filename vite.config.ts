import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/volonter-kommunarka/',
  plugins: [react()],
  build: {
    target: 'esnext' // добавьте эту строку
  },
  esbuild: {
    loader: 'tsx', // и эту
  },
})
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: { emptyOutDir: false },
  server: { port: 5173, strictPort: true },
})

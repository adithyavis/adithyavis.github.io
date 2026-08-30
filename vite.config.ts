import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed to https://adithyavis.github.io — a GitHub Pages *user* site,
// so it is served from the domain root and needs no base path.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'static',
  },
})

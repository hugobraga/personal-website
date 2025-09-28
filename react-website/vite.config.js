import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    // Forçar o loader JSX por padrão. O mapeamento de extensões é tratado em
    // optimizeDeps.esbuildOptions (isso evita o erro "loader must be a string").
    loader: 'jsx'
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx', '.mjs': 'jsx', '.cjs': 'jsx' }
    }
  },
  build: {
    outDir: 'build'
  },
  server: {
    port: 3000
  }
})

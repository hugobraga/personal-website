import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    // Mapear explicitamente extensões comuns para JSX para que o scanner do esbuild
    // consiga parsear arquivos .js que contenham JSX durante o build/dev.
    loader: { '.js': 'jsx', '.mjs': 'jsx', '.cjs': 'jsx' },
    include: /src\/.*\.[jt]sx?$/
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

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

/**
 * GitHub Pages no soporta reescritura de URLs (SPA fallback) de forma nativa:
 * al solicitar /productos responde con 404.html.
 *
 * Este plugin genera un 404.html que:
 *   1. guarda la ruta solicitada en sessionStorage y
 *   2. redirige a la raíz del proyecto,
 * donde index.html la restaura con history.replaceState() antes de montar React.
 */
function paginasEstaticasPlugin() {
  return {
    name: 'mazzelli:paginas-estaticas',
    apply: 'build',
    closeBundle() {
      const raiz = resolve(process.cwd(), 'dist')
      const index = resolve(raiz, 'index.html')
      const destino = resolve(raiz, '404.html')

      if (!existsSync(index)) return

      const html = readFileSync(index, 'utf-8')
      const script = `<script>
      ;(function () {
        try {
          sessionStorage.setItem('mazzelli-redirect', location.pathname + location.search + location.hash)
          location.replace('/mazzelli-peru-cueros/')
        } catch (e) {}
      })()
    </script>`

      const inyectado = html.replace('</head>', `    ${script}\n  </head>`)
      writeFileSync(destino, inyectado, 'utf-8')

      console.log(`  ✓ 404.html generado — fallback SPA activo`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), paginasEstaticasPlugin()],
  // Ruta base para GitHub Pages: https://<usuario>.github.io/<repositorio>
  base: '/mazzelli-peru-cueros/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    port: 5173,
    open: true,
  },
})

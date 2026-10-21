/**
 * Resolución de rutas de recursos estáticos.
 *
 * Los SVG del catálogo y de la galería viven en `public/`, así que Vite los
 * copia a la raíz del build sin hash. Al publicarse en GitHub Pages el sitio
 * se sirve bajo `/<repositorio>/`, de modo que una ruta absoluta como
 * `/productos/cartera.svg` apuntaría a la raíz del dominio y devolvería 404.
 *
 * `import.meta.env.BASE_URL` expone la base configurada en `vite.config.js`,
 * por lo que esta función devuelve siempre una URL válida tanto en desarrollo
 * (`/mazzelli-peru-cueros/`) como en producción.
 */

const BASE = import.meta.env.BASE_URL

/**
 * @param {string} ruta Ruta del recurso dentro de `public/`, con o sin barra inicial.
 * @returns {string} URL absoluta del recurso, incluyendo la base del sitio.
 */
export function recurso(ruta) {
  return `${BASE}${ruta.replace(/^\/+/, '')}`
}

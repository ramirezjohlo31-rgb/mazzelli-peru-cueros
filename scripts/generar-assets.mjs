/**
 * Generador de recursos gráficos SVG del sitio.
 * ---------------------------------------------------------------
 * Ejecutar:  node scripts/generar-assets.mjs
 *
 * Produce ilustraciones placeholder de estilo "cuero" (gradientes cálidos,
 * costuras punteadas y siluetas de producto) para:
 *   · public/productos/*.svg   → catálogo
 *   · public/galeria/*.svg     → galería del taller
 *   · public/hero.svg, public/nosotros.svg
 *   · public/favicon.svg, public/og-image.svg
 *
 * Cuando la empresa entregue el material fotográfico real, estas imágenes
 * se reemplazan por los archivos finales (mismos nombres/rutas).
 */

import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const PUBLICO = resolve(RAIZ, 'public')

const PALETAS = {
  cognac: ['#8B5E3C', '#6B4A33', '#A87B55'],
  chocolate: ['#5C3A28', '#3E2A20', '#7A5240'],
  negro: ['#3A2F29', '#241812', '#5A4A40'],
  avellana: ['#B98C5E', '#96683F', '#D3AC82'],
  oro: ['#C89B3C', '#A87B2A', '#E8CA8A'],
}

/* ------------------------------------------------------------------ */
/* Siluetas por categoría                                              */
/* ------------------------------------------------------------------ */
const SILUETAS = {
  cartera: `
    <rect x="300" y="250" width="200" height="150" rx="14" fill="url(#cuerpo)" stroke="rgba(255,255,255,.35)" stroke-width="3"/>
    <path d="M300 285h200" stroke="rgba(0,0,0,.35)" stroke-width="3"/>
    <path d="M360 250v-22a40 40 0 0180 0v22" fill="none" stroke="rgba(255,255,255,.45)" stroke-width="8" stroke-linecap="round"/>
    <rect x="378" y="288" width="44" height="14" rx="7" fill="url(#metal)" />`,
  cinturon: `
    <rect x="230" y="280" width="340" height="46" rx="12" fill="url(#cuerpo)" stroke="rgba(255,255,255,.3)" stroke-width="3"/>
    <rect x="300" y="268" width="86" height="70" rx="12" fill="none" stroke="url(#metal)" stroke-width="12"/>
    <rect x="312" y="292" width="62" height="22" rx="8" fill="url(#metal)" opacity=".85"/>
    <g fill="rgba(0,0,0,.28)">
      <circle cx="440" cy="303" r="6"/><circle cx="470" cy="303" r="6"/>
      <circle cx="500" cy="303" r="6"/><circle cx="530" cy="303" r="6"/>
    </g>`,
  billetera: `
    <rect x="310" y="235" width="180" height="150" rx="14" fill="url(#cuerpo)" stroke="rgba(255,255,255,.32)" stroke-width="3"/>
    <path d="M310 285h180" stroke="rgba(0,0,0,.32)" stroke-width="3"/>
    <g fill="rgba(0,0,0,.22)">
      <rect x="332" y="258" width="66" height="16" rx="4"/>
      <rect x="332" y="302" width="66" height="16" rx="4"/>
      <rect x="412" y="258" width="58" height="16" rx="4"/>
      <rect x="412" y="302" width="58" height="16" rx="4"/>
    </g>`,
  mochila: `
    <rect x="300" y="235" width="200" height="180" rx="26" fill="url(#cuerpo)" stroke="rgba(255,255,255,.32)" stroke-width="3"/>
    <path d="M340 235v-28a60 60 0 01120 0v28" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="10" stroke-linecap="round"/>
    <rect x="340" y="300" width="120" height="52" rx="10" fill="rgba(0,0,0,.2)"/>
    <rect x="386" y="318" width="28" height="10" rx="5" fill="url(#metal)"/>`,
  bolso: `
    <path d="M260 290h280v110a16 16 0 01-16 16H276a16 16 0 01-16-16z" fill="url(#cuerpo)" stroke="rgba(255,255,255,.3)" stroke-width="3"/>
    <path d="M330 290v-30a70 70 0 01140 0v30" fill="none" stroke="rgba(255,255,255,.42)" stroke-width="11" stroke-linecap="round"/>
    <rect x="330" y="320" width="140" height="44" rx="8" fill="rgba(0,0,0,.18)"/>`,
  accesorio: `
    <rect x="290" y="270" width="220" height="140" rx="12" fill="url(#cuerpo)" stroke="rgba(255,255,255,.32)" stroke-width="3"/>
    <path d="M290 305h220" stroke="rgba(0,0,0,.3)" stroke-width="3"/>
    <path d="M400 270v-24a40 40 0 0180 0v24" fill="none" stroke="url(#metal)" stroke-width="9" stroke-linecap="round"/>
    <path d="M440 246v60M470 246v60" stroke="rgba(255,255,255,.3)" stroke-width="5"/>`,
}

/* ------------------------------------------------------------------ */
/* Plantilla base                                                      */
/* ------------------------------------------------------------------ */
function ilustracion({
  titulo,
  subtitulo,
  silueta = 'cartera',
  paleta = 'cognac',
  ancho = 800,
  alto = 600,
  etiqueta = 'MAZZELLI · CUEROS PERÚ',
}) {
  const [c1, c2, c3] = PALETAS[paleta]

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${ancho} ${alto}" width="${ancho}" height="${alto}" role="img" aria-label="${titulo}">
  <defs>
    <linearGradient id="fondo" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c3}"/>
      <stop offset="55%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
    <linearGradient id="cuerpo" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${c3}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
    <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#E8CA8A"/>
      <stop offset="50%" stop-color="#C89B3C"/>
      <stop offset="100%" stop-color="#8E6A22"/>
    </linearGradient>
    <radialGradient id="luz" cx="0.28" cy="0.22" r="0.8">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${ancho}" height="${alto}" fill="url(#fondo)"/>
  <rect width="${ancho}" height="${alto}" fill="url(#luz)"/>

  <!-- textura de grano -->
  <g opacity="0.14" fill="#ffffff">
    ${Array.from({ length: 26 })
      .map((_, i) => {
        const x = (i * 97) % ancho
        const y = (i * 53) % alto
        const r = 1 + ((i * 7) % 3)
        return `<circle cx="${x}" cy="${y}" r="${r}"/>`
      })
      .join('\n    ')}
  </g>

  <!-- marco con costura punteada -->
  <rect x="26" y="26" width="${ancho - 52}" height="${alto - 52}" rx="18"
        fill="none" stroke="rgba(255,255,255,.5)" stroke-width="3"
        stroke-dasharray="10 9" stroke-linecap="round"/>

  <!-- sombra de la pieza -->
  <ellipse cx="${ancho / 2}" cy="${alto - 108}" rx="180" ry="22" fill="rgba(0,0,0,.22)"/>

  ${SILUETAS[silueta]}

  <!-- textos -->
  <text x="56" y="${alto - 74}" font-family="Georgia, 'Playfair Display', serif"
        font-size="26" font-weight="700" fill="rgba(255,255,255,.92)">${titulo}</text>
  <text x="56" y="${alto - 48}" font-family="Helvetica, Arial, sans-serif"
        font-size="14" letter-spacing="3" fill="rgba(255,255,255,.6)">${subtitulo}</text>
  <text x="${ancho - 56}" y="${alto - 48}" text-anchor="end"
        font-family="Helvetica, Arial, sans-serif" font-size="12" letter-spacing="4"
        fill="rgba(255,255,255,.5)">${etiqueta}</text>
</svg>
`
}

/* ------------------------------------------------------------------ */
/* Generación                                                          */
/* ------------------------------------------------------------------ */
function escribir(rutaRelativa, contenido) {
  const destino = resolve(PUBLICO, rutaRelativa)
  mkdirSync(dirname(destino), { recursive: true })
  writeFileSync(destino, contenido, 'utf-8')
  console.log(`  ✓ public/${rutaRelativa}`)
}

console.log('Generando recursos SVG de Mazzelli…')

/* Catálogo */
const catalogo = [
  ['cartera', 'Cartera "Soy Lima"', 'Cuero vacuno · Cognac', 'cartera', 'cognac'],
  ['cartera-alt', 'Cartera "Andina"', 'Cuero full grain · Tote', 'bolso', 'chocolate'],
  [
    'billetera',
    'Billetera Clásica',
    '6 ranuras · Cosido a mano',
    'billetera',
    'avellana',
  ],
  ['billetera-alt', 'Tarjetero Minimal', 'Cuero slim · 4 ranuras', 'billetera', 'negro'],
  ['cinturon', 'Cinturón "Nilo"', 'Latón cepillado · 4 cm', 'cinturon', 'cognac'],
  ['cinturon-alt', 'Faja Artesanal', 'Moleteado en relieve', 'cinturon', 'chocolate'],
  ['mochila', 'Mochila Urbana', '20 L · Para laptop 15"', 'mochila', 'negro'],
  ['bolso', 'Bolso de Viaje 48 h', 'Weekender · Cuero full grain', 'bolso', 'chocolate'],
  ['accesorio', 'Portaretratos Artesanal', 'Cuero · Mica', 'accesorio', 'oro'],
  [
    'accesorio-alt',
    'Kit de Regalo Mazzelli',
    '3 piezas · Caja kraft',
    'accesorio',
    'avellana',
  ],
]
catalogo.forEach(([archivo, titulo, subtitulo, silueta, paleta]) => {
  escribir(
    `productos/${archivo}.svg`,
    ilustracion({ titulo, subtitulo, silueta, paleta }),
  )
})

/* Galería */
const galeria = [
  ['seleccion', 'Selección de pieles', 'Taller', 'cognac'],
  ['curtido', 'Tinas de curtido vegetal', 'Proceso', 'chocolate'],
  ['corte', 'Corte y patronaje', 'Proceso', 'avellana'],
  ['cosido', 'Costura a mano', 'Taller', 'cognac'],
  ['acabado', 'Sellado de bordes', 'Proceso', 'negro'],
  ['calidad', 'Control de calidad', 'Calidad', 'oro'],
  ['empaque', 'Empaque y despacho', 'Logística', 'avellana'],
  ['tienda', 'Showroom en Lima', 'Showroom', 'chocolate'],
]
galeria.forEach(([archivo, titulo, subtitulo, paleta]) => {
  escribir(
    `galeria/${archivo}.svg`,
    ilustracion({
      titulo,
      subtitulo: subtitulo.toUpperCase(),
      silueta: 'cartera',
      paleta,
      ancho: 800,
      alto: 600,
    }),
  )
})

/* Hero y portada institucional */
escribir(
  'hero.svg',
  ilustracion({
    titulo: 'Cuero que cuenta historias',
    subtitulo: 'CURTIDO VEGETAL · HECHO A MANO',
    silueta: 'mochila',
    paleta: 'chocolate',
    ancho: 900,
    alto: 1100,
  }),
)

escribir(
  'nosotros.svg',
  ilustracion({
    titulo: 'Taller Mazzelli',
    subtitulo: 'SURQUILLO · LIMA',
    silueta: 'cartera',
    paleta: 'cognac',
    ancho: 900,
    alto: 675,
  }),
)

/* Favicon: monograma M sobre cuero */
escribir(
  'favicon.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <defs>
    <linearGradient id="f" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#8B5E3C"/>
      <stop offset="100%" stop-color="#3E2A20"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="url(#f)"/>
  <text x="32" y="45" text-anchor="middle" font-family="Georgia, serif"
        font-size="38" font-weight="700" fill="#FAF6F0">M</text>
  <rect x="8" y="8" width="48" height="48" rx="10" fill="none"
        stroke="#C89B3C" stroke-width="2" stroke-dasharray="5 4" opacity=".7"/>
</svg>
`,
)

/* Open Graph */
escribir(
  'og-image.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4E352A"/>
      <stop offset="100%" stop-color="#1C1512"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <circle cx="980" cy="140" r="220" fill="#C89B3C" opacity=".12"/>
  <circle cx="220" cy="520" r="260" fill="#8B5E3C" opacity=".16"/>
  <rect x="70" y="70" width="1060" height="490" rx="20" fill="none"
        stroke="#C89B3C" stroke-width="2" stroke-dasharray="10 9" opacity=".55"/>
  <text x="70" y="300" font-family="Georgia, serif" font-size="76" font-weight="700" fill="#FAF6F0">
    Mazzelli
  </text>
  <text x="74" y="350" font-family="Helvetica, Arial, sans-serif" font-size="26"
        letter-spacing="10" fill="#C89B3C">CUEROS PERÚ</text>
  <text x="70" y="430" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#F3EBDD">
    Cuero artesanal · Carteras, cinturones, billeteras y mochilas
  </text>
  <text x="70" y="510" font-family="Helvetica, Arial, sans-serif" font-size="20" fill="#A87B55">
    Industrias Mazzelli-Perú Cueros E.I.R.L. · Lima, Perú
  </text>
</svg>
`,
)

console.log('Listo.')

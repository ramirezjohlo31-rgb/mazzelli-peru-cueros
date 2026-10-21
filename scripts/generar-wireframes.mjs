/**
 * Generador de wireframes (mockups de baja fidelidad) en SVG.
 * ---------------------------------------------------------------
 * Ejecutar:  node scripts/generar-wireframes.mjs
 *
 * Salida:  docs/wireframes/{inicio,catalogo,producto-detalle,contacto}.svg
 * Se usan para el Avance 1 (documentación del RCU).
 */

import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DESTINO = resolve(RAIZ, 'docs', 'wireframes')

const TINTA = '#1F2937'
const GRIS = '#9CA3AF'
const BORDE = '#D1D5DB'
const RELLENO = '#F3F4F6'
const ACENTO = '#8B5E3C'

/* Bloques reutilizables ------------------------------------------------- */
const caja = (x, y, w, h, relleno = RELLENO, borde = BORDE, radio = 8) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${radio}" fill="${relleno}" stroke="${borde}" stroke-width="2"/>`

const texto = (x, y, contenido, tam = 13, color = TINTA, peso = '400') =>
  `<text x="${x}" y="${y}" font-family="Helvetica, Arial, sans-serif" font-size="${tam}" font-weight="${peso}" fill="${color}">${contenido}</text>`

const linea = (x1, y1, x2, y2, color = BORDE, grosor = 2) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${grosor}" stroke-linecap="round"/>`

const nav = (y = 0) => `
  ${caja(0, y, 1200, 68, '#FFFFFF', '#E5E7EB', 0)}
  ${caja(28, y + 18, 34, 34, ACENTO, ACENTO, 8)}
  ${texto(74, y + 41, 'MAZZELLI', 15, TINTA, '700')}
  ${['Inicio', 'Nosotros', 'Productos', 'Galería', 'Servicios', 'Contacto']
    .map((t, i) => texto(250 + i * 105, y + 41, t, 13, GRIS))
    .join('\n  ')}
  ${caja(1010, y + 16, 160, 36, ACENTO, ACENTO, 18)}
  ${texto(1032, y + 39, 'WhatsApp', 12, '#FFFFFF', '600')}
`

const pie = () => `
  ${caja(0, 1020, 1200, 180, '#F9FAFB', '#E5E7EB', 0)}
  ${texto(28, 1060, 'MAZZELLI', 13, TINTA, '700')}
  ${texto(28, 1085, 'Industrias Mazzelli-Perú Cueros E.I.R.L.', 11, GRIS)}
  ${texto(320, 1060, 'NAVEGACIÓN', 11, GRIS, '700')}
  ${texto(320, 1082, 'Inicio · Nosotros · Productos', 11, GRIS)}
  ${texto(320, 1100, 'Galería · Servicios · Contacto', 11, GRIS)}
  ${texto(640, 1060, 'CATEGORÍAS', 11, GRIS, '700')}
  ${texto(640, 1082, 'Carteras · Cinturones · Billeras', 11, GRIS)}
  ${texto(640, 1100, 'Mochilas · Accesorios', 11, GRIS)}
  ${texto(930, 1060, 'CONTACTO', 11, GRIS, '700')}
  ${texto(930, 1082, 'Av. Los Frutales 1450, Lima', 11, GRIS)}
  ${texto(930, 1100, '+51 987 654 321', 11, GRIS)}
`

const marco = (titulo) => `
  <rect width="1200" height="1200" fill="#FFFFFF"/>
  ${texto(28, 1180, `Wireframe — ${titulo}   ·   Mazzelli Cueros Perú   ·   Avance 1 (Semana 8)`, 12, GRIS)}
  ${linea(0, 1160, 1200, 1160, '#E5E7EB', 2)}
`

const etiquetas = (items) =>
  items
    .map(
      ([x, y, t]) =>
        `<g><rect x="${x}" y="${y}" width="${t.length * 7 + 16}" height="22" rx="11" fill="${ACENTO}" opacity=".12"/>
    ${texto(x + 8, y + 15, t, 11, ACENTO, '600')}</g>`,
    )
    .join('\n  ')

/* Pantallas ------------------------------------------------------------- */
function inicio() {
  return `${marco('Inicio')}
  ${nav()}
  ${caja(0, 68, 1200, 430, '#FBF8F4', '#E5E7EB', 0)}
  ${texto(70, 160, 'CUERO QUE CUENTA', 34, TINTA, '700')}
  ${texto(70, 205, 'HISTORIAS', 34, ACENTO, '700')}
  ${texto(70, 250, 'Curtimos con taninos vegetales y cosemos a mano cada pieza.', 14, GRIS)}
  ${caja(70, 285, 210, 46, ACENTO, ACENTO, 23)}
  ${texto(112, 313, 'Ver catálogo', 13, '#FFFFFF', '600')}
  ${caja(300, 285, 230, 46, '#FFFFFF', GRIS, 23)}
  ${texto(330, 313, 'WhatsApp', 13, TINTA, '600')}
  ${[0, 1, 2].map((i) => `${texto(70 + i * 130, 420, ['15+', '3 000+', '100%'][i], 22, ACENTO, '700')}${texto(70 + i * 130, 443, ['Años de taller', 'Piezas artesanales', 'Cuero genuino'][i], 11, GRIS)}`).join('\n  ')}
  ${caja(760, 120, 370, 320, RELLENO, BORDE, 14)}

  ${texto(70, 560, 'CATEGORÍAS', 13, ACENTO, '700')}
  ${[0, 1, 2, 3, 4].map((i) => `${caja(70 + i * 212, 585, 190, 150)}${caja(70 + i * 212 + 72, 610, 46, 46, '#FFFFFF', BORDE, 23)}${texto(70 + i * 212 + 20, 690, ['Carteras', 'Cinturones', 'Billeras', 'Mochilas', 'Accesorios'][i], 13, TINTA, '600')}${texto(70 + i * 212 + 20, 712, 'Ver más →', 11, GRIS)}`).join('\n  ')}

  ${texto(70, 800, 'PRODUCTOS DESTACADOS', 13, ACENTO, '700')}
  ${[0, 1, 2, 3].map((i) => `${caja(70 + i * 265, 825, 240, 300)}${caja(70 + i * 265, 825, 240, 150)}${texto(90 + i * 265, 1005, ['Cartera "Soy Lima"', 'Billetera Clásica', 'Cinturón "Nilo"', 'Mochila Urbana'][i], 13, TINTA, '600')}${texto(90 + i * 265, 1040, 'S/ 189.00', 14, ACENTO, '700')}`).join('\n  ')}
  ${pie()}
  ${etiquetas([
    [40, 90, 'HERO'],
    [900, 430, 'IMAGEN DESTACADA'],
    [40, 535, 'CATEGORÍAS'],
    [40, 775, 'PRODUCTOS'],
    [40, 995, 'CTA / TESTIMONIOS'],
  ])}
`
}

function catalogo() {
  return `${marco('Catálogo de productos')}
  ${nav()}
  ${caja(0, 68, 1200, 120, '#FBF8F4', '#E5E7EB', 0)}
  ${texto(70, 120, 'CATÁLOGO', 12, ACENTO, '700')}
  ${texto(70, 160, 'Todos nuestros productos', 28, TINTA, '700')}
  ${caja(70, 220, 1060, 90)}
  ${texto(95, 255, 'CATEGORÍA', 11, GRIS, '700')}
  ${[
    'Todas (12)',
    'Carteras (3)',
    'Cinturones (3)',
    'Billeras (2)',
    'Mochilas (2)',
    'Accesorios (2)',
  ]
    .map(
      (t, i) =>
        `${caja(95 + i * 172, 270, 160, 30, i === 0 ? TINTA : '#FFFFFF', i === 0 ? TINTA : BORDE, 15)}${texto(110 + i * 172, 290, t, 11, i === 0 ? '#FFFFFF' : GRIS)}`,
    )
    .join('\n  ')}
  ${caja(70, 330, 620, 42)}
  ${texto(95, 357, '🔍  Buscar por nombre, material o descripción…', 12, GRIS)}
  ${caja(710, 330, 220, 42)}
  ${texto(730, 357, 'Destacados primero', 12, GRIS)}
  ${caja(950, 330, 180, 42)}
  ${texto(970, 357, '☐ Solo con stock', 12, GRIS)}

  ${[0, 1, 2]
    .map((col) =>
      [0, 1]
        .map((fila) => {
          const x = 70 + col * 360
          const y = 400 + fila * 300
          const nombres = [
            'Cartera "Soy Lima"',
            'Cartera "Andina"',
            'Billetera Clásica',
            'Tarjetero Minimal',
            'Cinturón "Nilo"',
            'Faja Artesanal',
          ]
          return `${caja(x, y, 340, 280)}
      ${caja(x, y, 340, 180)}
      ${texto(x + 20, y + 225, nombres[col * 2 + fila], 14, TINTA, '700')}
      ${texto(x + 20, y + 250, 'S/ 189.00', 15, ACENTO, '700')}
      ${texto(x + 250, y + 250, 'Ver detalle →', 11, GRIS)}`
        })
        .join('\n  '),
    )
    .join('\n  ')}
  ${caja(70, 1000, 1060, 1, '#E5E7EB', '#E5E7EB', 0)}
  ${pie()}
  ${etiquetas([
    [40, 90, 'ENCABEZADO'],
    [40, 195, 'FILTROS'],
    [40, 375, 'REJILLA DE PRODUCTOS'],
    [780, 400, 'TARJETA'],
    [780, 700, 'TARJETA'],
    [40, 1005, 'PAGINACIÓN'],
  ])}
`
}

function productoDetalle() {
  return `${marco('Ficha de producto')}
  ${nav()}
  ${caja(0, 68, 1200, 44, '#FFFFFF', '#E5E7EB', 0)}
  ${texto(70, 96, 'Inicio / Productos / Carteras / Cartera "Soy Lima"', 12, GRIS)}
  ${caja(70, 140, 520, 380)}
  ${texto(90, 170, 'IMAGEN PRINCIPAL', 11, GRIS)}
  ${[0, 1, 2, 3].map((i) => `${caja(70 + i * 132, 540, 120, 90)}${texto(80 + i * 132, 620, 'Miniatura', 10, GRIS)}`).join('\n  ')}

  ${texto(640, 175, 'CARTERAS', 11, ACENTO, '700')}
  ${texto(640, 215, 'Cartera "Soy Lima"', 28, TINTA, '700')}
  ${caja(640, 235, 110, 26, '#FEF3C7', '#FCD34D', 13)}
  ${texto(652, 253, 'Más vendido', 10, '#92400E')}
  ${caja(760, 235, 90, 26, '#DCFCE7', '#86EFAC', 13)}
  ${texto(772, 253, 'Disponible', 10, '#166534')}
  ${texto(640, 305, 'S/ 189.00', 26, ACENTO, '700')}
  ${texto(640, 330, 'Precio por unidad · IGV no incluido', 11, GRIS)}
  ${texto(640, 375, 'Cartera de hombro en cuero vacuno curtido vegetal,', 13, GRIS)}
  ${texto(640, 395, 'con cierre de cremallera de latón y forro en lino.', 13, GRIS)}
  ${[0, 1, 2, 3]
    .map(
      (i) =>
        `${linea(640, 425 + i * 34, 1130, 425 + i * 34, '#E5E7EB', 1)}
    ${texto(640, 420 + i * 34, ['Materiales', 'Medidas', 'Colores', 'Código'][i], 12, TINTA, '600')}
    ${texto(820, 420 + i * 34, ['Cuero vacuno · Lino · Latón', '22 × 14 × 8 cm', 'Cognac · Negro · Chocolate', 'P-001'][i], 12, GRIS)}`,
    )
    .join('\n  ')}
  ${caja(640, 570, 300, 46, ACENTO, ACENTO, 10)}
  ${texto(672, 598, 'Consultar por WhatsApp', 13, '#FFFFFF', '600')}
  ${caja(955, 570, 175, 46, '#FFFFFF', GRIS, 10)}
  ${texto(978, 598, 'Cotizar', 13, TINTA, '600')}
  ${caja(640, 640, 1060, 110)}
  ${texto(665, 672, 'GARANTÍAS DEL PRODUCTO', 11, ACENTO, '700')}
  ${texto(665, 700, '✓ Verificación de calidad  ✓  Garantía de 1 año  ✓  Envíos a todo el Perú', 12, GRIS)}

  ${texto(70, 690, 'OTROS PRODUCTOS DE CARTERAS', 13, ACENTO, '700')}
  ${[0, 1, 2].map((i) => `${caja(70 + i * 200, 715, 180, 200)}${caja(70 + i * 200, 715, 180, 120)}${texto(85 + i * 200, 870, 'Relacionado', 11, GRIS)}`).join('\n  ')}
  ${pie()}
  ${etiquetas([
    [40, 75, 'MIGAS DE PAN'],
    [40, 115, 'GALERÍA'],
    [40, 515, 'MINIATURAS'],
    [600, 150, 'INFORMACIÓN'],
    [600, 545, 'ACCIONES'],
    [600, 615, 'GARANTÍAS'],
    [40, 665, 'RELACIONADOS'],
  ])}
`
}

function contacto() {
  return `${marco('Contacto')}
  ${nav()}
  ${caja(0, 68, 1200, 130, '#FBF8F4', '#E5E7EB', 0)}
  ${texto(70, 120, 'CONTACTO', 12, ACENTO, '700')}
  ${texto(70, 165, 'Hablemos de tu próximo pedido', 28, TINTA, '700')}

  ${caja(70, 225, 640, 620)}
  ${texto(100, 270, 'Cuéntanos qué necesitas', 20, TINTA, '700')}
  ${texto(100, 295, 'Completa el formulario y te respondemos en menos de 24 h.', 12, GRIS)}
  ${texto(100, 340, 'Nombre completo *', 11, TINTA, '600')}
  ${caja(100, 350, 270, 40)}
  ${texto(115, 375, 'Johan Ramírez', 12, GRIS)}
  ${texto(400, 340, 'Correo electrónico *', 11, TINTA, '600')}
  ${caja(400, 350, 280, 40)}
  ${texto(415, 375, 'correo@ejemplo.com', 12, GRIS)}
  ${texto(100, 425, 'Teléfono / WhatsApp', 11, TINTA, '600')}
  ${caja(100, 435, 270, 40)}
  ${texto(115, 460, '+51 987 654 321', 12, GRIS)}
  ${texto(400, 425, 'Motivo *', 11, TINTA, '600')}
  ${caja(400, 435, 280, 40)}
  ${texto(415, 460, 'Selecciona un motivo…', 12, GRIS)}
  ${texto(100, 510, 'Mensaje *', 11, TINTA, '600')}
  ${caja(100, 520, 580, 120)}
  ${texto(115, 545, 'Cuéntanos qué producto te interesa…', 12, GRIS)}
  ${texto(100, 680, '¿Por dónde prefieres recibir la respuesta?', 12, TINTA, '600')}
  ${caja(100, 690, 275, 52)}
  ${texto(120, 720, '◉  WhatsApp', 12, TINTA, '600')}
  ${caja(405, 690, 275, 52)}
  ${texto(425, 720, '○  Correo electrónico', 12, GRIS)}
  ${caja(100, 765, 300, 46, ACENTO, ACENTO, 10)}
  ${texto(140, 793, 'Enviar por WhatsApp', 13, '#FFFFFF', '600')}
  ${caja(420, 765, 150, 46, '#FFFFFF', GRIS, 10)}
  ${texto(448, 793, 'Limpiar', 13, TINTA, '600')}

  ${texto(760, 265, 'ENCUÉNTRANOS', 12, ACENTO, '700')}
  ${[0, 1, 2, 3]
    .map((i) => {
      const y = 290 + i * 90
      return `${caja(760, y, 370, 74)}
    ${caja(778, y + 18, 38, 38, RELLENO, BORDE, 19)}
    ${texto(832, y + 32, ['Dirección del taller', 'Teléfono / WhatsApp', 'Correo electrónico', 'Horario de atención'][i], 10, ACENTO, '700')}
    ${texto(832, y + 54, ['Av. Los Frutales 1450, Lima', '+51 987 654 321', 'contacto@mazzelliperu.com', 'Lun–Vie 9:00–18:00 · Sáb 10:00–13:00'][i], 12, GRIS)}`
    })
    .join('\n  ')}
  ${caja(760, 660, 370, 100)}
  ${texto(782, 690, 'DATOS FISCALES', 11, ACENTO, '700')}
  ${texto(782, 715, 'RUC: 20509874512', 12, GRIS)}
  ${texto(782, 738, 'Región: Lima, Perú', 12, GRIS)}
  ${pie()}
  ${etiquetas([
    [40, 200, 'FORMULARIO'],
    [720, 240, 'DATOS DE CONTACTO'],
    [720, 635, 'DATOS FISCALES'],
  ])}
`
}

/* Escritura ------------------------------------------------------------- */
const pantallas = {
  inicio: inicio(),
  catalogo: catalogo(),
  'producto-detalle': productoDetalle(),
  contacto: contacto(),
}

mkdirSync(DESTINO, { recursive: true })
console.log('Generando wireframes…')
for (const [nombre, contenido] of Object.entries(pantallas)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" width="1200" height="1200">
${contenido}
</svg>
`
  writeFileSync(resolve(DESTINO, `${nombre}.svg`), svg, 'utf-8')
  console.log(`  ✓ docs/wireframes/${nombre}.svg`)
}
console.log('Listo.')

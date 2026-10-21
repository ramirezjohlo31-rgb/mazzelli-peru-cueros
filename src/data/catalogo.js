/**
 * Catálogo de productos — fuente de datos semilla (seed).
 * Capa de datos: desacoplada de la UI para poder reemplazarse por una API
 * en el futuro (fetch desde /public/catalogo.json o un CMS externo).
 */

import { recurso } from '../utils/recursos.js'

export const categorias = [
  {
    id: 'carteras',
    nombre: 'Carteras',
    descripcion: 'Bolsos de cuero para mujer y unisex',
  },
  {
    id: 'cinturones',
    nombre: 'Cinturones',
    descripcion: 'Cinturones con hebilla de latón cepillado',
  },
  { id: 'billeras', nombre: 'Billeras', descripcion: 'Bolsillos de bills y tarjetas' },
  { id: 'mochilas', nombre: 'Mochilas', descripcion: 'Mochilas y bolsos de viaje' },
  {
    id: 'accesorios',
    nombre: 'Accesorios',
    descripcion: 'Kits de regalo, portarretratos y fundas',
  },
]

export const productos = [
  {
    id: 'p-001',
    slug: 'cartera-soy-lima',
    nombre: 'Cartera "Soy Lima"',
    categoria: 'carteras',
    precio: 189,
    precioAntes: 229,
    descripcion:
      'Cartera de hombro en cuero vacuno curtido vegetal, con cierre de cremallera de latón y forro interior en lino. Un clásico de la colección Mazzelli.',
    materiales: ['Cuero vacuno', 'Lino', 'Latón cepillado'],
    medidas: '22 × 14 × 8 cm',
    colores: ['Cognac', 'Negro', 'Chocolate'],
    stock: true,
    destacado: true,
    badges: ['Más vendido', 'Hecho a mano'],
    imagenes: [recurso('/productos/cartera.svg'), recurso('/productos/cartera-alt.svg')],
    descripcionLarga:
      'Diseñada en nuestro taller de Lima, la cartera "Soy Lima" combina un cuero vacuno de curtido vegetal de 1.2 mm con un forro de lino natural. Su estructura semirígida mantiene la forma y el cierre de cremallera de latón cepillado resiste el uso diario. Lleva un bolsillo interior con cremallera, tres ranuras para tarjetas y un compartmentamiento amplio para celular y documentos.',
  },
  {
    id: 'p-002',
    slug: 'cartera-andina',
    nombre: 'Cartera "Andina"',
    categoria: 'carteras',
    precio: 215,
    descripcion:
      'Cartera tipo tote de gran capacidad en cuero full grain con asas enrolladas y base reforzada. Ideal para uso diario y trabajo.',
    materiales: ['Cuero full grain', 'Algodón encerado'],
    medidas: '30 × 24 × 12 cm',
    colores: ['Marrón oscuro', 'Negro'],
    stock: true,
    destacado: true,
    badges: ['Nuevo'],
    imagenes: [recurso('/productos/cartera-alt.svg')],
    descripcionLarga:
      'La "Andina" es nuestra tote de mayor capacidad: cuero full grain sin pulir, que desarrolla una pátina única con el uso. Las asas van enrolladas y cosidas a mano para resistir el peso, y la base lleva refuerzo con el mismo cuero para evitar la deformación.',
  },
  {
    id: 'p-003',
    slug: 'billetera-clasica',
    nombre: 'Billetera Clásica',
    categoria: 'billeras',
    precio: 79,
    descripcion:
      'Billetera compacta de seis ranuras con compartimento para monedas, en cuero vacuno con costura sellada.',
    materiales: ['Cuero vacuno', 'Hilo encerado'],
    medidas: '11 × 9 cm (cerrada)',
    colores: ['Cognac', 'Negro', 'Chocolate', 'Avellana'],
    stock: true,
    destacado: true,
    badges: ['Más vendido'],
    imagenes: [recurso('/productos/billetera.svg')],
    descripcionLarga:
      'Billetera de seis compartimentos para tarjetas, dos ranuras para billetes y un bolsillo con cierre para monedas. El borde está sellado a mano con cera para evitar que las esquinas se despeguen.',
  },
  {
    id: 'p-004',
    slug: 'billetera-tarjetero',
    nombre: 'Tarjetero Minimal',
    categoria: 'billeras',
    precio: 65,
    descripcion:
      'Tarjetero de cuatro ranuras en cuero slim, con perfil redondeado y logotipo discreto.',
    materiales: ['Cuero vacuno'],
    medidas: '10 × 7 × 1.2 cm',
    colores: ['Negro', 'Cognac'],
    stock: true,
    destacado: false,
    badges: [],
    imagenes: [recurso('/productos/billetera-alt.svg')],
    descripcionLarga:
      'Diseñado para quien lleva lo mínimo: cuatro tarjetas, un par de billetes doblados y nada más. Perfil slim de 12 mm y logo grabado en lugar de prensado.',
  },
  {
    id: 'p-005',
    slug: 'cinturon-cuero-hombre',
    nombre: 'Cinturón de Cuero "Nilo"',
    categoria: 'cinturones',
    precio: 129,
    descripcion:
      'Cinturón de cuero vacuno de 4 cm de ancho con hebilla de latón cepillado y remaches reales.',
    materiales: ['Cuero vacuno', 'Latón cepillado'],
    medidas: '4 cm de ancho · 3.5 cm de alto',
    colores: ['Cognac', 'Negro', 'Chocolate'],
    stock: true,
    destacado: true,
    badges: ['Más vendido'],
    imagenes: [recurso('/productos/cinturon.svg')],
    descripcionLarga:
      'Cinturón de una sola pieza de cuero de 4 mm, sin empalmes, con hebilla de latón cepillado y remaches reales. Se adapta a la cintura con el uso y admite ajuste de orificios en tallas estándar.',
  },
  {
    id: 'p-006',
    slug: 'cinturon-faja-artesanal',
    nombre: 'Faja Artesanal',
    categoria: 'cinturones',
    precio: 145,
    descripcion:
      'Cinturón wider de 5 cm con tooling artesanal en relieve y detalles de costuras contrastantes.',
    materiales: ['Cuero vacuno curtido vegetal', 'Hilo contrastante'],
    medidas: '5 cm de ancho',
    colores: ['Chocolate', 'Avellana'],
    stock: false,
    destacado: false,
    badges: ['Por encargo'],
    imagenes: [recurso('/productos/cinturon-alt.svg')],
    descripcionLarga:
      'Una pieza de autor: cuero de 5 cm con moleteado en relieve realizado a mano y costuras en hilo contrastante. Producción bajo pedido, 12 días hábiles.',
  },
  {
    id: 'p-007',
    slug: 'mochila-urbana',
    nombre: 'Mochila Urbana',
    categoria: 'mochilas',
    precio: 289,
    descripcion:
      'Mochila de 20 litros en cuero con compartimento acolchado para laptop de 15" y pockets frontales.',
    materiales: ['Cuero vacuno', 'Lona de algodón', 'Espuma técnica'],
    medidas: '32 × 42 × 15 cm',
    colores: ['Negro', 'Cognac'],
    stock: true,
    destacado: true,
    badges: ['Nuevo'],
    imagenes: [recurso('/productos/mochila.svg')],
    descripcionLarga:
      'Diseñada para la ciudad: 20 litros de capacidad, compartimento acolchado para laptop hasta 15 pulgadas, dos pockets frontales con cremallera y correas ergonómicas con refuerzo de cuero en los puntos de tensión.',
  },
  {
    id: 'p-008',
    slug: 'bolso-de-viaje',
    nombre: 'Bolso de Viaje 48 h',
    categoria: 'mochilas',
    precio: 349,
    descripcion:
      'Bolso de viaje tipo weekender en cuero curtido vegétal con base reforzada y correa de hombro desmontable.',
    materiales: ['Cuero full grain', 'Lona encerada', 'Latón'],
    medidas: '50 × 30 × 26 cm',
    colores: ['Marrón oscuro', 'Avellana'],
    stock: true,
    destacado: false,
    badges: [],
    imagenes: [recurso('/productos/bolso.svg')],
    descripcionLarga:
      'Un weekender de 48 horas: cuero full grain en todo el cuerpo exterior, base reforzada para soportar el peso y tirantes acolchados. Cabe un trolley de cabina y ropa para cuatro días.',
  },
  {
    id: 'p-009',
    slug: 'portaretratos-artesanal',
    nombre: 'Portaretratos Artesanal',
    categoria: 'accesorios',
    precio: 95,
    descripcion:
      'Marco de foto de 15 × 20 cm en cuero con ventana de mica y pie de apoyo desmontable.',
    materiales: ['Cuero vacuno', 'Mica', 'Corcho'],
    medidas: '15 × 20 cm',
    colores: ['Cognac', 'Negro'],
    stock: true,
    destacado: false,
    badges: ['Ideal para regalo'],
    imagenes: [recurso('/productos/accesorio.svg')],
    descripcionLarga:
      'Marco de cuero con ventana de mica, pie desmontable de corcho yranura posterior para fotografías de hasta 15 × 20 cm. Embalaje individual con bolsa de algodón.',
  },
  {
    id: 'p-010',
    slug: 'kit-de-regalo-mazzelli',
    nombre: 'Kit de Regalo Mazzelli',
    categoria: 'accesorios',
    precio: 259,
    precioAntes: 299,
    descripcion:
      'Presentación con billetera, llavero y tarjetero en la misma partida de cuero, en caja de cartón kraft.',
    materiales: ['Cuero vacuno', 'Cartón kraft', 'Algodón'],
    medidas: 'Caja 24 × 18 × 6 cm',
    colores: ['Cognac', 'Negro'],
    stock: true,
    destacado: true,
    badges: ['Regalo corporativo'],
    imagenes: [recurso('/productos/accesorio-alt.svg')],
    descripcionLarga:
      'Tres piezas de la misma partida de cuero para que la variación de color sea mínima. Presentación en caja kraft con separador de algodón, lista para corporativos y fechas especiales.',
  },
  {
    id: 'p-011',
    slug: 'cartera-motorista',
    nombre: 'Cartera Motorista',
    categoria: 'carteras',
    precio: 165,
    descripcion:
      'Cartera para vestir con compartimento para documentos y monedas, en cuero flexible de curtido suave.',
    materiales: ['Cuero vacuno flexible', 'Latón'],
    medidas: '13 × 10 × 3 cm',
    colores: ['Chocolate', 'Negro'],
    stock: true,
    destacado: false,
    badges: [],
    imagenes: [recurso('/productos/cartera.svg')],
    descripcionLarga:
      'Diseñada para el bolsillo trasero: formato compacto, cierre de botón de latón y dos compartimentos interiores. El cuero es de curtido suave para que tenga poco volumen.',
  },
  {
    id: 'p-012',
    slug: 'cinturon-papel-macho',
    nombre: 'Cinturón hecho a medida',
    categoria: 'cinturones',
    precio: 150,
    descripcion:
      'Cinturón elaborado a medida con la medida exacta del cliente, color y grabado de iniciales.',
    materiales: ['Cuero vacuno', 'Latón'],
    medidas: 'A medida · 3.5 cm de ancho',
    colores: ['A elección'],
    stock: true,
    destacado: false,
    badges: ['Personalizable', 'Por encargo'],
    imagenes: [recurso('/productos/cinturon.svg')],
    descripcionLarga:
      'Borrador de producto de demostración para la plantilla: cinturón a medida con grabado de iniciales y elección de color. Plazo de entrega de 10 días hábiles.',
  },
]

/** Devuelve un producto por su slug (para la ficha de detalle). */
export function obtenerProductoPorSlug(slug) {
  return productos.find((producto) => producto.slug === slug)
}

/** Devuelve los productos destacados para la portada. */
export function obtenerDestacados(cantidad = 4) {
  return productos.filter((producto) => producto.destacado).slice(0, cantidad)
}

/** Devuelve los productos relacionados de una misma categoría. */
export function obtenerRelacionados(categoria, slug, cantidad = 3) {
  return productos
    .filter((producto) => producto.categoria === categoria && producto.slug !== slug)
    .slice(0, cantidad)
}

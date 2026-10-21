/**
 * Datos de la empresa — Industrias Mazzelli-Perú Cueros E.I.R.L.
 * Capa de datos: fuente única de la información corporativa.
 */
export const empresa = {
  razonSocial: 'Industrias Mazzelli-Perú Cueros E.I.R.L.',
  nombreComercial: 'Mazzelli',
  descripcion:
    'Taller peruano de curtido y confección de cuero artesanal. Diseñamos carteras, cinturones, billeteras, mochilas y accesorios con materiales nobles y acabado a mano.',
  lema: 'Cuero que cuenta historias',
  anioFundacion: 2009,
  ruc: '20509874512',
  region: 'Lima, Perú',
  direccion: 'Av. Los Frutales 1450, Urb. Santa Ana, Lima-Perú',
  telefono: '+51 987 654 321',
  whatsapp: '51987654321',
  email: 'contacto@mazzelliperu.com',
  emailVentas: 'ventas@mazzelliperu.com',
  horario: 'Lunes a viernes: 9:00 a.m. – 6:00 p.m. · Sábados: 10:00 a.m. – 1:00 p.m.',
  redes: [
    {
      nombre: 'Instagram',
      url: 'https://instagram.com/mazzelliperu',
      icono: 'instagram',
    },
    { nombre: 'Facebook', url: 'https://facebook.com/mazzelliperu', icono: 'facebook' },
    {
      nombre: 'LinkedIn',
      url: 'https://linkedin.com/company/mazzelliperu',
      icono: 'linkedin',
    },
  ],
}

/** Cifras destacadas para la sección de garantías */
export const garantias = [
  {
    titulo: 'Curtido vegetal',
    descripcion:
      'Cuero vacuno curtido con tannins vegetales, sin crudos ni metales pesados.',
    icono: 'hoja',
  },
  {
    titulo: 'Hecho a mano',
    descripcion: 'Cada pieza es cortada, montada y cosida a mano en nuestro taller.',
    icono: 'mano',
  },
  {
    titulo: 'Garantía 1 año',
    descripcion: 'Garantía escrita contra defectos de curtido, costura y herrajes.',
    icono: 'escudo',
  },
  {
    titulo: 'Envíos a todo el Perú',
    descripcion: 'Despachamos a Lima, provincias y al extranjero con seguimiento.',
    icono: 'camion',
  },
]

/** Proceso artesanal mostrado en Home y Nosotros */
export const proceso = [
  {
    paso: '01',
    titulo: 'Selección de piel',
    descripcion:
      'Elegimos las mejores pieles de vacuno por textura, uniformidad y color.',
  },
  {
    paso: '02',
    titulo: 'Curtido vegetal',
    descripcion: 'Tintes naturales y tanning de tanino en tinas durante 40 días.',
  },
  {
    paso: '03',
    titulo: 'Corte y patronaje',
    descripcion: 'Trazado a mano sobre patrones propios, pieza por pieza.',
  },
  {
    paso: '04',
    titulo: 'Costura y acabado',
    descripcion: 'Costura saddle stitch con hilo encerado y sellado de bordes.',
  },
  {
    paso: '05',
    titulo: 'Control de calidad',
    descripcion: 'Inspección de cada pieza antes de empaquetar y despachar.',
  },
  {
    paso: '06',
    titulo: 'Empaque y envío',
    descripcion: 'Bolsa de algodón, tarjeta de garantía y guía de despacho.',
  },
]

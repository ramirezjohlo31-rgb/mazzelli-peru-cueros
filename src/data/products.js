const img = (label, hue) =>
  `https://placehold.co/800x600/${hue}/FDFBF7?text=${encodeURIComponent(label)}`

export const CATEGORIES = ['Todos', 'Carteras', 'Calzado', 'Mochilas', 'Accesorios']
export const GENDERS = ['Todos', 'Dama', 'Caballero']
export const MATERIALS = ['Todos', 'Cuero', 'Textil+Cuero']

export const PRODUCTS = [
  {
    id: 'car-001',
    name: 'Cartera Clásica Artesanal',
    type: 'Carteras',
    gender: 'Dama',
    material: 'Cuero',
    priceRef: 'Cotizar',
    description:
      'Cartera de cuero 100% legítimo con costura reforzada, forro interior y herrajes de acabado fino. Ideal para uso diario y ocasiones especiales.',
    features: ['Cuero legítimo seleccionado', 'Compartimentos internos', 'Confección artesanal peruana'],
    finishes: ['Cognac', 'Negro', 'Vino'],
    images: [img('Cartera+Clásica', '722F37'), img('Detalle+Cuero', '4A4D52')],
  },
  {
    id: 'car-002',
    name: 'Cartera Urbana Textil-Cuero',
    type: 'Carteras',
    gender: 'Dama',
    material: 'Textil+Cuero',
    priceRef: 'Cotizar',
    description:
      'Diseño contemporáneo que combina lona resistente con aplicaciones de cuero legítimo, logrando ligereza y elegancia.',
    features: ['Combinación textil-cuero', 'Correa ajustable', 'Cierre seguro'],
    finishes: ['Arena/Café', 'Gris/Negro', 'Azul/Cognac'],
    images: [img('Cartera+Urbana', '4A4D52'), img('Textil+Cuero', '800020')],
  },
  {
    id: 'cal-001',
    name: 'Zapato Formal en Cuero',
    type: 'Calzado',
    gender: 'Caballero',
    material: 'Cuero',
    priceRef: 'Cotizar',
    description:
      'Calzado formal confeccionado en cuero legítimo con plantilla confortable y terminados de marroquinería fina.',
    features: ['Cuero legítimo', 'Plantilla confortable', 'Acabado formal'],
    finishes: ['Negro', 'Marrón oscuro'],
    images: [img('Zapato+Formal', '333333'), img('Acabado+Fino', '722F37')],
  },
  {
    id: 'cal-002',
    name: 'Ballerina Casual',
    type: 'Calzado',
    gender: 'Dama',
    material: 'Cuero',
    priceRef: 'Cotizar',
    description:
      'Ballerina en cuero suave con diseño versátil para uso diario, confeccionada con atención al detalle y confort.',
    features: ['Cuero suave', 'Diseño liviano', 'Versátil'],
    finishes: ['Beige', 'Negro', 'Rojo vino'],
    images: [img('Ballerina+Casual', '800020'), img('Cuero+Suave', '4A4D52')],
  },
  {
    id: 'moc-001',
    name: 'Mochila Ejecutiva',
    type: 'Mochilas',
    gender: 'Caballero',
    material: 'Cuero',
    priceRef: 'Cotizar',
    description:
      'Mochila en cuero legítimo con compartimento para laptop, bolsillos organizadores y espalda acolchada.',
    features: ['Compartimento para laptop', 'Bolsillos organizadores', 'Cuero resistente'],
    finishes: ['Negro', 'Café'],
    images: [img('Mochila+Ejecutiva', '333333'), img('Interior+Organizado', '722F37')],
  },
  {
    id: 'moc-002',
    name: 'Mochila Outdoor Textil-Cuero',
    type: 'Mochilas',
    gender: 'Dama',
    material: 'Textil+Cuero',
    priceRef: 'Cotizar',
    description:
      'Mochila funcional con base y refuerzos en cuero legítimo, combinada con textil resistente para mayor durabilidad.',
    features: ['Refuerzos en cuero', 'Textil resistente', 'Amplia capacidad'],
    finishes: ['Oliva/Café', 'Negro/Negro', 'Terracota'],
    images: [img('Mochila+Outdoor', '4A4D52'), img('Refuerzos+Cuero', '800020')],
  },
  {
    id: 'acc-001',
    name: 'Billetera Premium',
    type: 'Accesorios',
    gender: 'Caballero',
    material: 'Cuero',
    priceRef: 'Cotizar',
    description:
      'Billetera de cuero legítimo con ranuras para tarjetas, compartimento para billetes y costura de alta precisión.',
    features: ['Ranuras para tarjetas', 'Cuero legítimo', 'Formato compacto'],
    finishes: ['Negro', 'Café', 'Cognac'],
    images: [img('Billetera+Premium', '722F37'), img('Detalle+Costura', '333333')],
  },
  {
    id: 'acc-002',
    name: 'Correa Clásica',
    type: 'Accesorios',
    gender: 'Caballero',
    material: 'Cuero',
    priceRef: 'Cotizar',
    description:
      'Correa en cuero legítimo con hebilla metálica sobria, diseñada para acompañar vestimenta formal o casual elegante.',
    features: ['Hebilla metálica', 'Cuero seleccionado', 'Uso formal/casual'],
    finishes: ['Negro', 'Marrón'],
    images: [img('Correa+Clásica', '333333'), img('Hebilla+Metálica', '4A4D52')],
  },
  {
    id: 'acc-003',
    name: 'Monedero Dama',
    type: 'Accesorios',
    gender: 'Dama',
    material: 'Cuero',
    priceRef: 'Cotizar',
    description:
      'Monedero compacto en cuero legítimo con cierre seguro y espacio funcional para monedas y documentos pequeños.',
    features: ['Compacto', 'Cierre seguro', 'Cuero legítimo'],
    finishes: ['Vino', 'Negro', ' nude'],
    images: [img('Monedero+Dama', '800020'), img('Compacto', '722F37')],
  },
  {
    id: 'acc-004',
    name: 'Morral Funcional',
    type: 'Accesorios',
    gender: 'Caballero',
    material: 'Textil+Cuero',
    priceRef: 'Cotizar',
    description:
      'Morral con cuerpo textil y detalles en cuero legítimo, pensado para movilidad urbana con estilo sobrio.',
    features: ['Movilidad urbana', 'Detalles en cuero', 'Correa regulable'],
    finishes: ['Gris/Café', 'Negro/Cognac'],
    images: [img('Morral+Funcional', '4A4D52'), img('Detalle+Cuero', '333333')],
  },
  {
    id: 'car-003',
    name: 'Cartera Ejecutiva',
    type: 'Carteras',
    gender: 'Dama',
    material: 'Cuero',
    priceRef: 'Cotizar',
    description:
      'Cartera estructurada de cuero legítimo con asas firmes y acabado elegante para entornos profesionales.',
    features: ['Estructura firme', 'Asas reforzadas', 'Elegancia profesional'],
    finishes: ['Negro', 'Vino', 'Camel'],
    images: [img('Cartera+Ejecutiva', '722F37'), img('Asas+Reforzadas', '800020')],
  },
  {
    id: 'cal-003',
    name: 'Botín Casual Textil-Cuero',
    type: 'Calzado',
    gender: 'Caballero',
    material: 'Textil+Cuero',
    priceRef: 'Cotizar',
    description:
      'Botín con combinación textil-cuero, suela resistente y diseño moderno para uso casual.',
    features: ['Suela resistente', 'Diseño moderno', 'Combinación equilibrada'],
    finishes: ['Marrón', 'Negro'],
    images: [img('Botín+Casual', '4A4D52'), img('Suela+Resistente', '333333')],
  },
]

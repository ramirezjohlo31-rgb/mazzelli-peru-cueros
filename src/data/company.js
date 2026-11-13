export const COMPANY = {
  legalName: 'INDUSTRIAS MARZZELLI PERÚ CUEROS E.I.R.L.',
  commercialName: 'Marzzelli Perú Cueros',
  ruc: '20XXXXXXXXX', // Actualizar con RUC real
  description:
    'Especialistas en fracción, confección y marroquinería fina de artículos en cuero legítimo y combinaciones textil-cuero para damas y caballeros.',
  address: 'Lima, Perú', // Actualizar con dirección exacta
  city: 'Lima, Perú',
  phone: '+51 XXX XXX XXX',
  email: 'contacto@marzzelliperucueros.com',
  whatsappNumber: '51XXXXXXXXX', // Actualizar: código país + número, sin + ni espacios
  hours: 'Lunes a Sábado: 9:00 a.m. - 6:00 p.m.',
  mapEmbedUrl:
    'https://www.google.com/maps?q=Lima,Peru&output=embed',
  social: {
    facebook: '#',
    instagram: '#',
  },
}

export function buildWhatsAppUrl(message) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${text}`
}

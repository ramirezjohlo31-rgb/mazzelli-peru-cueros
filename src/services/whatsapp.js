import { empresa } from '../data/empresa.js'

/**
 * Genera un enlace de WhatsApp con un mensaje precargado.
 * @param {string} mensaje - Texto del mensaje.
 * @returns {string} URL de wa.me lista para abrirse en una pestaña nueva.
 */
export function enlaceWhatsapp(mensaje) {
  const texto = encodeURIComponent(mensaje)
  return `https://wa.me/${empresa.whatsapp}?text=${texto}`
}

/** Mensaje prellenado para consultas generales. */
export function mensajeConsultaGeneral() {
  return `Hola ${empresa.nombreComercial}, quiero información sobre sus productos de cuero.`
}

/** Mensaje prellenado para un producto concreto. */
export function mensajeProducto(producto) {
  return `Hola ${empresa.nombreComercial}, me interesa el producto "${producto.nombre}" (código ${producto.id}). ¿Está disponible y me pueden enviar más detalles?`
}

/** Abre el enlace de WhatsApp en una pestaña nueva. */
export function abrirWhatsapp(mensaje) {
  window.open(enlaceWhatsapp(mensaje), '_blank', 'noopener,noreferrer')
}

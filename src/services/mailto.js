/**
 * Genera un enlace mailto: con asunto y cuerpo prellenados.
 * @param {object} opciones
 * @param {string} opciones.destinatario
 * @param {string} opciones.asunto
 * @param {string} [opciones.cuerpo]
 * @returns {string} URL mailto: lista para abrirse.
 */
export function enlaceCorreo({ destinatario, asunto, cuerpo = '' }) {
  const parametros = `subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`
  return `mailto:${destinatario}?${parametros}`
}

/** Abre el cliente de correo con el mensaje redactado. */
export function abrirCorreo(opciones) {
  window.location.href = enlaceCorreo(opciones)
}

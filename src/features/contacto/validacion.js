/**
 * Validación del formulario de contacto.
 * Capa de dominio: reglas puras, independientes de React.
 */

const REGLAS = {
  nombre: {
    requerido: true,
    minimo: 3,
    mensaje: 'Ingresa tu nombre (mínimo 3 caracteres).',
  },
  email: {
    requerido: true,
    patron: /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i,
    mensaje: 'Ingresa un correo electrónico válido.',
  },
  telefono: {
    requerido: false,
    patron: /^[0-9+\s()-]{8,20}$/,
    mensaje: 'Ingresa un número de teléfono válido.',
  },
  motivo: {
    requerido: true,
    mensaje: 'Selecciona el motivo de tu consulta.',
  },
  mensaje: {
    requerido: true,
    minimo: 10,
    mensaje: 'Cuéntanos tu consulta (mínimo 10 caracteres).',
  },
}

/**
 * Valida el objeto del formulario.
 * @param {object} datos
 * @returns {object} Objeto con los errores por campo (vacío si todo es válido).
 */
export function validarFormulario(datos) {
  const errores = {}

  Object.entries(REGLAS).forEach(([campo, regla]) => {
    const valor = (datos[campo] ?? '').toString().trim()

    if (regla.requerido && valor === '') {
      errores[campo] = 'Este campo es obligatorio.'
      return
    }

    if (valor === '') return

    if (regla.minimo && valor.length < regla.minimo) {
      errores[campo] = regla.mensaje
      return
    }

    if (regla.patron && !regla.patron.test(valor)) {
      errores[campo] = regla.mensaje
    }
  })

  return errores
}

/** Construye el texto del mensaje que se envía por WhatsApp. */
export function construirMensajeWhatsapp(datos) {
  const lineas = [
    `Hola Mazzelli, mi nombre es ${datos.nombre}.`,
    '',
    `*Motivo:* ${datos.motivo}`,
    datos.telefono ? `*Teléfono:* ${datos.telefono}` : null,
    `*Correo:* ${datos.email}`,
    '',
    datos.mensaje,
  ]

  return lineas.filter((linea) => linea !== null).join('\n')
}

/** Construye el cuerpo del correo de contacto. */
export function construirCuerpoCorreo(datos) {
  return [
    `Nombre: ${datos.nombre}`,
    `Correo: ${datos.email}`,
    datos.telefono ? `Teléfono: ${datos.telefono}` : null,
    `Motivo: ${datos.motivo}`,
    '',
    datos.mensaje,
  ]
    .filter((linea) => linea !== null)
    .join('\n')
}

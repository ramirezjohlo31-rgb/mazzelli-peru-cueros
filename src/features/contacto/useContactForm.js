import { useState } from 'react'

import { validarFormulario } from './validacion.js'

const ESTADO_INICIAL = {
  nombre: '',
  email: '',
  telefono: '',
  motivo: '',
  mensaje: '',
}

/**
 * Hook del formulario de contacto.
 * Gestiona valores, errores, validación y envío.
 */
export default function useContactForm() {
  const [datos, setDatos] = useState(ESTADO_INICIAL)
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  function actualizarCampo(campo, valor) {
    setDatos((previos) => ({ ...previos, [campo]: valor }))
    // Limpia el error del campo en cuanto el usuario corrige
    setErrores((previos) => {
      if (!previos[campo]) return previos
      const copia = { ...previos }
      delete copia[campo]
      return copia
    })
  }

  /** Valida los datos sin enviar. Devuelve true si todo es correcto. */
  function validar() {
    const nuevosErrores = validarFormulario(datos)
    setErrores(nuevosErrores)
    return Object.keys(nuevosErrores).length === 0
  }

  /** Reinicia el formulario. */
  function reiniciar() {
    setDatos(ESTADO_INICIAL)
    setErrores({})
    setEnviado(false)
  }

  return {
    datos,
    errores,
    enviado,
    setEnviado,
    actualizarCampo,
    validar,
    reiniciar,
  }
}

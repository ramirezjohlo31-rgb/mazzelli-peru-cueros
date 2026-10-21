import { useEffect, useState } from 'react'

/**
 * Retrasa la propagación de un valor para no saturar el filtrado en cada tecla.
 * @param {any} valor
 * @param {number} [espera] - Milisegundos de espera (por defecto 250).
 */
export default function useDebounce(valor, espera = 250) {
  const [valorDiferido, setValorDiferido] = useState(valor)

  useEffect(() => {
    const temporizador = setTimeout(() => setValorDiferido(valor), espera)
    return () => clearTimeout(temporizador)
  }, [valor, espera])

  return valorDiferido
}

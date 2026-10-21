import { useCallback, useSyncExternalStore } from 'react'

/**
 * Suscribe a un media query del navegador de forma segura para el renderizado
 * de React (usa `useSyncExternalStore`, el patrón idiomático para fuentes
 * de estado externas como `matchMedia`).
 *
 * @param {string} consulta - Por ejemplo '(min-width: 768px)'.
 * @returns {boolean} `true` si la media query se cumple.
 */
export default function useMediaQuery(consulta) {
  const suscribir = useCallback(
    (callback) => {
      const mediaQuery = window.matchMedia(consulta)
      mediaQuery.addEventListener('change', callback)
      return () => mediaQuery.removeEventListener('change', callback)
    },
    [consulta],
  )

  const obtenerValor = useCallback(() => window.matchMedia(consulta).matches, [consulta])

  // El tercer argumento es el valor para el renderizado en servidor (SSR).
  return useSyncExternalStore(suscribir, obtenerValor, () => false)
}

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Lleva el scroll al inicio cuando cambia la ruta.
 * Mejora la experiencia de navegación en una SPA (evita el salto al ruta anterior).
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

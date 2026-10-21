import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { navegacion } from '../../data/navegacion.js'
import { empresa } from '../../data/empresa.js'
import { mensajeConsultaGeneral, enlaceWhatsapp } from '../../services/whatsapp.js'
import Button from '../ui/Button.jsx'
import IconoWhatsapp from '../ui/IconoWhatsapp.jsx'

/** Barra de navegación principal, fija, con menú móvil. */
export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [desplazado, setDesplazado] = useState(false)

  useEffect(() => {
    const alDesplazar = () => setDesplazado(window.scrollY > 20)
    window.addEventListener('scroll', alDesplazar)
    return () => window.removeEventListener('scroll', alDesplazar)
  }, [])

  // Bloquea el scroll del body mientras el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = menuAbierto ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuAbierto])

  // El menú móvil se cierra en el `onClick` de cada enlace (ver más abajo).

  const enlaces = (
    <>
      {navegacion.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `relative py-2 text-sm font-semibold transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-oro-500 after:transition-all ${
              isActive
                ? 'text-cuero-900 after:w-full'
                : 'text-tinta-500 after:w-0 hover:text-cuero-900 hover:after:w-full'
            }`
          }
        >
          {item.nombre}
        </NavLink>
      ))}
    </>
  )

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        desplazado
          ? 'border-crema-200 bg-crema-50/95 shadow-suave backdrop-blur-md'
          : 'border-transparent bg-crema-50'
      }`}
    >
      <div className="contenedor flex h-18 items-center justify-between gap-6 py-4">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3" aria-label="Ir al inicio">
          <span className="flex h-11 w-11 items-center justify-center rounded-cuero bg-cuero-900 text-crema-50 transition-transform group-hover:scale-105">
            <span className="font-display text-xl font-bold leading-none">M</span>
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold text-cuero-900">
              Mazzelli
            </span>
            <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-oro-500">
              Cueros Perú
            </span>
          </span>
        </Link>

        {/* Navegación escritorio */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Navegación principal"
        >
          {enlaces}
        </nav>

        {/* Acciones */}
        <div className="hidden items-center gap-4 lg:flex">
          <Button
            como="a"
            href={enlaceWhatsapp(mensajeConsultaGeneral())}
            variante="primario"
            tamano="sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconoWhatsapp className="h-4 w-4" />
            Cotizar por WhatsApp
          </Button>
        </div>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setMenuAbierto((abierto) => !abierto)}
          aria-expanded={menuAbierto}
          aria-controls="menu-movil"
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
          className="flex h-11 w-11 items-center justify-center rounded-cuero border border-crema-200 text-cuero-900 transition-colors hover:border-oro-500 lg:hidden"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {menuAbierto ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {menuAbierto && (
        <div
          id="menu-movil"
          className="animate-entrada border-t border-crema-200 bg-crema-50 lg:hidden"
        >
          <nav
            className="contenedor flex flex-col gap-1 py-6"
            aria-label="Navegación móvil"
          >
            {navegacion.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuAbierto(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-cuero-900 text-crema-50'
                      : 'text-cuero-800 hover:bg-crema-100'
                  }`
                }
              >
                {item.nombre}
              </NavLink>
            ))}
            <Button
              como="a"
              href={enlaceWhatsapp(mensajeConsultaGeneral())}
              variante="primario"
              className="mt-4 w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconoWhatsapp className="h-5 w-5" />
              Cotizar por WhatsApp
            </Button>
            <p className="mt-4 text-center text-xs text-tinta-500">
              {empresa.telefono} · {empresa.email}
            </p>
          </nav>
        </div>
      )}
    </header>
  )
}

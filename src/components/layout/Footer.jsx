import { Link } from 'react-router-dom'

import { empresa } from '../../data/empresa.js'
import { navegacion } from '../../data/navegacion.js'
import { categorias } from '../../data/catalogo.js'
import { enlaceWhatsapp, mensajeConsultaGeneral } from '../../services/whatsapp.js'
import IconoWhatsapp from '../ui/IconoWhatsapp.jsx'
import Icon from '../ui/Icon.jsx'

/** Año en curso, calculado una sola vez al cargar el módulo. */
const ANIO = new Date().getFullYear()

/** Pie de página con información corporativa, enlaces y contacto. */
export default function Footer() {
  return (
    <footer className="bg-cuero-900 text-crema-100">
      <div className="contenedor grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Marca */}
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-cuero bg-crema-50 text-cuero-900">
              <span className="font-display text-xl font-bold leading-none">M</span>
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold text-crema-50">
                Mazzelli
              </span>
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-oro-500">
                Cueros Perú
              </span>
            </span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-crema-200/80">
            {empresa.descripcion}
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-oro-500">
            Hecho en Perú
          </p>
        </div>

        {/* Navegación */}
        <nav aria-label="Navegación del pie de página">
          <h3 className="mb-4 font-display text-lg text-crema-50">Navegación</h3>
          <ul className="space-y-2.5 text-sm">
            {navegacion.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-crema-200/80 transition-colors hover:text-oro-500"
                >
                  {item.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Categorías */}
        <nav aria-label="Categorías de productos">
          <h3 className="mb-4 font-display text-lg text-crema-50">Categorías</h3>
          <ul className="space-y-2.5 text-sm">
            {categorias.map((categoria) => (
              <li key={categoria.id}>
                <Link
                  to={`/productos?categoria=${categoria.id}`}
                  className="text-crema-200/80 transition-colors hover:text-oro-500"
                >
                  {categoria.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contacto */}
        <div>
          <h3 className="mb-4 font-display text-lg text-crema-50">Contacto</h3>
          <ul className="space-y-3 text-sm text-crema-200/80">
            <li className="flex gap-3">
              <Icon nombre="ubicacion" className="h-5 w-5 shrink-0 text-oro-500" />
              <span>{empresa.direccion}</span>
            </li>
            <li className="flex gap-3">
              <Icon nombre="telefono" className="h-5 w-5 shrink-0 text-oro-500" />
              <a
                href={`tel:${empresa.telefono.replace(/\s/g, '')}`}
                className="hover:text-oro-500"
              >
                {empresa.telefono}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon nombre="correo" className="h-5 w-5 shrink-0 text-oro-500" />
              <a href={`mailto:${empresa.email}`} className="hover:text-oro-500">
                {empresa.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon nombre="reloj" className="h-5 w-5 shrink-0 text-oro-500" />
              <span>{empresa.horario}</span>
            </li>
          </ul>

          <a
            href={enlaceWhatsapp(mensajeConsultaGeneral())}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-cuero border border-oro-500/50 px-4 py-2.5 text-sm font-semibold text-oro-500 transition-colors hover:bg-oro-500 hover:text-cuero-950"
          >
            <IconoWhatsapp className="h-4 w-4" />
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>

      {/* Barra legal */}
      <div className="border-t border-crema-50/10">
        <div className="contenedor flex flex-col items-center justify-between gap-3 py-6 text-xs text-crema-200/60 sm:flex-row">
          <p>
            © {ANIO} {empresa.razonSocial} · RUC {empresa.ruc} · Todos los derechos
            reservados.
          </p>
          <p>
            Sitio desarrollado como proyecto universitario · Johan Brayan Ramírez Ccoyllo
          </p>
        </div>
      </div>
    </footer>
  )
}

import { Outlet } from 'react-router-dom'

import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import WhatsAppFlotante from '../components/layout/WhatsAppFlotante.jsx'

/**
 * Layout raíz: chrome de la aplicación (navbar + contenido + footer).
 * Las páginas se inyectan mediante <Outlet />.
 */
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-crema-50">
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-cuero-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-crema-50"
      >
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="contenido-principal" className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppFlotante />
    </div>
  )
}

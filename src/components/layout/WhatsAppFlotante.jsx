import { useEffect, useState } from 'react'

import { enlaceWhatsapp, mensajeConsultaGeneral } from '../../services/whatsapp.js'
import IconoWhatsapp from '../ui/IconoWhatsapp.jsx'

/** Botón flotante de WhatsApp con etiqueta que aparece al pasar el cursor. */
export default function WhatsAppFlotante() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const alDesplazar = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', alDesplazar)
    return () => window.removeEventListener('scroll', alDesplazar)
  }, [])

  return (
    <a
      href={enlaceWhatsapp(mensajeConsultaGeneral())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp a Mazzelli"
      className={`group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-cuero transition-all duration-300 hover:scale-110 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <IconoWhatsapp className="h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-cuero bg-cuero-900 px-4 py-2 text-sm font-semibold text-crema-50 opacity-0 transition-opacity group-hover:opacity-100 lg:block">
        Escríbenos por WhatsApp
      </span>
    </a>
  )
}

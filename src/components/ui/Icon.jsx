/**
 * Iconos vectoriales del sitio (SVG inline, sin dependencias externas).
 * Todos se dibujan con `currentColor`, por lo que heredan el color del texto.
 */

const TRAZOS = {
  /* ── Categorías ─────────────────────────────────────────── */
  cartera: (
    <>
      <path d="M6.5 8h11l1.2 11.5a1.5 1.5 0 0 1-1.5 1.6H6.8a1.5 1.5 0 0 1-1.5-1.6L6.5 8Z" />
      <path d="M9.2 8V6.2a2.8 2.8 0 0 1 5.6 0V8" />
      <path d="M9.5 12.5h5" />
    </>
  ),
  cinturon: (
    <>
      <path d="M3 9.5h18v5H3z" />
      <path d="M8 9.5v5" />
      <path d="M8 11.2h2.6" />
      <path d="M15 11.4h3" />
      <path d="M15 13h3" />
    </>
  ),
  billetera: (
    <>
      <path d="M3.5 7.5h17v10h-17z" />
      <path d="M3.5 11h17" />
      <path d="M14 13.5h4.5" />
      <circle cx="16.2" cy="13.5" r=".9" />
    </>
  ),
  mochila: (
    <>
      <path d="M6.5 10a5.5 5.5 0 0 1 11 0v10.5h-11z" />
      <path d="M9.4 10V7.2a2.6 2.6 0 0 1 5.2 0V10" />
      <path d="M9 14.5h6" />
      <path d="M12 14.5v2" />
    </>
  ),
  regalo: (
    <>
      <path d="M4 10.5h16V20H4z" />
      <path d="M3 7h18v3.5H3z" />
      <path d="M12 7v13" />
      <path d="M12 7c-3.2 0-5-1.2-5-2.8C7 2.8 9 3.4 12 7Z" />
      <path d="M12 7c3.2 0 5-1.2 5-2.8C17 2.8 15 3.4 12 7Z" />
    </>
  ),

  /* ── Garantías ──────────────────────────────────────────── */
  hoja: (
    <>
      <path d="M20 4C10.5 4 4.5 8.8 4.5 15.4c0 1.6.5 3.1 1.2 4.6C14 20 20 13.5 20 4Z" />
      <path d="M5.6 20C8 14.5 12 10.5 17 8" />
    </>
  ),
  artesania: (
    <>
      <path d="M12 3.2 13.7 8l4.8 1.7-4.8 1.7L12 16.2l-1.7-4.8L5.5 9.7 10.3 8 12 3.2Z" />
      <path d="M18.5 16.2l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
    </>
  ),
  escudo: (
    <>
      <path d="M12 3.2 19 6v6.2c0 4-2.9 7.2-7 8.6-4.1-1.4-7-4.6-7-8.6V6l7-2.8Z" />
      <path d="m9 12 2.2 2.2L15.3 10" />
    </>
  ),
  camion: (
    <>
      <path d="M2.8 6.5h11.4v10H2.8z" />
      <path d="M14.2 10h4l3 3v3.5h-7z" />
      <circle cx="7" cy="18" r="1.9" />
      <circle cx="17.5" cy="18" r="1.9" />
    </>
  ),

  /* ── Contacto ───────────────────────────────────────────── */
  ubicacion: (
    <>
      <path d="M12 21.2s7-5.9 7-11.2a7 7 0 1 0-14 0c0 5.3 7 11.2 7 11.2Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  telefono: (
    <path d="M6.4 3h3l1.6 4-2.1 1.5a12.4 12.4 0 0 0 5.6 5.6L16 12l4 1.6v3a2 2 0 0 1-2.2 2A16.4 16.4 0 0 1 4.4 5.2 2 2 0 0 1 6.4 3Z" />
  ),
  correo: (
    <>
      <path d="M3.5 5.8h17v12.4h-17z" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  reloj: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 6.8V12l3.4 2" />
    </>
  ),

  /* ── Interfaz ───────────────────────────────────────────── */
  flecha: <path d="M5 12h13M13 6.5 18.5 12 13 17.5" />,
  whatsapp: (
    <path d="M12 2.8a9.1 9.1 0 0 0-7.8 13.8L3 21.4l4.9-1.2A9.1 9.1 0 1 0 12 2.8Zm4.6 12.9c-.2.6-1.2 1.1-1.7 1.1-.4 0-1 .1-3.2-.9-2.7-1.2-4.4-4-4.5-4.2-.1-.2-1-1.4-1-2.6 0-1.3.6-1.9.9-2.2.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .6l-.4.5-.3.4c-.1.1-.2.3-.1.5.1.2.6 1.1 1.4 1.8 1 .9 1.8 1.1 2 1.2.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.6-.1l1.9.9c.2.1.4.2.5.3.1.1.1.6-.1 1.2Z" />
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  cerrar: <path d="m6 6 12 12M18 6 6 18" />,
  cerrar2: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
      <path d="m6 6 12 12M18 6 6 18" />
    </>
  ),
}

export default function Icon({
  nombre,
  className = 'h-6 w-6',
  relleno = false,
  ...props
}) {
  const trazo = TRAZOS[nombre]
  if (!trazo) return null

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={relleno ? 'currentColor' : 'none'}
      stroke={relleno ? 'none' : 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {trazo}
    </svg>
  )
}

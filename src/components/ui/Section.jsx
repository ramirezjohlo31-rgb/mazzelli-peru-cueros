/** Sección vertical con fondo y ancho configurables. */
export default function Section({
  children,
  className = '',
  fondo = 'crema',
  conContenedor = true,
  id,
}) {
  const fondos = {
    crema: 'bg-crema-50',
    blanco: 'bg-white',
    oscuro: 'bg-cuero-900 text-crema-100',
    cognac: 'bg-cognac-500 text-crema-50',
  }

  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${fondos[fondo] ?? fondos.crema} ${className}`}
    >
      {conContenedor ? <div className="contenedor">{children}</div> : children}
    </section>
  )
}

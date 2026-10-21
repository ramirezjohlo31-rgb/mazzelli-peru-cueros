/** Encabezado de sección con eyebrow, título, descripción y filete dorado. */
export default function SectionTitle({
  eyebrow,
  titulo,
  descripcion,
  centrado = true,
  className = '',
}) {
  return (
    <div
      className={`${centrado ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-oro-500">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem]">{titulo}</h2>
      <div className={`filete-oro my-5 w-24 ${centrado ? 'mx-auto' : ''}`} />
      {descripcion && (
        <p className="text-base leading-relaxed text-tinta-500 sm:text-lg">
          {descripcion}
        </p>
      )}
    </div>
  )
}

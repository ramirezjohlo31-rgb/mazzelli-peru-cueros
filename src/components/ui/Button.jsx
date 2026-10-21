/**
 * Botón reutilizable con variantes de marca.
 * Puede renderizarse como <button> o como <a>/<Link> mediante la prop `como`.
 */
const variantes = {
  primario:
    'bg-cuero-900 text-crema-50 hover:bg-cuero-800 shadow-suave hover:shadow-medio',
  secundario:
    'bg-transparent text-cuero-900 border-2 border-cuero-900 hover:bg-cuero-900 hover:text-crema-50',
  oro: 'bg-oro-500 text-cuero-950 hover:bg-oro-400 shadow-suave hover:shadow-medio',
  claro: 'bg-crema-50/10 text-crema-50 border border-crema-50/30 hover:bg-crema-50/20',
  fantasma: 'bg-transparent text-cuero-800 hover:bg-crema-100',
}

const tamanos = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  variante = 'primario',
  tamano = 'md',
  className = '',
  como = 'button',
  href,
  ...props
}) {
  const clases = [
    'inline-flex items-center justify-center gap-2 rounded-cuero font-semibold',
    'transition-all duration-300 active:scale-[0.98]',
    'disabled:cursor-not-allowed disabled:opacity-50',
    variantes[variante] ?? variantes.primario,
    tamanos[tamano] ?? tamanos.md,
    className,
  ].join(' ')

  if (como === 'a') {
    return (
      <a href={href} className={clases} {...props}>
        {children}
      </a>
    )
  }

  if (como === 'link') {
    return (
      <a
        href={href}
        className={`inline-flex items-center gap-2 font-semibold text-cognac-600 underline-offset-4 hover:text-cuero-900 hover:underline ${className}`}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={clases} {...props}>
      {children}
    </button>
  )
}

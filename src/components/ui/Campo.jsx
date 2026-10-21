/**
 * Campo de formulario (label + input + mensaje de error).
 * Accesibilidad: label enlazado por id, aria-invalid y aria-describedby.
 */
export default function Campo({
  etiqueta,
  id,
  error,
  ayuda,
  requerido = false,
  children,
  className = '',
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="text-sm font-semibold text-cuero-800">
        {etiqueta}
        {requerido && (
          <span className="ml-1 text-oro-500" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {children}

      {error ? (
        <p id={`${id}-error`} role="alert" className="text-xs font-medium text-red-700">
          {error}
        </p>
      ) : (
        ayuda && (
          <p id={`${id}-ayuda`} className="text-xs text-tinta-500">
            {ayuda}
          </p>
        )
      )}
    </div>
  )
}

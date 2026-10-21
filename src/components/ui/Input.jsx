/** Input de texto con estilos de marca. */
export default function Input({ id, error, className = '', ...props }) {
  return (
    <input
      id={id}
      aria-invalid={error ? 'true' : undefined}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-tinta-900 placeholder:text-tinta-500/60 transition-colors focus:border-oro-500 focus:outline-none ${
        error ? 'border-red-600' : 'border-crema-200'
      } ${className}`}
      {...props}
    />
  )
}

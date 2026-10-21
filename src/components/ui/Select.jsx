/** Lista desplegable con estilos de marca. */
export default function Select({ id, error, className = '', children, ...props }) {
  return (
    <div className="relative">
      <select
        id={id}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full appearance-none rounded-lg border bg-white px-4 py-3 pr-10 text-sm text-tinta-900 transition-colors focus:border-oro-500 focus:outline-none ${
          error ? 'border-red-600' : 'border-crema-200'
        } ${className}`}
        {...props}
      >
        {children}
      </select>
      <svg
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-tinta-500"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  )
}

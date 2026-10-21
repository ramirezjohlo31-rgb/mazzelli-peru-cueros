/** Etiqueta / badge para estados de producto y categorías. */
const tonos = {
  oro: 'bg-oro-300/30 text-cuero-900 border-oro-500/40',
  oscuro: 'bg-cuero-900 text-crema-50',
  claro: 'bg-crema-100 text-cuero-800 border-crema-200',
  success: 'bg-emerald-700/10 text-emerald-800 border-emerald-700/25',
  alert: 'bg-red-700/10 text-red-800 border-red-700/25',
}

export default function Badge({ children, tono = 'oro', className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${tonos[tono] ?? tonos.oro} ${className}`}
    >
      {children}
    </span>
  )
}

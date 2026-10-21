import Select from '../../components/ui/Select.jsx'

/** Barra de filtros del catálogo: categorías, búsqueda, orden y stock. */
export default function FilterBar({
  categorias,
  conteoPorCategoria,
  categoria,
  busqueda,
  orden,
  ordenes,
  soloConStock,
  hayFiltrosActivos,
  onCategoria,
  onBusqueda,
  onOrden,
  onSoloConStock,
  onReiniciar,
}) {
  return (
    <div className="rounded-cuero border border-crema-200 bg-white p-5 shadow-suave">
      <div className="flex flex-col gap-5">
        {/* Categorías */}
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-tinta-500">
            Categoría
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => onCategoria('todas')}
              aria-pressed={categoria === 'todas'}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                categoria === 'todas'
                  ? 'border-cuero-900 bg-cuero-900 text-crema-50'
                  : 'border-crema-200 text-cuero-800 hover:border-oro-500 hover:bg-crema-50'
              }`}
            >
              Todas <span className="ml-1 opacity-70">({conteoPorCategoria.todas})</span>
            </button>

            {categorias.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onCategoria(item.id)}
                aria-pressed={categoria === item.id}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                  categoria === item.id
                    ? 'border-cuero-900 bg-cuero-900 text-crema-50'
                    : 'border-crema-200 text-cuero-800 hover:border-oro-500 hover:bg-crema-50'
                }`}
              >
                {item.nombre}{' '}
                <span className="ml-1 opacity-70">({conteoPorCategoria[item.id]})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Separador */}
        <div className="h-px bg-crema-200" />

        {/* Buscador + orden + stock */}
        <div className="grid gap-4 lg:grid-cols-[1fr_220px_auto]">
          <div className="relative">
            <label htmlFor="buscador" className="sr-only">
              Buscar productos
            </label>
            <svg
              className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-tinta-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 103.42 9.78l3.13 3.13a.75.75 0 001.06-1.06l-3.13-3.13A5.5 5.5 0 009 3.5zM5 9a4 4 0 118 0 4 4 0 01-8 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              id="buscador"
              type="search"
              value={busqueda}
              onChange={(evento) => onBusqueda(evento.target.value)}
              placeholder="Buscar por nombre, material o descripción…"
              className="w-full rounded-lg border border-crema-200 bg-white py-3 pl-11 pr-4 text-sm text-tinta-900 placeholder:text-tinta-500/60 transition-colors focus:border-oro-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="orden" className="sr-only">
              Ordenar resultados
            </label>
            <Select
              id="orden"
              value={orden}
              onChange={(evento) => onOrden(evento.target.value)}
            >
              {ordenes.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nombre}
                </option>
              ))}
            </Select>
          </div>

          <label className="flex cursor-pointer items-center gap-2.5 self-center rounded-lg border border-crema-200 px-4 py-3 text-sm font-medium text-cuero-800 transition-colors hover:border-oro-500">
            <input
              type="checkbox"
              checked={soloConStock}
              onChange={(evento) => onSoloConStock(evento.target.checked)}
              className="h-4 w-4 cursor-pointer accent-[#8B5E3C]"
            />
            Solo con stock
          </label>
        </div>

        {hayFiltrosActivos && (
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onReiniciar}
              className="text-sm font-semibold text-cognac-600 underline-offset-4 hover:text-cuero-900 hover:underline"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

import ProductCard from './ProductCard.jsx'

/** Rejilla responsiva de tarjetas de producto. */
export default function ProductGrid({ productos, className = '' }) {
  if (!productos || productos.length === 0) {
    return (
      <div className="rounded-cuero border border-dashed border-crema-300 bg-white/60 px-6 py-16 text-center">
        <p className="font-display text-2xl text-cuero-900">No encontramos productos</p>
        <p className="mx-auto mt-2 max-w-md text-sm text-tinta-500">
          Prueba con otra categoría o limpia los filtros para ver todo el catálogo
          disponible.
        </p>
      </div>
    )
  }

  return (
    <div className={`grid gap-6 sm:grid-cols-2 xl:grid-cols-3 ${className}`} role="list">
      {productos.map((producto) => (
        <div key={producto.id} role="listitem">
          <ProductCard producto={producto} />
        </div>
      ))}
    </div>
  )
}

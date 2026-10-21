import { Link } from 'react-router-dom'

import { categorias } from '../../data/catalogo.js'
import Badge from '../../components/ui/Badge.jsx'

/** Tarjeta de producto del catálogo. */
export default function ProductCard({ producto }) {
  const categoria = categorias.find((item) => item.id === producto.categoria)

  return (
    <article className="tarjeta-cuero group flex flex-col overflow-hidden rounded-cuero border border-crema-200 bg-white shadow-suave">
      {/* Imagen */}
      <Link
        to={`/productos/${producto.slug}`}
        className="marco-imagen relative block aspect-[4/3] overflow-hidden"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={producto.imagenes[0]}
          alt=""
          loading="lazy"
          width="640"
          height="480"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {producto.badges.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            {producto.badges.map((badge) => (
              <Badge key={badge} tono="claro" className="bg-white/90 backdrop-blur">
                {badge}
              </Badge>
            ))}
          </div>
        )}
        {!producto.stock && (
          <div className="absolute inset-x-0 bottom-0 bg-cuero-950/85 py-2 text-center text-xs font-bold uppercase tracking-widest text-crema-50">
            Agotado · por encargo
          </div>
        )}
      </Link>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-oro-500">
          {categoria?.nombre}
        </p>

        <h3 className="mt-2 text-xl">
          <Link
            to={`/productos/${producto.slug}`}
            className="transition-colors hover:text-cognac-600"
          >
            {producto.nombre}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-tinta-500">
          {producto.descripcion}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {producto.colores.slice(0, 4).map((color) => (
            <li
              key={color}
              className="rounded-full bg-crema-100 px-2.5 py-1 text-[0.7rem] font-medium text-cuero-800"
            >
              {color}
            </li>
          ))}
        </ul>

        {/* Precio */}
        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <div>
            {producto.precioAntes && (
              <p className="text-xs text-tinta-500 line-through">
                S/ {producto.precioAntes.toFixed(2)}
              </p>
            )}
            <p className="font-display text-2xl font-bold text-cuero-900">
              S/ {producto.precio.toFixed(2)}
            </p>
          </div>

          <Link
            to={`/productos/${producto.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-cognac-600 transition-colors hover:text-cuero-900"
          >
            Ver detalle
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  )
}

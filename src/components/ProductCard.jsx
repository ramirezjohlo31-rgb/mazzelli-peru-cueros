import { Eye, Tag } from 'lucide-react'

export default function ProductCard({ product, onSelect }) {
  return (
    <article className="surface group flex h-full flex-col overflow-hidden rounded-xl transition-transform hover:-translate-y-0.5">
      <div className="relative aspect-[4/3] overflow-hidden bg-plomo-dark">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="chip bg-plomo-light/95">{product.material}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-snug text-vino">{product.name}</h3>
        </div>
        <p className="mt-1 text-sm text-vino/75">
          {product.type} · {product.gender}
        </p>
        <p className="mt-2 line-clamp-2 text-sm text-vino/85">{product.description}</p>
        <div className="mt-4 flex items-center justify-between gap-3 pt-1">
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-vino">
            <Tag size={15} className="text-accion" /> {product.priceRef}
          </span>
          <button type="button" className="btn-primary px-3 py-2 text-sm" onClick={() => onSelect(product)}>
            <Eye size={16} /> Vista rápida
          </button>
        </div>
      </div>
    </article>
  )
}

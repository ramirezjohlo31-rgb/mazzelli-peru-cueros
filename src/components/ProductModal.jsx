import { Check, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ProductModal({ product, onClose, onAddToQuote }) {
  const [finish, setFinish] = useState('')
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    if (product) {
      setFinish(product.finishes[0] || '')
      setActiveImg(0)
    }
  }, [product])

  useEffect(() => {
    if (!product) return
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [product, onClose])

  if (!product) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Detalle de ${product.name}`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="surface max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-2xl sm:rounded-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-vino/10 bg-plomo-dark px-4 py-3 sm:px-6">
          <h2 className="pr-4 text-lg font-semibold text-vino sm:text-xl">Vista rápida del producto</h2>
          <button type="button" className="rounded-md p-2 text-vino hover:bg-plomo" onClick={onClose} aria-label="Cerrar">
            <X size={20} />
          </button>
        </div>

        <div className="grid gap-6 p-4 sm:p-6 md:grid-cols-2">
          <div>
            <div className="overflow-hidden rounded-xl border border-vino/10 bg-plomo">
              <img
                src={product.images[activeImg] || product.images[0]}
                alt={product.name}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="mt-3 flex gap-2">
                {product.images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveImg(i)}
                    className={`overflow-hidden rounded-md border ${i === activeImg ? 'border-accion ring-2 ring-accion/20' : 'border-vino/15'}`}
                  >
                    <img src={src} alt="" className="h-14 w-20 object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              <span className="chip">{product.type}</span>
              <span className="chip">{product.gender}</span>
              <span className="chip">{product.material}</span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-bold text-vino">{product.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-vino/90">{product.description}</p>

            <div className="mt-4">
              <h4 className="text-sm font-semibold text-vino">Características</h4>
              <ul className="mt-2 space-y-1.5 text-sm text-vino/85">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-accion" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-vino">Color / acabado</span>
                <select className="field" value={finish} onChange={(e) => setFinish(e.target.value)}>
                  {product.finishes.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
              </label>
              <p className="mt-1.5 text-xs text-vino/65">
                Selecciona el color o acabado de cuero preferido antes de agregar a cotización.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className="btn-primary"
                onClick={() => onAddToQuote(product, finish)}
                disabled={!finish}
              >
                <ShoppingBag size={18} /> Agregar a cotización
              </button>
              <button type="button" className="btn-secondary" onClick={onClose}>
                Seguir viendo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

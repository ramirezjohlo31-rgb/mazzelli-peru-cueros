import { MessageCircle, Minus, Plus, Trash2, X } from 'lucide-react'
import { buildWhatsAppUrl, COMPANY } from '../data/company'

function buildQuoteMessage(items) {
  const lines = [
    `Hola, ${COMPANY.commercialName}. Deseo solicitar una cotización:`,
    '',
  ]
  items.forEach((item, i) => {
    lines.push(
      `${i + 1}. ${item.name} (${item.type}, ${item.gender}, ${item.material}) - Acabado: ${item.finish} - Cantidad: ${item.qty}`,
    )
  })
  lines.push('')
  lines.push('Agradeceré información sobre disponibilidad, precio y tiempos de atención. Gracias.')
  return lines.join('\n')
}

export default function QuoteCart({ open, items, onClose, onUpdateQty, onRemove, onClear }) {
  if (!open) return null

  const message = items.length ? buildQuoteMessage(items) : ''
  const waUrl = items.length ? buildWhatsAppUrl(message) : '#'

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        className="absolute inset-0 bg-black/55"
        aria-label="Cerrar carrito"
        onClick={onClose}
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-plomo-dark text-vino shadow-2xl">
        <div className="flex items-center justify-between border-b border-vino/10 px-4 py-4">
          <div>
            <h2 className="text-lg font-semibold text-vino">Carrito de cotización</h2>
            <p className="text-xs text-vino/70">Compila productos y envía tu pedido por WhatsApp.</p>
          </div>
          <button type="button" className="rounded-md p-2 hover:bg-plomo" onClick={onClose} aria-label="Cerrar">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="rounded-xl border border-dashed border-vino/20 bg-plomo-light p-6 text-center">
              <p className="font-medium text-vino">Tu carrito está vacío</p>
              <p className="mt-1 text-sm text-vino/75">Explora el catálogo y agrega productos para cotizar.</p>
              <a href="#catalogo" onClick={onClose} className="btn-primary mt-4 text-sm">
                Ir al catálogo
              </a>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item.key} className="rounded-xl border border-vino/10 bg-plomo-light p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold leading-snug text-vino">{item.name}</h3>
                      <p className="mt-0.5 text-xs text-vino/70">
                        {item.type} · {item.gender} · {item.material}
                      </p>
                      <p className="mt-1 text-sm text-vino/85">
                        <span className="font-medium">Acabado:</span> {item.finish}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="rounded p-1.5 text-vino/70 hover:bg-plomo hover:text-vino-light"
                      onClick={() => onRemove(item.key)}
                      aria-label={`Quitar ${item.name}`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      type="button"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-vino/20 bg-plomo-light text-vino hover:bg-plomo"
                      onClick={() => onUpdateQty(item.key, -1)}
                      aria-label="Disminuir"
                    >
                      <Minus size={15} />
                    </button>
                    <span className="min-w-8 text-center text-sm font-semibold">{item.qty}</span>
                    <button
                      type="button"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-vino/20 bg-plomo-light text-vino hover:bg-plomo"
                      onClick={() => onUpdateQty(item.key, 1)}
                      aria-label="Aumentar"
                    >
                      <Plus size={15} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-vino/10 bg-plomo-light p-4">
          {items.length > 0 && (
            <>
              <div className="mb-3 max-h-28 overflow-auto rounded-md bg-plomo p-2.5 text-xs leading-relaxed text-vino/80">
                <span className="font-semibold text-vino">Mensaje:</span>{' '}
                <span className="whitespace-pre-wrap">{message}</span>
              </div>
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full"
              >
                <MessageCircle size={18} /> Enviar pedido por WhatsApp
              </a>
              <button type="button" className="btn-secondary mt-2 w-full" onClick={onClear}>
                Vaciar cotización
              </button>
              <p className="mt-2 text-center text-[11px] text-vino/60">
                Configura el número real en <code>src/data/company.js</code> (whatsappNumber).
              </p>
            </>
          )}
        </div>
      </aside>
    </div>
  )
}

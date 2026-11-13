import { Menu, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'
import { COMPANY } from '../data/company'

const NAV = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#empresa', label: 'Empresa' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header({ cartCount, onOpenCart }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-plomo-dark/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8 text-vino">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="./marzzelli-logo.jpeg"
            alt={COMPANY.commercialName}
            className="h-10 w-auto rounded"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-vino sm:text-base">
              Marzzelli Perú Cueros
            </div>
            <div className="text-[11px] text-vino/80">Marroquinería fina</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-vino/90 transition-colors hover:text-vino-light"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenCart}
            className="relative inline-flex items-center gap-2 rounded-md bg-vino px-3 py-2 text-sm font-semibold text-plomo-light transition-colors hover:bg-vino-light"
            aria-label="Abrir carrito de cotización"
          >
            <ShoppingBag size={18} />
            <span className="hidden sm:inline">Cotización</span>
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex min-w-5 items-center justify-center rounded-full bg-plomo-light px-1.5 text-xs font-bold text-vino ring-2 ring-plomo-dark">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            className="inline-flex rounded-md p-2 text-vino hover:bg-white/10 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-plomo-dark px-4 py-3 md:hidden">
          <div className="flex flex-col gap-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-vino/90 hover:bg-white/10 hover:text-vino-light"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

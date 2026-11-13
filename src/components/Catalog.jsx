import { Filter, SearchX } from 'lucide-react'
import { useMemo, useState } from 'react'
import { CATEGORIES, GENDERS, MATERIALS, PRODUCTS } from '../data/products'
import ProductCard from './ProductCard'

function FilterSelect({ label, value, options, onChange }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-vino/70">{label}</span>
      <select className="field" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  )
}

export default function Catalog({ onSelectProduct }) {
  const [type, setType] = useState('Todos')
  const [gender, setGender] = useState('Todos')
  const [material, setMaterial] = useState('Todos')

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (type !== 'Todos' && p.type !== type) return false
      if (gender !== 'Todos' && p.gender !== gender) return false
      if (material !== 'Todos' && p.material !== material) return false
      return true
    })
  }, [type, gender, material])

  function reset() {
    setType('Todos')
    setGender('Todos')
    setMaterial('Todos')
  }

  return (
    <section id="catalogo" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="surface rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-vino/70">Catálogo</p>
              <h2 className="mt-1 font-display text-3xl font-bold text-vino">Productos seleccionados</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-vino/85">
                Filtra en tiempo real por tipo, género y material. Explora cada producto y agrégalo a tu cotización.
              </p>
            </div>
            <button type="button" className="btn-secondary shrink-0" onClick={reset}>
              <Filter size={16} /> Limpiar filtros
            </button>
          </div>

          <div className="mt-6 grid gap-4 rounded-xl border border-vino/10 bg-plomo-dark p-4 sm:grid-cols-3">
            <FilterSelect label="Tipo de producto" value={type} options={CATEGORIES} onChange={setType} />
            <FilterSelect label="Género" value={gender} options={GENDERS} onChange={setGender} />
            <FilterSelect label="Material" value={material} options={MATERIALS} onChange={setMaterial} />
          </div>

          <div className="mt-4 text-sm text-vino/75">
            Mostrando <span className="font-semibold text-vino">{filtered.length}</span> de {PRODUCTS.length} productos.
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />
            ))}
          </div>
        ) : (
          <div className="surface mt-8 flex flex-col items-center rounded-xl p-10 text-center">
            <SearchX size={34} className="text-vino/40" />
            <h3 className="mt-3 text-lg font-semibold text-vino">No hay productos con esos filtros</h3>
            <p className="mt-1 text-sm text-vino/80">Prueba otra combinación o limpia los filtros.</p>
          </div>
        )}
      </div>
    </section>
  )
}

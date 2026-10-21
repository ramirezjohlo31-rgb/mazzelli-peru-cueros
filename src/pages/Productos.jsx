import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import useCatalogo from '../features/catalogo/useCatalogo.js'
import FilterBar from '../features/catalogo/FilterBar.jsx'
import ProductGrid from '../features/catalogo/ProductGrid.jsx'
import Section from '../components/ui/Section.jsx'
import SectionTitle from '../components/ui/SectionTitle.jsx'

/** Página de catálogo con filtros, búsqueda y ordenamiento. */
export default function Productos() {
  const [parametros, setParametros] = useSearchParams()
  const categoriaUrl = parametros.get('categoria') ?? 'todas'

  const {
    categoria,
    busqueda,
    orden,
    soloConStock,
    productosFiltrados,
    categorias,
    conteoPorCategoria,
    ordenes,
    hayFiltrosActivos,
    setCategoria,
    setBusqueda,
    setOrden,
    setSoloConStock,
    reiniciarFiltros,
  } = useCatalogo(categoriaUrl)

  // Sincroniza la categoría de la URL con el estado del hook
  useEffect(() => {
    setCategoria(categoriaUrl)
  }, [categoriaUrl, setCategoria])

  // Refleja la categoría en la URL (permite compartir el enlace filtrado)
  function manejarCategoria(nuevaCategoria) {
    setCategoria(nuevaCategoria)
    if (nuevaCategoria === 'todas') {
      parametros.delete('categoria')
    } else {
      parametros.set('categoria', nuevaCategoria)
    }
    setParametros(parametros, { replace: true })
  }

  return (
    <>
      {/* Encabezado */}
      <section className="textura-cuero bg-cuero-900 py-16 text-crema-100 sm:py-20">
        <div className="contenedor">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-oro-500">
            Catálogo
          </p>
          <h1 className="mt-4 text-4xl text-crema-50 sm:text-5xl">
            Todos nuestros productos
          </h1>
          <p className="mt-4 max-w-2xl text-crema-200/80">
            Cada pieza está disponible en los colores indicados. Las medidas especiales y
            los pedidos mayoristas se cotizan bajo pedido.
          </p>
        </div>
      </section>

      <Section>
        <SectionTitle
          eyebrow="Explora"
          titulo="Encuentra lo que necesitas"
          descripcion={`${productosFiltrados.length} producto${productosFiltrados.length === 1 ? '' : 's'} disponible${productosFiltrados.length === 1 ? '' : 's'} con los filtros actuales.`}
        />

        <div className="mt-12">
          <FilterBar
            categorias={categorias}
            conteoPorCategoria={conteoPorCategoria}
            categoria={categoria}
            busqueda={busqueda}
            orden={orden}
            ordenes={ordenes}
            soloConStock={soloConStock}
            hayFiltrosActivos={hayFiltrosActivos}
            onCategoria={manejarCategoria}
            onBusqueda={setBusqueda}
            onOrden={setOrden}
            onSoloConStock={setSoloConStock}
            onReiniciar={reiniciarFiltros}
          />
        </div>

        <div className="mt-10">
          <ProductGrid productos={productosFiltrados} />
        </div>
      </Section>
    </>
  )
}

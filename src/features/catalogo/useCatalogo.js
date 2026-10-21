import { useMemo, useState } from 'react'

import { categorias, productos } from '../../data/catalogo.js'
import useDebounce from '../../hooks/useDebounce.js'

const ORDENES = [
  { id: 'destacados', nombre: 'Destacados primero' },
  { id: 'precio-asc', nombre: 'Menor precio' },
  { id: 'precio-desc', nombre: 'Mayor precio' },
  { id: 'nombre', nombre: 'Nombre (A–Z)' },
]

/**
 * Hook de dominio del módulo catálogo.
 * Centraliza el estado del filtrado, la búsqueda y el ordenamiento.
 *
 * @param {string} [categoriaInicial] - Categoría inicial (por URL).
 */
export default function useCatalogo(categoriaInicial = 'todas') {
  const [categoria, setCategoria] = useState(categoriaInicial)
  const [busqueda, setBusqueda] = useState('')
  const [orden, setOrden] = useState('destacados')
  const [soloConStock, setSoloConStock] = useState(false)

  const busquedaDiferida = useDebounce(busqueda, 250)

  const productosFiltrados = useMemo(() => {
    const texto = busquedaDiferida.trim().toLowerCase()

    const resultado = productos.filter((producto) => {
      const coincideCategoria = categoria === 'todas' || producto.categoria === categoria
      const coincideStock = !soloConStock || producto.stock
      const coincideTexto =
        texto === '' ||
        producto.nombre.toLowerCase().includes(texto) ||
        producto.descripcion.toLowerCase().includes(texto) ||
        producto.materiales.some((material) => material.toLowerCase().includes(texto))

      return coincideCategoria && coincideStock && coincideTexto
    })

    return [...resultado].sort((a, b) => {
      switch (orden) {
        case 'precio-asc':
          return a.precio - b.precio
        case 'precio-desc':
          return b.precio - a.precio
        case 'nombre':
          return a.nombre.localeCompare(b.nombre, 'es')
        default:
          return Number(b.destacado) - Number(a.destacado)
      }
    })
  }, [categoria, busquedaDiferida, orden, soloConStock])

  /** Cantidad de productos por categoría (para los contadores de los filtros). */
  const conteoPorCategoria = useMemo(() => {
    const conteo = { todas: productos.length }
    categorias.forEach((item) => {
      conteo[item.id] = productos.filter(
        (producto) => producto.categoria === item.id,
      ).length
    })
    return conteo
  }, [])

  function reiniciarFiltros() {
    setCategoria('todas')
    setBusqueda('')
    setOrden('destacados')
    setSoloConStock(false)
  }

  const hayFiltrosActivos =
    categoria !== 'todas' ||
    busqueda.trim() !== '' ||
    orden !== 'destacados' ||
    soloConStock

  return {
    // estado
    categoria,
    busqueda,
    orden,
    soloConStock,
    // datos
    productosFiltrados,
    categorias,
    conteoPorCategoria,
    ordenes: ORDENES,
    hayFiltrosActivos,
    // acciones
    setCategoria,
    setBusqueda,
    setOrden,
    setSoloConStock,
    reiniciarFiltros,
  }
}

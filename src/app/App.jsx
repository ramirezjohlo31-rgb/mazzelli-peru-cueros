import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './Layout.jsx'
import ScrollToTop from '../components/layout/ScrollToTop.jsx'
import Section from '../components/ui/Section.jsx'

/**
 * Carga diferida (code splitting) de las rutas.
 * Cada página se descarga solo cuando el usuario la visita,
 * reduciendo el bundle inicial y mejorando el First Contentful Paint.
 */
const Home = lazy(() => import('../pages/Home.jsx'))
const Nosotros = lazy(() => import('../pages/Nosotros.jsx'))
const Productos = lazy(() => import('../pages/Productos.jsx'))
const ProductoDetalle = lazy(() => import('../pages/ProductoDetalle.jsx'))
const Galeria = lazy(() => import('../pages/Galeria.jsx'))
const Servicios = lazy(() => import('../pages/Servicios.jsx'))
const Contacto = lazy(() => import('../pages/Contacto.jsx'))
const NoEncontrado = lazy(() => import('../pages/NoEncontrado.jsx'))

/** Marcador de carga mientras se descarga el chunk de la ruta. */
function Cargando() {
  return (
    <Section>
      <div className="flex flex-col items-center gap-4 py-20" role="status">
        <span className="h-10 w-10 animate-spin rounded-full border-2 border-crema-300 border-t-oro-500" />
        <p className="text-sm font-medium text-tinta-500">Cargando contenido…</p>
      </div>
    </Section>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Cargando />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/:slug" element={<ProductoDetalle />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NoEncontrado />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

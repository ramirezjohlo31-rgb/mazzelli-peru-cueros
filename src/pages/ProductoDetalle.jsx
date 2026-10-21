import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import {
  obtenerProductoPorSlug,
  obtenerRelacionados,
  categorias,
} from '../data/catalogo.js'
import ProductGallery from '../features/catalogo/ProductGallery.jsx'
import ProductCard from '../features/catalogo/ProductCard.jsx'
import { enlaceWhatsapp, mensajeProducto } from '../services/whatsapp.js'

import Button from '../components/ui/Button.jsx'
import Badge from '../components/ui/Badge.jsx'
import Section from '../components/ui/Section.jsx'
import SectionTitle from '../components/ui/SectionTitle.jsx'
import IconoWhatsapp from '../components/ui/IconoWhatsapp.jsx'

/** Ficha de detalle de un producto. */
export default function ProductoDetalle() {
  const { slug } = useParams()
  const producto = obtenerProductoPorSlug(slug)

  useEffect(() => {
    if (producto) {
      document.title = `${producto.nombre} | Mazzelli Cueros Perú`
    } else {
      document.title = 'Producto no encontrado | Mazzelli Cueros Perú'
    }
  }, [producto])

  if (!producto) {
    return (
      <Section>
        <div className="mx-auto max-w-lg text-center">
          <p className="font-display text-6xl text-oro-500">404</p>
          <h1 className="mt-4 text-3xl">Producto no encontrado</h1>
          <p className="mt-3 text-tinta-500">
            El producto que buscas ya no está disponible o el enlace es incorrecto.
          </p>
          <Button como="a" href="/productos" variante="primario" className="mt-8">
            Volver al catálogo
          </Button>
        </div>
      </Section>
    )
  }

  const categoria = categorias.find((item) => item.id === producto.categoria)
  const relacionados = obtenerRelacionados(producto.categoria, producto.slug)

  return (
    <>
      {/* Migas de pan */}
      <nav aria-label="Ruta de navegación" className="border-b border-crema-200 bg-white">
        <div className="contenedor py-4 text-xs text-tinta-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="hover:text-cuero-900">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link to="/productos" className="hover:text-cuero-900">
                Productos
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                to={`/productos?categoria=${producto.categoria}`}
                className="hover:text-cuero-900"
              >
                {categoria?.nombre}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-semibold text-cuero-900" aria-current="page">
              {producto.nombre}
            </li>
          </ol>
        </div>
      </nav>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Galería */}
          <ProductGallery imagenes={producto.imagenes} nombre={producto.nombre} />

          {/* Información */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-oro-500">
              {categoria?.nombre}
            </p>

            <h1 className="mt-3 text-4xl sm:text-5xl">{producto.nombre}</h1>

            <div className="mt-4 flex flex-wrap gap-2">
              {producto.badges.map((badge) => (
                <Badge key={badge} tono="oro">
                  {badge}
                </Badge>
              ))}
              {producto.stock ? (
                <Badge tono="success">Disponible</Badge>
              ) : (
                <Badge tono="alert">Bajo encargo</Badge>
              )}
            </div>

            {/* Precio */}
            <div className="mt-6 flex items-end gap-3">
              <span className="font-display text-4xl font-bold text-cuero-900">
                S/ {producto.precio.toFixed(2)}
              </span>
              {producto.precioAntes && (
                <span className="pb-1 text-lg text-tinta-500 line-through">
                  S/ {producto.precioAntes.toFixed(2)}
                </span>
              )}
            </div>
            <p className="mt-1 text-xs text-tinta-500">
              Precio por unidad · IGV no incluido · Envíos a todo el Perú
            </p>

            <p className="mt-6 leading-relaxed text-tinta-700">
              {producto.descripcionLarga || producto.descripcion}
            </p>

            {/* Especificaciones */}
            <dl className="mt-8 divide-y divide-crema-200 rounded-cuero border border-crema-200 bg-white">
              <div className="flex justify-between gap-4 px-5 py-3.5 text-sm">
                <dt className="font-semibold text-cuero-800">Materiales</dt>
                <dd className="text-right text-tinta-500">
                  {producto.materiales.join(' · ')}
                </dd>
              </div>
              <div className="flex justify-between gap-4 px-5 py-3.5 text-sm">
                <dt className="font-semibold text-cuero-800">Medidas</dt>
                <dd className="text-right text-tinta-500">{producto.medidas}</dd>
              </div>
              <div className="flex justify-between gap-4 px-5 py-3.5 text-sm">
                <dt className="font-semibold text-cuero-800">Colores</dt>
                <dd className="text-right text-tinta-500">
                  {producto.colores.join(' · ')}
                </dd>
              </div>
              <div className="flex justify-between gap-4 px-5 py-3.5 text-sm">
                <dt className="font-semibold text-cuero-800">Código</dt>
                <dd className="text-right font-mono text-xs text-tinta-500">
                  {producto.id.toUpperCase()}
                </dd>
              </div>
            </dl>

            {/* Acciones */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                como="a"
                href={enlaceWhatsapp(mensajeProducto(producto))}
                variante="primario"
                className="flex-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconoWhatsapp className="h-5 w-5" />
                Consultar por WhatsApp
              </Button>
              <Button como="a" href="/contacto" variante="secundario">
                Solicitar cotización
              </Button>
            </div>

            <p className="mt-4 flex items-start gap-2 text-xs text-tinta-500">
              <span className="text-oro-500" aria-hidden="true">
                ✔
              </span>
              Compra protegida: verificación de calidad antes del despacho y garantía
              escrita de 1 año contra defectos de fabricación.
            </p>
          </div>
        </div>
      </Section>

      {/* Relacionados */}
      {relacionados.length > 0 && (
        <Section fondo="blanco">
          <SectionTitle
            eyebrow="También te puede interesar"
            titulo={`Otros productos de ${categoria?.nombre.toLowerCase()}`}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {relacionados.map((item) => (
              <ProductCard key={item.id} producto={item} />
            ))}
          </div>
        </Section>
      )}
    </>
  )
}

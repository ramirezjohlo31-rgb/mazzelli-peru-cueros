import { Link } from 'react-router-dom'

import { empresa, garantias, proceso } from '../data/empresa.js'
import { categorias, obtenerDestacados } from '../data/catalogo.js'
import { servicios, testimonios } from '../data/servicios.js'
import ProductCard from '../features/catalogo/ProductCard.jsx'
import { enlaceWhatsapp, mensajeConsultaGeneral } from '../services/whatsapp.js'
import { recurso } from '../utils/recursos.js'

import Button from '../components/ui/Button.jsx'
import Container from '../components/ui/Container.jsx'
import Section from '../components/ui/Section.jsx'
import SectionTitle from '../components/ui/SectionTitle.jsx'
import IconoWhatsapp from '../components/ui/IconoWhatsapp.jsx'
import Icon from '../components/ui/Icon.jsx'

/** Página de inicio: propuesta de valor, catálogo, proceso y confianza. */
export default function Home() {
  const destacados = obtenerDestacados(4)

  return (
    <>
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="textura-cuero relative overflow-hidden bg-cuero-900 text-crema-100">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, #8B5E3C 0, transparent 45%), radial-gradient(circle at 85% 70%, #C89B3C 0, transparent 40%)',
          }}
          aria-hidden="true"
        />

        <Container className="relative py-20 sm:py-28 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="animate-entrada">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-oro-500/40 bg-oro-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-oro-400">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-oro-500"
                  aria-hidden="true"
                />
                Hecho a mano en el Perú · desde {empresa.anioFundacion}
              </p>

              <h1 className="text-4xl leading-[1.1] text-crema-50 sm:text-5xl lg:text-6xl">
                Cuero que cuenta <span className="text-oro-500">historias</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-crema-200/85 sm:text-lg">
                Curtimos con taninos vegetales y cosemos a mano cada pieza de nuestra
                colección de{' '}
                <strong className="font-semibold text-crema-50">
                  carteras, cinturones, billeteras y mochilas
                </strong>
                . Calidad de taller, con alma peruana.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button como="ruta" href="/productos" variante="oro" tamano="lg">
                  Ver catálogo
                  <span aria-hidden="true">→</span>
                </Button>
                <Button
                  como="a"
                  href={enlaceWhatsapp(mensajeConsultaGeneral())}
                  variante="claro"
                  tamano="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconoWhatsapp className="h-5 w-5" />
                  Cotizar por WhatsApp
                </Button>
              </div>

              {/* Cifras */}
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-crema-50/15 pt-8">
                {[
                  { valor: '15+', etiqueta: 'Años de taller' },
                  { valor: '3 000+', etiqueta: 'Piezas artesanales' },
                  { valor: '100%', etiqueta: 'Cuero genuino' },
                ].map((dato) => (
                  <div key={dato.etiqueta}>
                    <dt className="sr-only">{dato.etiqueta}</dt>
                    <dd>
                      <span className="block font-display text-3xl font-bold text-oro-500">
                        {dato.valor}
                      </span>
                      <span className="mt-1 block text-xs leading-tight text-crema-200/70">
                        {dato.etiqueta}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Composición visual */}
            <div className="relative hidden lg:block" aria-hidden="true">
              <div className="marco-imagen aspect-[4/5] overflow-hidden rounded-[2rem] border border-oro-500/25 shadow-cuero">
                <img src={recurso('hero.svg')} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-8 w-56 rounded-cuero border border-crema-200/20 bg-cuero-950/90 p-5 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-oro-500">
                  Curtido vegetal
                </p>
                <p className="mt-2 text-sm leading-relaxed text-crema-200/85">
                  Tintes naturales y 40 días de reposo en tina. Sin crudos ni metales
                  pesados.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────── CATEGORÍAS ─────────────────────── */}
      <Section>
        <SectionTitle
          eyebrow="Nuestro catálogo"
          titulo="Cada pieza empieza con una buena piel"
          descripcion="Trabajamos con cuero vacuno curtido de forma vegetal, seleccionado pieza por pieza en nuestro taller de Lima."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categorias.map((categoria) => (
            <Link
              key={categoria.id}
              to={`/productos?categoria=${categoria.id}`}
              className="tarjeta-cuero group rounded-cuero border border-crema-200 bg-white p-6 text-center shadow-suave"
            >
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-crema-100 text-cognac-600 transition-colors group-hover:bg-oro-300/40">
                <Icon nombre={categoriaIcono[categoria.id]} className="h-7 w-7" />
              </span>
              <h3 className="text-lg">{categoria.nombre}</h3>
              <p className="mt-2 text-xs leading-relaxed text-tinta-500">
                {categoria.descripcion}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* ──────────────────────── DESTACADOS ─────────────────────── */}
      <Section fondo="blanco">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle
            eyebrow="Los más vendidos"
            titulo="Productos destacados"
            descripcion="Las piezas que más eligen nuestros clientes y que mejor representan el trabajo del taller."
            centrado={false}
            className="flex-1"
          />
          <Button como="ruta" href="/productos" variante="secundario">
            Ver todo el catálogo
            <span aria-hidden="true">→</span>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {destacados.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      </Section>

      {/* ───────────────────── PROCESO ARTESANAL ───────────────────── */}
      <Section fondo="oscuro">
        <SectionTitle
          eyebrow="Del cuero a la pieza"
          titulo="Un proceso de seis pasos, ningún atajo"
          descripcion="Desde la selección de la piel hasta el empaque final: cada etapa está documentada y firmada por nuestro equipo."
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {proceso.map((item) => (
            <li
              key={item.paso}
              className="rounded-cuero border border-crema-50/10 bg-crema-50/5 p-7 transition-colors hover:border-oro-500/40"
            >
              <span className="font-display text-4xl font-bold text-oro-500">
                {item.paso}
              </span>
              <h3 className="mt-3 text-xl text-crema-50">{item.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-crema-200/75">
                {item.descripcion}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ───────────────────────── GARANTÍAS ───────────────────────── */}
      <Section>
        <SectionTitle
          eyebrow="Nuestro compromiso"
          titulo="Por qué elegirnos"
          descripcion="No vendemos solo cuero: garantizamos el origen del material, la calidad de la confección y el respaldo postventa."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {garantias.map((garantia) => (
            <div
              key={garantia.titulo}
              className="rounded-cuero border border-crema-200 bg-white p-7 text-center shadow-suave"
            >
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cuero-900 text-oro-500">
                <Icon nombre={garantiaIcono[garantia.icono]} className="h-7 w-7" />
              </span>
              <h3 className="text-lg">{garantia.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-tinta-500">
                {garantia.descripcion}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ───────────────────────── SERVICIOS ───────────────────────── */}
      <Section fondo="blanco">
        <SectionTitle
          eyebrow="Más que un catálogo"
          titulo="Servicios para marcas y negocios"
          descripcion="Producción a medida, venta mayorista y programas corporativos con la misma calidad de taller."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {servicios.map((servicio) => (
            <article
              key={servicio.id}
              className="tarjeta-cuero flex flex-col rounded-cuero border border-crema-200 bg-crema-50 p-7"
            >
              <h3 className="text-xl">{servicio.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-tinta-500">
                {servicio.descripcion}
              </p>
              <ul className="mt-5 space-y-2 border-t border-crema-200 pt-5">
                {servicio.detalles.map((detalle) => (
                  <li
                    key={detalle}
                    className="flex items-start gap-2 text-sm text-cuero-800"
                  >
                    <span className="mt-0.5 text-oro-500" aria-hidden="true">
                      ✓
                    </span>
                    {detalle}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* ──────────────────────── TESTIMONIOS ──────────────────────── */}
      <Section>
        <SectionTitle
          eyebrow="Lo que dicen nuestros clientes"
          titulo="Confianza que se gana pieza a pieza"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonios.map((testimonio) => (
            <figure
              key={testimonio.nombre}
              className="rounded-cuero border border-crema-200 bg-white p-8 shadow-suave"
            >
              <span
                className="font-display text-4xl leading-none text-oro-500"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="mt-2 text-sm leading-relaxed text-tinta-700">
                {testimonio.texto}
              </blockquote>
              <figcaption className="mt-6 border-t border-crema-200 pt-5">
                <p className="font-semibold text-cuero-900">{testimonio.nombre}</p>
                <p className="text-xs text-tinta-500">{testimonio.cargo}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────── CTA ─────────────────────────── */}
      <section className="textura-cuero bg-cognac-500 py-16 text-crema-50 sm:py-20">
        <Container>
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="max-w-2xl text-3xl text-crema-50 sm:text-4xl">
              ¿Buscas tu próximo socio en cuero?
            </h2>
            <p className="max-w-xl text-crema-50/85">
              Escríbenos, cuéntanos qué necesitas y te enviamos catálogo mayorista y
              muestras en menos de 24 horas.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                como="a"
                href={enlaceWhatsapp(mensajeConsultaGeneral())}
                variante="oro"
                tamano="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconoWhatsapp className="h-5 w-5" />
                Hablar por WhatsApp
              </Button>
              <Button como="ruta" href="/contacto" variante="claro" tamano="lg">
                Ir al formulario
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

/* Iconos por categoría */
const categoriaIcono = {
  carteras: 'cartera',
  cinturones: 'cinturon',
  billeteras: 'billetera',
  mochilas: 'mochila',
  accesorios: 'regalo',
}

/* Iconos de garantía */
const garantiaIcono = {
  hoja: 'hoja',
  mano: 'artesania',
  escudo: 'escudo',
  camion: 'camion',
}

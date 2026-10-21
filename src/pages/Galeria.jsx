import { proceso } from '../data/empresa.js'
import { recurso } from '../utils/recursos.js'
import Section from '../components/ui/Section.jsx'
import SectionTitle from '../components/ui/SectionTitle.jsx'
import Button from '../components/ui/Button.jsx'

/** Galería del taller y del proceso de fabricación. */
export default function Galeria() {
  const imagenes = [
    {
      src: recurso('galeria/seleccion.svg'),
      titulo: 'Selección de pieles',
      categoria: 'Taller',
    },
    {
      src: recurso('galeria/curtido.svg'),
      titulo: 'Tinas de curtido vegetal',
      categoria: 'Proceso',
    },
    {
      src: recurso('galeria/corte.svg'),
      titulo: 'Corte y patronaje',
      categoria: 'Proceso',
    },
    { src: recurso('galeria/cosido.svg'), titulo: 'Costura a mano', categoria: 'Taller' },
    {
      src: recurso('galeria/acabado.svg'),
      titulo: 'Sellado y acabado de bordes',
      categoria: 'Proceso',
    },
    {
      src: recurso('galeria/calidad.svg'),
      titulo: 'Control de calidad',
      categoria: 'Calidad',
    },
    {
      src: recurso('galeria/empaque.svg'),
      titulo: 'Empaque y despacho',
      categoria: 'Logística',
    },
    {
      src: recurso('galeria/tienda.svg'),
      titulo: 'Showroom en Lima',
      categoria: 'Showroom',
    },
  ]

  return (
    <>
      <section className="textura-cuero bg-cuero-900 py-16 text-crema-100 sm:py-20">
        <div className="contenedor">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-oro-500">
            Galería
          </p>
          <h1 className="mt-4 text-4xl text-crema-50 sm:text-5xl">
            El taller, paso a paso
          </h1>
          <p className="mt-4 max-w-2xl text-crema-200/80">
            Imágenes de nuestro proceso real: desde la selección de la piel hasta el
            despacho del pedido.
          </p>
        </div>
      </section>

      <Section>
        <SectionTitle eyebrow="El proceso" titulo="Seis etapas, ninguna improvisada" />

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {imagenes.map((imagen) => (
            <figure
              key={imagen.titulo}
              className="tarjeta-cuero break-inside-avoid overflow-hidden rounded-cuero border border-crema-200 bg-white shadow-suave"
            >
              <div className="marco-imagen aspect-[4/3] overflow-hidden">
                <img
                  src={imagen.src}
                  alt={imagen.titulo}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-3 px-5 py-4">
                <span className="text-sm font-semibold text-cuero-900">
                  {imagen.titulo}
                </span>
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-oro-500">
                  {imagen.categoria}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section fondo="blanco">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Visitas"
              titulo="Visita el taller de Mazzelli"
              descripcion="Recibimos semanalmente con cita previa para que veas el proceso completo en vivo."
              centrado={false}
            />
            <Button como="ruta" href="/contacto" variante="primario" className="mt-8">
              Reservar una visita
            </Button>
          </div>

          <ol className="grid gap-3 sm:grid-cols-2">
            {proceso.map((item) => (
              <li
                key={item.paso}
                className="flex items-start gap-3 rounded-cuero border border-crema-200 bg-crema-50 p-4"
              >
                <span className="font-display text-xl font-bold text-oro-500">
                  {item.paso}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-cuero-900">
                    {item.titulo}
                  </span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-tinta-500">
                    {item.descripcion}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Section>
    </>
  )
}

import { servicios } from '../data/servicios.js'
import { empresa } from '../data/empresa.js'
import Section from '../components/ui/Section.jsx'
import SectionTitle from '../components/ui/SectionTitle.jsx'
import Button from '../components/ui/Button.jsx'
import { enlaceWhatsapp, mensajeConsultaGeneral } from '../services/whatsapp.js'
import IconoWhatsapp from '../components/ui/IconoWhatsapp.jsx'

/** Página de servicios B2B: producción a medida, mayorista, corporativos. */
export default function Servicios() {
  return (
    <>
      <section className="textura-cuero bg-cuero-900 py-16 text-crema-100 sm:py-20">
        <div className="contenedor">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-oro-500">
            Servicios
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl text-crema-50 sm:text-5xl">
            Trabajamos con marcas, tiendas y empresas
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-crema-200/80">
            Si necesitas una línea de cuero con tu marca, produciéndola con material
            peruano y acabado de taller, conversemos.
          </p>
          <Button
            como="a"
            href={enlaceWhatsapp(mensajeConsultaGeneral())}
            variante="oro"
            tamano="lg"
            className="mt-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconoWhatsapp className="h-5 w-5" />
            Solicitar información B2B
          </Button>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {servicios.map((servicio) => (
            <article
              key={servicio.id}
              className="tarjeta-cuero rounded-cuero border border-crema-200 bg-white p-8 sm:p-10"
            >
              <h2 className="text-2xl">{servicio.titulo}</h2>
              <p className="mt-3 leading-relaxed text-tinta-700">
                {servicio.descripcion}
              </p>

              <ul className="mt-6 space-y-2.5 border-t border-crema-200 pt-6">
                {servicio.detalles.map((detalle) => (
                  <li
                    key={detalle}
                    className="flex items-start gap-2.5 text-sm text-cuero-800"
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

      {/* Proceso de contratación */}
      <Section fondo="oscuro">
        <SectionTitle
          eyebrow="Cómo trabajamos"
          titulo="De la primera llamada al despacho"
          descripcion="Un proceso claro, con responsables y plazos definidos en cada etapa."
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              paso: '01',
              titulo: 'Reunión',
              descripcion: 'Entendemos tu producto, público y objetivo comercial.',
            },
            {
              paso: '02',
              titulo: 'Muestrario',
              descripcion: 'Desarrollamos el primer modelo con tu marca en 10 días.',
            },
            {
              paso: '03',
              titulo: 'Propuesta',
              descripcion: 'Cotización con precios por volumen y plan de entrega.',
            },
            {
              paso: '04',
              titulo: 'Producción',
              descripcion: 'Fabricación seriada con control de calidad en cada lote.',
            },
          ].map((item) => (
            <li
              key={item.paso}
              className="rounded-cuero border border-crema-50/10 bg-crema-50/5 p-7"
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

      {/* FAQ */}
      <Section>
        <SectionTitle eyebrow="Preguntas frecuentes" titulo="Lo que más nos preguntan" />

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {[
            {
              pregunta: '¿Cuál es el pedido mínimo?',
              respuesta:
                'Para producción a medida trabajamos desde 50 unidades. Para venta mayorista de catálogo, el mínimo es de 10 unidades por referencia.',
            },
            {
              pregunta: '¿Cuánto demora un pedido mayorista?',
              respuesta:
                'Entre 15 y 25 días hábiles desde la aprobación del muestrario. Para pedidos de temporada recomendamos planificar con 45 días.',
            },
            {
              pregunta: '¿Puedo elegir el color y el logo?',
              respuesta:
                'Sí. Trabajamos con una carta de 14 tintes de curtido vegetal y grabamos tu logo en repoussado, láser o serigrafía sobre lino.',
            },
            {
              pregunta: '¿Emiten factura electrónica?',
              respuesta:
                'Sí, emitimos factura electrónica y nota de crédito. Trabajamos con boleta y factura para personas jurídicas.',
            },
          ].map((item) => (
            <details
              key={item.pregunta}
              className="group rounded-cuero border border-crema-200 bg-white px-6 py-5 shadow-suave"
            >
              <summary className="cursor-pointer list-none pr-8 font-semibold text-cuero-900 marker:hidden">
                <span className="mr-3 text-oro-500" aria-hidden="true">
                  +
                </span>
                {item.pregunta}
              </summary>
              <p className="mt-3 pl-7 leading-relaxed text-tinta-500">{item.respuesta}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="textura-cuero bg-cognac-500 py-16 text-crema-50">
        <div className="contenedor flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-3xl text-crema-50 sm:text-4xl">
            ¿Empezamos con un muestrario?
          </h2>
          <p className="max-w-xl text-crema-50/85">
            Escríbenos a {empresa.emailVentas} o por WhatsApp. Respondemos en menos de 24
            horas hábiles.
          </p>
          <Button como="ruta" href="/contacto" variante="oro" tamano="lg">
            Ir al formulario
          </Button>
        </div>
      </section>
    </>
  )
}

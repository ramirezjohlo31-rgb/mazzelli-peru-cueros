import { empresa, proceso } from '../data/empresa.js'
import Section from '../components/ui/Section.jsx'
import SectionTitle from '../components/ui/SectionTitle.jsx'
import Button from '../components/ui/Button.jsx'
import Icon from '../components/ui/Icon.jsx'

/** Página institucional: historia, misión, visión, valores y equipo. */
export default function Nosotros() {
  return (
    <>
      {/* Encabezado */}
      <section className="textura-cuero bg-cuero-900 py-16 text-crema-100 sm:py-20">
        <div className="contenedor">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-oro-500">
            Sobre nosotros
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl text-crema-50 sm:text-5xl">
            Dieciséis años curtiendo cuero en el Perú
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-crema-200/80">
            Mazzelli nació en {empresa.anioFundacion} como un taller de dos personas en un
            local de Surquillo. Hoy somos una empresa familiar que trabaja con 28
            artesanos de la costa y de la sierra.
          </p>
        </div>
      </section>

      {/* Historia */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="marco-imagen aspect-[4/3] overflow-hidden rounded-cuero border border-crema-200">
            <img
              src="/nosotros.svg"
              alt="Taller de curtido de Mazzelli"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <SectionTitle
              eyebrow="Nuestra historia"
              titulo="Del curtido artesanal a la exportación"
              descripcion="Empezamos con un par de tinas y una idea: que el cuero peruano podía competir en calidad con cualquier atelier europeo."
              centrado={false}
            />

            <div className="mt-8 space-y-4 leading-relaxed text-tinta-700">
              <p>
                El primer cliente de Mazzelli fue un taller de carteras de Lima antiguo
                que nos confió un lote pequeño de piezas para probar. Hoy atendemos a
                boutiques en once regiones del Perú y enviamos a Chile, Colombia y España.
              </p>
              <p>
                Seguimos trabajando con el mismo sistema: piel seleccionada a mano,
                curtido vegetal en tinas de tannins, corte con patrones propios y costura
                de hilo encerado. Cuando una pieza no cumple nuestro estándar, no sale del
                taller.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-3 gap-4 border-t border-crema-200 pt-8">
              {[
                { valor: '2009', etiqueta: 'Fundación' },
                { valor: '28', etiqueta: 'Artesanos' },
                { valor: '11', etiqueta: 'Regiones' },
              ].map((dato) => (
                <div key={dato.etiqueta}>
                  <p className="font-display text-3xl font-bold text-cuero-900">
                    {dato.valor}
                  </p>
                  <p className="mt-1 text-xs text-tinta-500">{dato.etiqueta}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Misión y visión */}
      <Section fondo="blanco">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-cuero border border-crema-200 bg-crema-50 p-8 sm:p-10">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-oro-300/30 text-cognac-600">
              <Icon nombre="artesania" className="h-7 w-7" />
            </span>
            <h2 className="mt-4 text-2xl">Nuestra misión</h2>
            <p className="mt-3 leading-relaxed text-tinta-700">
              elaborar piezas de cuero de calidad que representen el trabajo del artesano
              peruano, con una operación sostenible que cuida a quienes hacen posible cada
              entrega.
            </p>
          </article>

          <article className="rounded-cuero border border-crema-200 bg-crema-50 p-8 sm:p-10">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-oro-300/30 text-cognac-600">
              <Icon nombre="hoja" className="h-7 w-7" />
            </span>
            <h2 className="mt-4 text-2xl">Nuestra visión</h2>
            <p className="mt-3 leading-relaxed text-tinta-700">
              Ser reconocidos en el 2030 como el taller de cuero peruano de referencia en
              curtido vegetal, con presencia directa en seis mercados de la región andina.
            </p>
          </article>
        </div>
      </Section>

      {/* Valores */}
      <Section>
        <SectionTitle
          eyebrow="Nuestros valores"
          titulo="Los principios que no negociamos"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              titulo: 'Calidad sin atajos',
              descripcion:
                'Preferimos decir que no a un pedido antes que entregar una pieza que no nos representa.',
            },
            {
              titulo: 'Cuidado del artesano',
              descripcion:
                'Cada artesano recibe pago justo, seguro de salud y capacitación continua.',
            },
            {
              titulo: 'Sostenibilidad',
              descripcion:
                'Curtido vegetal, tintes naturales, empaque de papel kraft y cero plásticos de un solo uso.',
            },
            {
              titulo: 'Transparencia',
              descripcion:
                'Publicamos el origen de cada piel, el costo del taller y el plazo real de cada pedido.',
            },
          ].map((valor) => (
            <div
              key={valor.titulo}
              className="tarjeta-cuero rounded-cuero border border-crema-200 bg-white p-7"
            >
              <h3 className="text-lg">{valor.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-tinta-500">
                {valor.descripcion}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Proceso */}
      <Section fondo="oscuro">
        <SectionTitle
          eyebrow="Proceso artesanal"
          titulo="De la piel al producto terminado"
          descripcion="Seis etapas controladas, documentadas y firmadas por el responsable de taller."
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {proceso.map((item) => (
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

      {/* CTA */}
      <section className="textura-cuero bg-cognac-500 py-16 text-crema-50">
        <div className="contenedor flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-3xl text-crema-50 sm:text-4xl">
            ¿Quieres conocer el taller?
          </h2>
          <p className="max-w-xl text-crema-50/85">
            Reciben visitas al taller los viernes con cita previa. Te mostramos el proceso
            completo, de la tina al empaque.
          </p>
          <Button como="a" href="/contacto" variante="oro" tamano="lg">
            Agendar una visita
          </Button>
        </div>
      </section>
    </>
  )
}

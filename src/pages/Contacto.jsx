import { empresa } from '../data/empresa.js'
import ContactForm from '../features/contacto/ContactForm.jsx'
import Section from '../components/ui/Section.jsx'
import SectionTitle from '../components/ui/SectionTitle.jsx'
import Icon from '../components/ui/Icon.jsx'

/** Página de contacto: formulario + datos de la empresa. */
export default function Contacto() {
  const datosContacto = [
    {
      titulo: 'Dirección del taller',
      contenido: empresa.direccion,
      icono: 'ubicacion',
      enlace: 'https://maps.google.com/?q=' + encodeURIComponent(empresa.direccion),
    },
    {
      titulo: 'Teléfono / WhatsApp',
      contenido: empresa.telefono,
      icono: 'telefono',
      enlace: `tel:${empresa.telefono.replace(/\s/g, '')}`,
    },
    {
      titulo: 'Correo electrónico',
      contenido: empresa.email,
      icono: 'correo',
      enlace: `mailto:${empresa.email}`,
    },
    {
      titulo: 'Horario de atención',
      contenido: empresa.horario,
      icono: 'reloj',
      enlace: null,
    },
  ]

  return (
    <>
      <section className="textura-cuero bg-cuero-900 py-16 text-crema-100 sm:py-20">
        <div className="contenedor">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-oro-500">
            Contacto
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl text-crema-50 sm:text-5xl">
            Hablemos de tu próximo pedido
          </h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-crema-200/80">
            Escríbenos por el medio que prefieras. Respondemos todas las consultas en
            menos de 24 horas hábiles.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <ContactForm />

          <aside className="space-y-6">
            <SectionTitle eyebrow="Datos" titulo="Encuéntranos" centrado={false} />

            <ul className="space-y-4">
              {datosContacto.map((dato) => (
                <li
                  key={dato.titulo}
                  className="flex items-start gap-4 rounded-cuero border border-crema-200 bg-white p-5 shadow-suave"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-crema-100 text-cognac-600">
                    <Icon nombre={dato.icono} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.15em] text-oro-500">
                      {dato.titulo}
                    </span>
                    {dato.enlace ? (
                      <a
                        href={dato.enlace}
                        target={dato.enlace.startsWith('http') ? '_blank' : undefined}
                        rel={
                          dato.enlace.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                        className="mt-1 block text-sm leading-relaxed text-cuero-900 underline-offset-4 hover:text-cognac-600 hover:underline"
                      >
                        {dato.contenido}
                      </a>
                    ) : (
                      <span className="mt-1 block text-sm leading-relaxed text-cuero-900">
                        {dato.contenido}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            {/* RUC y razón social */}
            <div className="rounded-cuero border border-crema-200 bg-crema-100/60 p-6">
              <h2 className="text-lg">Datos fiscales</h2>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-tinta-500">Razón social</dt>
                  <dd className="text-right font-medium text-cuero-900">
                    {empresa.razonSocial}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-tinta-500">RUC</dt>
                  <dd className="text-right font-mono text-xs font-medium text-cuero-900">
                    {empresa.ruc}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-tinta-500">Región</dt>
                  <dd className="text-right font-medium text-cuero-900">
                    {empresa.region}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Redes */}
            <div className="rounded-cuero border border-crema-200 bg-white p-6 shadow-suave">
              <h2 className="text-lg">Síguenos</h2>
              <ul className="mt-4 flex flex-wrap gap-3">
                {empresa.redes.map((red) => (
                  <li key={red.nombre}>
                    <a
                      href={red.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-crema-200 px-4 py-2 text-sm font-medium text-cuero-800 transition-colors hover:border-oro-500 hover:bg-crema-50"
                    >
                      {red.nombre}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  )
}

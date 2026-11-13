import { Award, Factory, Scissors, ShieldCheck } from 'lucide-react'
import { COMPANY } from '../data/company'

const POINTS = [
  {
    icon: Factory,
    title: 'Fracción y confección',
    text: 'Desarrollamos procesos de fracción, corte y confección orientados a obtener piezas funcionales y duraderas.',
  },
  {
    icon: Scissors,
    title: 'Marroquinería fina',
    text: 'Cuidamos terminados, costuras y detalles en artículos como carteras, calzado, mochilas, correas y accesorios.',
  },
  {
    icon: ShieldCheck,
    title: 'Cuero legítimo y afines',
    text: 'Trabajamos con cuero 100% legítimo y combinaciones textil-cuero según el diseño, uso y preferencia del cliente.',
  },
  {
    icon: Award,
    title: 'Atención personalizada',
    text: 'Acompañamos a damas y caballeros en la selección de productos, acabados y cotizaciones según su necesidad.',
  },
]

export default function About() {
  return (
    <section id="empresa" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,1fr] lg:items-start">
          <div className="surface rounded-2xl p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-vino/70">Sobre la empresa</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-vino">
              {COMPANY.legalName}
            </h2>
            <p className="mt-4 leading-relaxed text-vino/90">
              Somos una empresa peruana dedicada a la <strong>fracción, confección y marroquinería fina</strong> de artículos
              en cuero y afines. Nuestra propuesta combina técnica, selección de materiales y acabados cuidadosos para ofrecer
              productos confiables y elegantes.
            </p>
            <p className="mt-3 leading-relaxed text-vino/90">
              Elaboramos <strong>carteras, mochilas, calzado, correas, billeteras, morrales y monederos</strong> para damas y
              caballeros, tanto en <strong>cuero 100% legítimo</strong> como en combinaciones <strong>textil-cuero</strong>,
              adaptándonos a distintos estilos y necesidades.
            </p>
            <p className="mt-3 leading-relaxed text-vino/90">
              En Marzzelli Perú Cueros valoramos el trabajo bien hecho: desde el corte y la preparación del material hasta la
              confección final, buscamos que cada pieza transmita calidad y representación artesanal peruana.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {POINTS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="surface rounded-xl p-5">
                <div className="inline-flex rounded-lg bg-accion/10 p-2 text-accion">
                  <Icon size={20} />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-vino">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-vino/85">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

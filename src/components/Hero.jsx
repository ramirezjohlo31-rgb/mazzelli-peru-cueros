import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

const SLIDES = [
  {
    title: 'Confección artesanal en cuero legítimo',
    text: 'Cada pieza refleja la experiencia de INDUSTRIAS MARZZELLI PERÚ CUEROS E.I.R.L. en marroquinería fina para damas y caballeros.',
    accent: 'Cuero 100% legítimo',
    bg: 'from-plomo-dark via-plomo to-[#3d2a2d]',
  },
  {
    title: 'Fracción y corte con precisión',
    text: 'Seleccionamos, fraccionamos y trabajamos el cuero con procesos cuidadosos que garantizan calidad, resistencia y acabados superiores.',
    accent: 'Proceso especializado',
    bg: 'from-[#2f3136] via-plomo to-plomo-light',
  },
  {
    title: 'Diseños en cuero y textil-cuero',
    text: 'Carteras, mochilas, calzado, correas, billeteras, morrales y monederos con combinaciones modernas y funcionales.',
    accent: 'Colección versátil',
    bg: 'from-plomo via-[#3b3032] to-plomo-dark',
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 5500)
    return () => clearInterval(id)
  }, [])

  const slide = SLIDES[index]

  function prev() {
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)
  }
  function next() {
    setIndex((i) => (i + 1) % SLIDES.length)
  }

  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className={`bg-gradient-to-br ${slide.bg}`}>
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
          <div key={index} className="animate-fade-up">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-vino/30 bg-plomo-dark/60 px-3 py-1 text-sm text-vino">
              <Sparkles size={16} className="text-vino-light" />
              {slide.accent}
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight text-vino sm:text-5xl">
              {slide.title}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-vino/90 sm:text-lg">
              {slide.text}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#catalogo" className="btn-primary">
                Ver catálogo
              </a>
              <a href="#empresa" className="btn-secondary">
                Sobre la empresa
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="surface rounded-2xl p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-vino/70">
                Marroquinería peruana
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-vino">
                Calidad en cada detalle
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-vino/90">
                <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accion" />Fracción y confección de artículos en cuero y afines.</li>
                <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accion" />Productos para dama y caballero.</li>
                <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accion" />Opciones en cuero legítimo y textil-cuero.</li>
                <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accion" />Atención personalizada y cotización directa por WhatsApp.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3">
        <button type="button" onClick={prev} className="rounded-full bg-black/25 p-2 text-vino hover:bg-black/40" aria-label="Anterior">
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${i === index ? 'w-7 bg-accion' : 'w-2.5 bg-white/45 hover:bg-white/70'}`}
              aria-label={`Ir al slide ${i + 1}`}
            />
          ))}
        </div>
        <button type="button" onClick={next} className="rounded-full bg-black/25 p-2 text-vino hover:bg-black/40" aria-label="Siguiente">
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  )
}

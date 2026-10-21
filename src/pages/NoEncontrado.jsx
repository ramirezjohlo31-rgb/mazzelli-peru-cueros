import Button from '../components/ui/Button.jsx'
import Section from '../components/ui/Section.jsx'

/** Página 404 para rutas no registradas. */
export default function NoEncontrado() {
  return (
    <Section>
      <div className="mx-auto max-w-lg text-center">
        <p className="font-display text-7xl text-oro-500">404</p>
        <h1 className="mt-4 text-3xl sm:text-4xl">Página no encontrada</h1>
        <p className="mt-4 leading-relaxed text-tinta-500">
          La página que buscas no existe o fue movida. Revisa el enlace o vuelve al inicio
          para seguir explorando nuestro catálogo.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button como="a" href="/" variante="primario">
            Ir al inicio
          </Button>
          <Button como="a" href="/productos" variante="secundario">
            Ver productos
          </Button>
        </div>
      </div>
    </Section>
  )
}

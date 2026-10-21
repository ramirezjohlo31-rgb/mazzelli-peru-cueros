/** Contenedor con ancho máximo y padding responsive. */
export default function Container({ children, className = '', as: Elemento = 'div' }) {
  return <Elemento className={`contenedor ${className}`}>{children}</Elemento>
}

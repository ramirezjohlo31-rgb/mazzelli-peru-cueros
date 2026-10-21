/** Tarjeta genérica reutilizable. */
export default function Card({
  children,
  className = '',
  interactiva = false,
  as: Elemento = 'div',
}) {
  return (
    <Elemento
      className={`rounded-cuero border border-crema-200 bg-white shadow-suave ${
        interactiva ? 'tarjeta-cuero' : ''
      } ${className}`}
    >
      {children}
    </Elemento>
  )
}

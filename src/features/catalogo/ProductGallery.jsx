import { useState } from 'react'

/** Galería de imágenes de un producto con miniaturas. */
export default function ProductGallery({ imagenes = [], nombre = '' }) {
  const [indiceActivo, setIndiceActivo] = useState(0)

  if (imagenes.length === 0) return null

  const imagenActual = imagenes[indiceActivo]

  return (
    <div className="flex flex-col gap-4">
      <div className="marco-imagen aspect-[4/3] overflow-hidden rounded-cuero border border-crema-200">
        <img
          src={imagenActual}
          alt={`${nombre} — imagen ${indiceActivo + 1}`}
          width="800"
          height="600"
          className="h-full w-full object-cover"
        />
      </div>

      {imagenes.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {imagenes.map((imagen, indice) => (
            <button
              key={imagen + indice}
              type="button"
              onClick={() => setIndiceActivo(indice)}
              aria-label={`Ver imagen ${indice + 1} de ${nombre}`}
              aria-current={indice === indiceActivo}
              className={`marco-imagen aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                indice === indiceActivo
                  ? 'border-oro-500'
                  : 'border-crema-200 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={imagen}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

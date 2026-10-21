import { useState } from 'react'

import { empresa } from '../../data/empresa.js'
import { enlaceWhatsapp, abrirWhatsapp } from '../../services/whatsapp.js'
import { enlaceCorreo } from '../../services/mailto.js'
import useContactForm from './useContactForm.js'
import { construirCuerpoCorreo, construirMensajeWhatsapp } from './validacion.js'

import Campo from '../../components/ui/Campo.jsx'
import Input from '../../components/ui/Input.jsx'
import Textarea from '../../components/ui/Textarea.jsx'
import Select from '../../components/ui/Select.jsx'
import Button from '../../components/ui/Button.jsx'
import IconoWhatsapp from '../../components/ui/IconoWhatsapp.jsx'

const MOTIVOS = [
  'Consulta general',
  'Cotización de producto',
  'Pedido mayorista',
  'Producción a medida',
  'Corporativos y eventos',
  'Reparación o restauración',
]

/** Formulario de contacto con envío por WhatsApp o correo. */
export default function ContactForm() {
  const { datos, errores, enviado, setEnviado, actualizarCampo, validar, reiniciar } =
    useContactForm()
  const [canal, setCanal] = useState('whatsapp')

  function manejarEnvio(evento) {
    evento.preventDefault()
    setEnviado(false)

    if (!validar()) return

    if (canal === 'whatsapp') {
      abrirWhatsapp(construirMensajeWhatsapp(datos))
    } else {
      window.location.href = enlaceCorreo({
        destinatario: empresa.email,
        asunto: `[${datos.motivo}] Consulta de ${datos.nombre}`,
        cuerpo: construirCuerpoCorreo(datos),
      })
    }

    setEnviado(true)
  }

  return (
    <form
      onSubmit={manejarEnvio}
      noValidate
      className="rounded-cuero border border-crema-200 bg-white p-6 shadow-suave sm:p-8"
    >
      <h2 className="text-2xl">Cuéntanos qué necesitas</h2>
      <p className="mt-2 text-sm text-tinta-500">
        Completa el formulario y te respondemos en menos de 24 horas hábiles.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Campo etiqueta="Nombre completo" id="nombre" error={errores.nombre} requerido>
          <Input
            id="nombre"
            name="nombre"
            type="text"
            autoComplete="name"
            placeholder="Johan Ramírez"
            value={datos.nombre}
            onChange={(e) => actualizarCampo('nombre', e.target.value)}
            error={errores.nombre}
          />
        </Campo>

        <Campo etiqueta="Correo electrónico" id="email" error={errores.email} requerido>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="tucorreo@ejemplo.com"
            value={datos.email}
            onChange={(e) => actualizarCampo('email', e.target.value)}
            error={errores.email}
          />
        </Campo>

        <Campo
          etiqueta="Teléfono / WhatsApp"
          id="telefono"
          error={errores.telefono}
          ayuda="Opcional, solo para contactarte más rápido."
        >
          <Input
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            placeholder="+51 987 654 321"
            value={datos.telefono}
            onChange={(e) => actualizarCampo('telefono', e.target.value)}
            error={errores.telefono}
          />
        </Campo>

        <Campo
          etiqueta="Motivo de la consulta"
          id="motivo"
          error={errores.motivo}
          requerido
        >
          <Select
            id="motivo"
            name="motivo"
            value={datos.motivo}
            onChange={(e) => actualizarCampo('motivo', e.target.value)}
            error={errores.motivo}
          >
            <option value="">Selecciona un motivo…</option>
            {MOTIVOS.map((motivo) => (
              <option key={motivo} value={motivo}>
                {motivo}
              </option>
            ))}
          </Select>
        </Campo>

        <Campo
          etiqueta="Mensaje"
          id="mensaje"
          error={errores.mensaje}
          requerido
          className="sm:col-span-2"
        >
          <Textarea
            id="mensaje"
            name="mensaje"
            placeholder="Cuéntanos qué producto te interesa, la cantidad que necesitas o el tipo de desarrollo que requieres…"
            value={datos.mensaje}
            onChange={(e) => actualizarCampo('mensaje', e.target.value)}
            error={errores.mensaje}
          />
        </Campo>
      </div>

      {/* Canal de envío */}
      <fieldset className="mt-7">
        <legend className="text-sm font-semibold text-cuero-800">
          ¿Por dónde prefieres recibir la respuesta?
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {[
            {
              id: 'whatsapp',
              titulo: 'WhatsApp',
              descripcion: 'Respuesta inmediata en horario de taller.',
            },
            {
              id: 'correo',
              titulo: 'Correo electrónico',
              descripcion: `Escríbenos a ${empresa.email}`,
            },
          ].map((opcion) => (
            <label
              key={opcion.id}
              className={`flex cursor-pointer items-start gap-3 rounded-cuero border p-4 transition-all ${
                canal === opcion.id
                  ? 'border-oro-500 bg-oro-300/10'
                  : 'border-crema-200 hover:border-oro-500/60'
              }`}
            >
              <input
                type="radio"
                name="canal"
                value={opcion.id}
                checked={canal === opcion.id}
                onChange={(e) => setCanal(e.target.value)}
                className="mt-0.5 h-4 w-4 accent-[#8B5E3C]"
              />
              <span>
                <span className="block text-sm font-semibold text-cuero-900">
                  {opcion.titulo}
                </span>
                <span className="block text-xs text-tinta-500">{opcion.descripcion}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {enviado && (
        <div
          role="status"
          className="mt-6 rounded-lg border border-emerald-700/25 bg-emerald-700/10 px-4 py-3 text-sm font-medium text-emerald-800"
        >
          ✓ Listo. Se abrió tu {canal === 'whatsapp' ? 'WhatsApp' : 'cliente de correo'}{' '}
          con el mensaje redactado. Si no se abrió, escríbenos a{' '}
          <a href={`mailto:${empresa.email}`} className="underline">
            {empresa.email}
          </a>
          .
        </div>
      )}

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button type="submit" variante="primario" className="flex-1">
          {canal === 'whatsapp' ? (
            <>
              <IconoWhatsapp className="h-5 w-5" />
              Enviar por WhatsApp
            </>
          ) : (
            'Enviar por correo'
          )}
        </Button>
        <Button type="button" variante="fantasma" onClick={reiniciar}>
          Limpiar formulario
        </Button>
      </div>

      <p className="mt-4 text-xs text-tinta-500">
        Al enviar aceptas que usemos tus datos únicamente para responder tu consulta. No
        compartimos información con terceros.
      </p>

      {/* Enlace alternativo, visible sin JavaScript */}
      <p className="mt-4 text-xs text-tinta-500">
        ¿Prefieres escribirnos directamente?{' '}
        <a
          href={enlaceWhatsapp('Hola Mazzelli, quiero información sobre sus productos.')}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-cognac-600 underline underline-offset-4 hover:text-cuero-900"
        >
          Enviar un WhatsApp
        </a>{' '}
        o{' '}
        <a
          href={`mailto:${empresa.email}`}
          className="font-semibold text-cognac-600 underline underline-offset-4 hover:text-cuero-900"
        >
          escribir un correo
        </a>
        .
      </p>
    </form>
  )
}

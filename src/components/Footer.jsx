import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { COMPANY } from '../data/company'

export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-vino/20 bg-plomo-dark">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <h2 className="font-display text-2xl font-bold text-vino">{COMPANY.commercialName}</h2>
            <p className="mt-2 text-sm text-vino/80">{COMPANY.legalName}</p>
            <p className="mt-3 text-sm leading-relaxed text-vino/85">{COMPANY.description}</p>
            <div className="mt-4 rounded-lg bg-plomo p-3 text-sm text-vino/90 border border-vino/20">
              <span className="font-semibold text-vino">RUC:</span> {COMPANY.ruc}
            </div>
          </div>

          <div className="rounded-xl bg-plomo/60 p-5">
            <h3 className="text-lg font-semibold text-vino">Canales de atención</h3>
            <ul className="mt-4 space-y-3 text-sm text-vino/85">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accion" />
                <span>
                  <span className="block font-medium text-vino">Dirección</span>
                  {COMPANY.address}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-accion" />
                <span>
                  <span className="block font-medium text-vino">Teléfono / WhatsApp</span>
                  {COMPANY.phone}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-accion" />
                <span>
                  <span className="block font-medium text-vino">Correo</span>
                  {COMPANY.email}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-accion" />
                <span>
                  <span className="block font-medium text-vino">Horario</span>
                  {COMPANY.hours}
                </span>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-xl border border-vino/20 bg-plomo/60">
            <div className="border-b border-vino/20 px-4 py-3 text-sm font-semibold text-vino">Ubicación</div>
            <iframe
              title="Ubicación de Marzzelli Perú Cueros"
              src={COMPANY.mapEmbedUrl}
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-vino/20 pt-6 text-sm text-vino/65 sm:flex-row">
          <p>© {new Date().getFullYear()} {COMPANY.legalName}. Todos los derechos reservados.</p>
          <p>Fracción, confección y marroquinería fina en cuero y afines.</p>
        </div>
      </div>
    </footer>
  )
}

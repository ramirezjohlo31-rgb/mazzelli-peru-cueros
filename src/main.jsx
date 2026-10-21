import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './app/App.jsx'
import './styles/index.css'
import './styles/utilities.css'

// El basename se deriva de la base configurada en vite.config.js (sin barra final),
// de modo que el sitio funciona aunque el repositorio cambie de nombre.
const basename = import.meta.env.BASE_URL.replace(/\/+$/, '')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

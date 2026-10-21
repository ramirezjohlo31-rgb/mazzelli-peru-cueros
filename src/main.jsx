import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './app/App.jsx'
import './styles/index.css'
import './styles/utilities.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/mazzelli-peru-cueros">
      <App />
    </BrowserRouter>
  </StrictMode>,
)

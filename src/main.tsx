// Global styles load first so component stylesheets can override the shared
// .card / .section-label base rules at equal specificity.
import './styles/base.css'
import './styles/pill-link.css'
import './styles/list-card.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element #root not found')

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

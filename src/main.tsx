// Tokens and shared surfaces load first so component stylesheets can build on
// them at equal specificity.
import './styles/base.css'
import './styles/layout.css'

import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { App } from './App'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element #root not found')

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Production builds arrive prerendered (see scripts/prerender.mjs), so attach
// to the existing markup. The dev server serves an empty root instead.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}

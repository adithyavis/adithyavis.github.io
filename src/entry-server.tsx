import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { App } from './App'

/**
 * Renders the page to HTML at build time. scripts/prerender.mjs bakes the
 * result into dist/index.html so crawlers and link previews see the content
 * without running JavaScript; main.tsx then hydrates it in the browser.
 */
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

import { useCallback, useEffect, useRef, useState } from 'react'

const RESET_MS = 2000

/** Pre-clipboard-API fallback, for insecure contexts and older browsers. */
function copyViaSelection(text: string) {
  const field = document.createElement('textarea')
  field.value = text
  field.setAttribute('readonly', '')
  field.style.cssText = 'position:fixed;top:0;left:-9999px;opacity:0'
  document.body.appendChild(field)
  field.select()
  try {
    return document.execCommand('copy')
  } catch {
    return false
  } finally {
    document.body.removeChild(field)
  }
}

/**
 * Copies the address and flips the button label for two seconds. If both copy
 * paths fail, the label shows the address instead of claiming success.
 */
export function useCopyEmail(email: string, idleLabel = 'Copy email') {
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle')
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const copy = useCallback(async () => {
    let ok = false
    try {
      await navigator.clipboard.writeText(email)
      ok = true
    } catch {
      ok = copyViaSelection(email)
    }

    setState(ok ? 'copied' : 'failed')
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setState('idle'), RESET_MS)
  }, [email])

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }, [])

  const label = state === 'copied' ? 'Email copied ✓' : state === 'failed' ? email : idleLabel
  return { label, copy }
}

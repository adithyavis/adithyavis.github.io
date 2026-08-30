import { useEffect, useState } from 'react'
import './Toast.css'

/**
 * Keeps the last message mounted while fading out, so the toast slides away
 * instead of vanishing the instant it is dismissed.
 */
export function Toast({ message }: { message: string | null }) {
  const [rendered, setRendered] = useState(message)

  useEffect(() => {
    if (message !== null) setRendered(message)
  }, [message])

  return (
    <div className={message !== null ? 'toast show' : 'toast'} role="status" aria-live="polite">
      {rendered}
    </div>
  )
}

import { useEffect } from 'react'

/**
 * Fades sections in as they scroll into view. Mirrors the design's behaviour,
 * including its two escape hatches: skip entirely when the document cannot
 * scroll, and reveal everything if the observer never fires.
 */
export function useReveal(selector: string) {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(selector))
    if (targets.length === 0) return

    const revealAll = () => targets.forEach((el) => el.classList.add('is-visible'))

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const scrollable = document.documentElement.scrollHeight > window.innerHeight + 40
    if (prefersReducedMotion || !scrollable) {
      revealAll()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    )
    targets.forEach((el) => observer.observe(el))

    // If nothing has appeared shortly after mount, the observer is not going to
    // fire (an embedding host may own the scroll) — show everything instead.
    const safety = window.setTimeout(() => {
      if (targets.every((el) => !el.classList.contains('is-visible'))) revealAll()
    }, 900)

    return () => {
      observer.disconnect()
      clearTimeout(safety)
    }
  }, [selector])
}

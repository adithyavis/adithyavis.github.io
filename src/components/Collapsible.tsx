import type { ReactNode } from 'react'
import './Collapsible.css'

const MASK = 'linear-gradient(180deg, #000 0%, #000 var(--fade-start), rgba(0,0,0,0.35) 88%, rgba(0,0,0,0) 100%)'

type CollapsibleProps = {
  children: ReactNode
  expanded: boolean
  onToggle: () => void
  /** Height of the collapsed clip, e.g. '430px'. */
  collapsedHeight: string
  /** Where the fade begins inside the mask, e.g. '58%'. */
  fadeStart: string
  /** Hidden when the content is short enough that collapsing is pointless. */
  showToggle?: boolean
}

/**
 * Clips its children to a fixed height and fades the cut edge out, with a
 * toggle that pulls in toward the content while collapsed so the button sits
 * over the fade rather than below it.
 */
export function Collapsible({
  children,
  expanded,
  onToggle,
  collapsedHeight,
  fadeStart,
  showToggle = true,
}: CollapsibleProps) {
  const mask = expanded ? 'none' : MASK

  return (
    <div className="collapsible">
      <div
        className="collapsible-clip"
        style={{
          maxHeight: expanded ? '1400px' : collapsedHeight,
          maskImage: mask,
          WebkitMaskImage: mask,
          ['--fade-start' as string]: fadeStart,
        }}
      >
        {children}
      </div>
      {showToggle && (
        <div className="collapsible-toggle-row" style={{ marginTop: expanded ? '20px' : '-22px' }}>
          <button
            type="button"
            className="collapsible-toggle glass glass--button lift lift--bright"
            onClick={onToggle}
            aria-expanded={expanded}
          >
            {expanded ? 'Show less' : 'View more'}
          </button>
        </div>
      )}
    </div>
  )
}

import type { CSSProperties } from 'react'
import './Background.css'

const SWEEPS = [
  { top: '-4%', from: '0deg', duration: '60s', direction: 'normal' },
  { top: '22%', from: '63deg', duration: '70s', direction: 'reverse' },
  { top: '48%', from: '126deg', duration: '80s', direction: 'normal' },
  { top: '74%', from: '189deg', duration: '90s', direction: 'reverse' },
]

export function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg-wash" />
      {SWEEPS.map((sweep) => (
        <div
          key={sweep.top}
          className="bg-sweep"
          style={
            {
              top: sweep.top,
              '--from': sweep.from,
              '--duration': sweep.duration,
              '--direction': sweep.direction,
            } as CSSProperties
          }
        />
      ))}
      <div className="bg-scrim" />
      <div className="bg-grid" />
    </div>
  )
}

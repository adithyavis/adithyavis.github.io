import type { ComponentType } from 'react'
import { apps, type AppIcon } from '../data/apps'
import { SafariIcon, YouTubeIcon } from './icons'
import { SectionHeading } from './SectionHeading'
import './Apps.css'

const CTA_ICONS: Record<AppIcon, ComponentType<{ size?: number }>> = {
  youTube: YouTubeIcon,
  safari: SafariIcon,
}

export function Apps() {
  return (
    <section className="shell section reveal" id="apps">
      <SectionHeading title="Apps" />
      <div className="apps-list">
        {apps.map((app) => (
          <a
            className="app-row glass glass--panel lift"
            key={app.name}
            href={app.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="app-icon" aria-hidden="true">
              {app.icon}
            </span>
            <span className="app-name">{app.name}</span>
            <span className="app-blurb">{app.blurb}</span>
            <span className="app-cta">
              {(() => {
                const Icon = CTA_ICONS[app.ctaIcon]
                return <Icon size={14} />
              })()}
              {app.cta}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

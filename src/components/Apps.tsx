import type { ComponentType } from 'react'
import { apps, type AppIcon } from '../data/apps'
import { GlobeIcon, YouTubeIcon } from './icons'
import { SectionHeading } from './SectionHeading'
import './Apps.css'

const CTA_ICONS: Record<AppIcon, ComponentType<{ size?: number }>> = {
  youTube: YouTubeIcon,
  web: GlobeIcon,
}

export function Apps() {
  return (
    <section className="shell section reveal" id="apps">
      <SectionHeading title="Side projects" />
      <div className="apps-grid">
        {apps.map((app) => {
          const Icon = CTA_ICONS[app.ctaIcon]
          return (
            <a className="tile app-card" key={app.name} href={app.href} target="_blank" rel="noreferrer">
              <span className="app-text">
                <span className="app-name">{app.name}</span>
                <span className="app-blurb">{app.blurb}</span>
              </span>
              <span className="app-cta">
                <Icon size={14} />
                {app.cta}
              </span>
            </a>
          )
        })}
      </div>
    </section>
  )
}

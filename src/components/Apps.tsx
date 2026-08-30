import { apps } from '../data/apps'
import { SectionHeading } from './SectionHeading'
import './Apps.css'

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
            <span className="app-cta">{app.cta}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

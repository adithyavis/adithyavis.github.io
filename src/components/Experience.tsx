import { useState, type ComponentType } from 'react'
import { experience, type LinkIcon } from '../data/experience'
import { AppStoreIcon, GooglePlayIcon, SafariIcon } from './icons'
import { Collapsible } from './Collapsible'
import { SectionHeading } from './SectionHeading'
import './Experience.css'

const LINK_ICONS: Record<LinkIcon, ComponentType<{ size?: number }>> = {
  appStore: AppStoreIcon,
  googlePlay: GooglePlayIcon,
  safari: SafariIcon,
}

export function Experience() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="shell section reveal" id="work">
      <SectionHeading title="Work" />
      <Collapsible
        expanded={expanded}
        onToggle={() => setExpanded((open) => !open)}
        collapsedHeight="430px"
        fadeStart="58%"
      >
        <div className="work-list">
          {experience.map((job) => (
            <article className="work-card glass glass--raised lift" key={job.company}>
              <div className="work-meta">
                <span className="work-period">{job.period}</span>
                <img className="work-logo" src={job.logo} alt={job.company} />
              </div>
              <div className="work-body">
                <div className="work-heading">
                  <h3 className="work-company">{job.company}</h3>
                  <div className="work-role">{job.role}</div>
                </div>
                <ul className="work-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="work-links">
                  {job.links.map((link) => {
                    const Icon = LINK_ICONS[link.icon]
                    return (
                      <a
                        className="work-link lift lift--bright"
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${job.company} on ${link.label}`}
                        title={link.label}
                      >
                        <Icon size={16} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Collapsible>
    </section>
  )
}

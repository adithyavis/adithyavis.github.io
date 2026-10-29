import type { ComponentType } from 'react'
import { experience, type LinkIcon } from '../data/experience'
import { AppStoreIcon, GooglePlayIcon, SafariIcon } from './icons'
import { SectionHeading } from './SectionHeading'
import './Experience.css'

const LINK_ICONS: Record<LinkIcon, ComponentType<{ size?: number }>> = {
  appStore: AppStoreIcon,
  googlePlay: GooglePlayIcon,
  safari: SafariIcon,
}

export function Experience() {
  return (
    <section className="shell section reveal" id="work">
      <SectionHeading title="Work" />
      <div className="tile work-list">
        {experience.map((job) => (
          <article className="work-row" key={job.company}>
            <img className="work-logo" src={job.logo} alt="" />
            <div className="work-body">
              <h3 className="work-company">
                {job.company} <span className="work-role">· {job.role}</span>
              </h3>
              {job.points.length > 0 && <p className="work-summary">{job.points.join(' ')}</p>}
              <div className="work-links">
                {job.links.map((link) => {
                  const Icon = LINK_ICONS[link.icon]
                  return (
                    <a
                      className="work-link"
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${job.company} on ${link.label}`}
                    >
                      <Icon size={14} />
                      {link.label}
                    </a>
                  )
                })}
              </div>
            </div>
            <span className="work-period">{job.period}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

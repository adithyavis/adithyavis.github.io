import { experience } from '../data/experience'
import { HollowDotIcon } from './icons'
import { SectionLabel } from './SectionLabel'
import './Experience.css'

export function Experience() {
  return (
    <>
      <SectionLabel>Experience</SectionLabel>
      <div className="work-grid stagger">
        {experience.map((job) => (
          <div className="card work-card" key={job.company}>
            <div className="work-tag">{job.tag}</div>
            <div className="work-header">
              <img className="work-logo" src={job.logo} alt={job.logoAlt} />
              <div className="work-company">{job.company}</div>
            </div>
            <div className="work-role">{job.role}</div>
            <div className="work-mau-container">
              {job.highlights.map((highlight) => (
                <div className="work-mau" key={highlight.text}>
                  {highlight.live ? <span className="mau-dot" /> : <HollowDotIcon />}
                  {highlight.text}
                </div>
              ))}
            </div>
            <div className="work-links">
              {job.links.map((link) => (
                <a
                  className="pill-link"
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

import { useState } from 'react'
import { experience } from '../data/experience'
import { Collapsible } from './Collapsible'
import { SectionHeading } from './SectionHeading'
import './Experience.css'

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
                  {job.links.map((link) => (
                    <a
                      className="work-link lift lift--bright"
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
            </article>
          ))}
        </div>
      </Collapsible>
    </section>
  )
}

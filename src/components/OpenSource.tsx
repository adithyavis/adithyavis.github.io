import { openSource } from '../data/openSource'
import { GitHubIcon } from './icons'
import { SectionLabel } from './SectionLabel'
import './OpenSource.css'

export function OpenSource() {
  return (
    <>
      <SectionLabel>Open source</SectionLabel>
      <div className="card articles-card stagger">
        {openSource.map((project) => (
          <a
            className="oss-row"
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
          >
            <div className="article-meta">
              <span className="article-tag">{project.tag}</span>
              {project.stars !== undefined && (
                <span className="oss-stars">
                  <span className="star">★</span> {project.stars}
                </span>
              )}
            </div>
            <div className="oss-title">{project.title}</div>
            <div className="oss-desc">{project.description}</div>
            {project.image && (
              <img
                className="oss-icon"
                src={project.image.src}
                width={project.image.width}
                alt={project.image.alt}
              />
            )}
            <span className="oss-github">
              <GitHubIcon size={14} />
            </span>
          </a>
        ))}
      </div>
    </>
  )
}

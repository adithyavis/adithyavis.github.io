import { projects } from '../data/projects'
import { SectionLabel } from './SectionLabel'
import './Projects.css'

export function Projects() {
  return (
    <>
      <SectionLabel>Projects</SectionLabel>
      <div className="projects-grid stagger">
        {projects.map((project) => (
          <div className="card project-card" key={project.name}>
            <div className="project-icon">{project.icon}</div>
            <div className="project-name">{project.name}</div>
            <div className="project-desc">{project.description}</div>
            <div className="project-links">
              {project.links.map((link) => (
                <a
                  className={link.style === 'pill' ? 'pill-link' : 'project-link'}
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

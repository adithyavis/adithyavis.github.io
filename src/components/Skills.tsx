import { skills } from '../data/skills'
import { SectionLabel } from './SectionLabel'
import './Skills.css'

export function Skills() {
  return (
    <>
      <SectionLabel>Technical focus</SectionLabel>
      <div className="skills-row stagger">
        {skills.map((skill) => (
          <span className="skill-chip" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </>
  )
}

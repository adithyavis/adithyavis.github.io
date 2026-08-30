import { skills } from '../data/profile'
import './Focus.css'

export function Focus() {
  return (
    <section className="shell section reveal">
      <div className="eyebrow focus-label">Technical focus</div>
      <div className="focus-chips">
        {skills.map((skill) => (
          <span className="focus-chip glass" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

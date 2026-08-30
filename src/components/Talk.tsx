import { talks } from '../data/talks'
import { SectionLabel } from './SectionLabel'
import './Talk.css'

export function Talks() {
  return (
    <>
      <SectionLabel>{talks.length === 1 ? 'Talk' : 'Talks'}</SectionLabel>
      {talks.map((talk) => (
        <div className="card talk-card stagger" key={talk.title}>
          <div className="talk-year-block">
            <div className="talk-year">{talk.year}</div>
            <div className="talk-conf">{talk.conference}</div>
          </div>
          <div>
            <div className="talk-title">{talk.title}</div>
            <div className="talk-desc">{talk.description}</div>
            <a className="talk-watch" href={talk.href} target="_blank" rel="noreferrer">
              <span className="play-icon">▶</span> Watch on YouTube
            </a>
          </div>
        </div>
      ))}
    </>
  )
}

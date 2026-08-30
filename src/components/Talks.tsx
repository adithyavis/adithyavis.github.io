import { talks } from '../data/talks'
import { YouTubeIcon } from './icons'
import { SectionHeading } from './SectionHeading'
import './Talks.css'

export function Talks() {
  return (
    <section className="shell section reveal" id="talks">
      <SectionHeading title="Talks" />
      {talks.map((talk) => (
        <a
          className="talk-card glass glass--violet lift lift--violet"
          key={talk.title}
          href={talk.href}
          target="_blank"
          rel="noreferrer"
        >
          <span className="talk-meta">
            <span className="talk-year">{talk.year}</span>
            <span className="talk-conf">{talk.conference}</span>
          </span>
          <span className="talk-body">
            <span className="talk-title">{talk.title}</span>
            <span className="talk-blurb">{talk.blurb}</span>
            <span className="talk-cta">
              <YouTubeIcon size={15} />
              Watch on YouTube
            </span>
          </span>
        </a>
      ))}
    </section>
  )
}

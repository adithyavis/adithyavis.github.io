import { highlights, profile } from '../data/profile'
import { repos, starTotalLabel } from '../data/openSource'
import { talks } from '../data/talks'
import { writing } from '../data/writing'
import { useCopyEmail } from '../hooks/useCopyEmail'
import { GitHubIcon, TwitterIcon } from './icons'
import { YouTubePreview } from './YouTubePreview'
import './Hero.css'

/** How many posts the "Latest writing" tile previews. */
const LATEST_POSTS = 3

const SOCIALS = [
  { label: 'GitHub', href: profile.github, Icon: GitHubIcon },
  { label: 'X', href: profile.twitter, Icon: TwitterIcon },
]

type HeroProps = { stars: Record<string, number> }

export function Hero({ stars }: HeroProps) {
  const { label, copy } = useCopyEmail(profile.email)
  const { current } = highlights

  return (
    <section className="shell hero" id="top">
      <div className="bento">
        <div className="tile bento-intro">
          <div className="hero-status">
            <span className="hero-status-dot" aria-hidden="true" />
            {profile.status}
          </div>
          <div>
            <h1 className="hero-title">{profile.headline}</h1>
            <p className="hero-intro">{profile.intro}</p>
          </div>
          <div className="hero-actions">
            <button type="button" className="button button--primary" onClick={copy}>
              {label}
            </button>
            {SOCIALS.map(({ label: social, href, Icon }) => (
              <a className="button" key={social} href={href} target="_blank" rel="noreferrer">
                <Icon size={16} />
                {social}
              </a>
            ))}
          </div>
        </div>

        <a className="tile bento-stat" href={current.href} target="_blank" rel="noreferrer">
          <span className="stat-head">
            <img className="stat-logo" src={current.logo} alt={current.company} />
            <span className="eyebrow">Now · {current.company}</span>
          </span>
          <span>
            <span className="stat-value">{current.value}</span>
            <span className="stat-label">{current.label}</span>
            <span className="stat-note">{current.note}</span>
          </span>
        </a>

        <a className="tile bento-stat" href={profile.github} target="_blank" rel="noreferrer">
          <span className="eyebrow">Open source</span>
          <span>
            <span className="stat-value">{highlights.npmDownloads}</span>
            <span className="stat-label">total npm downloads</span>
            <span className="stat-note">
              <strong className="stat-note-value">{starTotalLabel(stars)}</strong>
              GitHub stars across {repos.length} repos
            </span>
          </span>
        </a>

        <div className="tile bento-list">
          <div className="eyebrow">Talks</div>
          <div className="talks">
            {talks.map((talk) => (
              <div className="talk" key={talk.title}>
                <YouTubePreview id={talk.video.id} start={talk.video.start} title={talk.title} />
                <a className="talk-title" href={talk.href} target="_blank" rel="noreferrer">
                  {talk.title}
                </a>
                <span className="talk-meta">
                  {talk.year} · {talk.conference}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="tile bento-list">
          <div className="eyebrow bento-list-head">
            Latest writing
            <a className="bento-list-more" href="#writing">
              All {writing.length} ↓
            </a>
          </div>
          {writing.slice(0, LATEST_POSTS).map((post) => (
            <a className="post" key={post.href} href={post.href} target="_blank" rel="noreferrer">
              <span className="post-title">{post.title}</span>
              <span className="post-date">{post.date}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

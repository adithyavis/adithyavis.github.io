import { profile } from '../data/profile'
import { GitHubIcon, TwitterIcon } from './icons'
import './Hero.css'

const SOCIALS = [
  { label: 'GitHub', href: profile.github, Icon: GitHubIcon },
  { label: 'Twitter', href: profile.twitter, Icon: TwitterIcon },
]

export function Hero() {
  return (
    <section className="shell hero" id="top">
      <div className="hero-inner">
        <h1 className="hero-title">
          Software that feels <span className="serif-accent">inevitable</span>.
        </h1>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-socials">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              className="hero-social glass lift"
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

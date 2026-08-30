import { profile } from '../data/profile'
import { socialIcons } from './icons'
import './Hero.css'

export function Hero() {
  return (
    <div className="card card-white hero stagger">
      <div>
        <div className="hero-eyebrow">{profile.eyebrow}</div>
        <h1 className="hero-name">
          {profile.firstName}
          <br />
          <em>{profile.lastName}</em>
        </h1>
        {/* Kept in the component rather than the data file: the sentence carries inline emphasis. */}
        <p className="hero-desc">
          I build delightful apps — both web and mobile. Obsessed with the craft of shipping
          things that feel <em>right</em>.
        </p>
        <div className="hero-links">
          {profile.socials.map((social) => {
            const Icon = socialIcons[social.icon]
            return (
              <a
                key={social.label}
                className="hero-link"
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                <Icon size={13} />
                {social.label}
              </a>
            )
          })}
        </div>
      </div>
      <div className="hero-badge">
        <div className="badge-num">{profile.badge.number}</div>
        <div className="badge-label">{profile.badge.label}</div>
        <div className="badge-sub">{profile.badge.sub}</div>
      </div>
    </div>
  )
}

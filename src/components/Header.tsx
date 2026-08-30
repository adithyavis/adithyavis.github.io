import { nav, profile } from '../data/profile'
import './Header.css'

export function Header() {
  return (
    <header className="header">
      <div className="header-bar glass glass--nav">
        <a className="header-brand" href="#top">
          <img className="header-mark" src="/assets/favicon.svg" alt="" />
          {profile.name}
        </a>
        <nav className="header-nav">
          {nav.map((item) => (
            <a className="header-link" key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="header-cta" href="#contact">
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  )
}

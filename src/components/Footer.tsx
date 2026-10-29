import { profile } from '../data/profile'
import './Footer.css'

const LINKS = [
  { label: 'GitHub', href: profile.github },
  { label: 'X', href: profile.twitter },
]

export function Footer() {
  return (
    <footer className="shell footer">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span className="footer-links">
        {LINKS.map((link) => (
          <a
            className="footer-link"
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ))}
      </span>
    </footer>
  )
}

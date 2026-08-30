import { profile } from '../data/profile'
import './Footer.css'

const LINKS = [
  { label: 'GitHub', href: profile.github },
  { label: 'Twitter', href: profile.twitter },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-copy">
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
      </div>
    </footer>
  )
}

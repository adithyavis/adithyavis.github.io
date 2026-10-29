import { profile } from '../data/profile'
import './Footer.css'

const LINKS = [
  { label: 'GitHub', href: profile.github },
  { label: 'X', href: profile.twitter },
]

export function Footer() {
  return (
    <footer className="shell footer">
      {/* The year is baked in at build time; the daily rebuild keeps it current,
          so a visitor's clock disagreeing for a few hours is expected. */}
      <span suppressHydrationWarning>
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

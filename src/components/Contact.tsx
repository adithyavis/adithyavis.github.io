import { profile } from '../data/profile'
import { useCopyEmail } from '../hooks/useCopyEmail'
import './Contact.css'

export function Contact() {
  const { label, copy } = useCopyEmail(profile.email)

  return (
    <section className="shell section contact reveal" id="contact">
      <div className="contact-card glass glass--raised">
        <h2 className="contact-heading">
          Let's <span className="serif-accent">work</span> together
        </h2>
        <p className="contact-sub">
          Open to interesting projects, collaborations, and conversations about startups, remote
          work, founding engineering teams, and mobile engineering.
        </p>
        <div className="contact-actions">
          <button type="button" className="contact-copy" onClick={copy}>
            {label}
          </button>
          <a
            className="contact-linkedin"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

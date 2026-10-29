import { profile } from '../data/profile'
import { useCopyEmail } from '../hooks/useCopyEmail'
import './Contact.css'

export function Contact() {
  const { label, copy } = useCopyEmail(profile.email)

  return (
    <section className="shell section reveal" id="contact">
      <div className="contact-card">
        <div className="contact-text">
          <h2 className="contact-heading">Let's build something.</h2>
          <p className="contact-sub">
            Open to interesting projects, collaborations, and conversations about startups, remote
            work, founding engineering teams, and mobile engineering.
          </p>
        </div>
        <button type="button" className="contact-button" onClick={copy}>
          {label}
        </button>
      </div>
    </section>
  )
}

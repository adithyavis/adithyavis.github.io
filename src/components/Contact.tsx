import { contact } from '../data/contact'
import { profile } from '../data/profile'
import { MailIcon } from './icons'
import { SectionLabel } from './SectionLabel'
import './Contact.css'

export function Contact({ onCopied }: { onCopied: (message: string) => void }) {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      onCopied('Email copied to clipboard!')
    } catch {
      onCopied(profile.email)
    }
  }

  return (
    <>
      <SectionLabel>Get in touch</SectionLabel>
      <div className="card contact-card stagger">
        <div className="contact-left">
          <div className="contact-heading">{contact.heading}</div>
          <div className="contact-sub">{contact.sub}</div>
        </div>
        <button className="contact-email" onClick={copyEmail} aria-label="Copy email address">
          <MailIcon size={16} />
        </button>
      </div>
    </>
  )
}

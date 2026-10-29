import { writing } from '../data/writing'
import { SectionHeading } from './SectionHeading'
import './Writing.css'

export function Writing() {
  return (
    <section className="shell section reveal" id="writing">
      <SectionHeading title="Writing" />
      <div className="writing-list">
        {writing.map((post) => (
          <a
            className="writing-row"
            key={post.href}
            href={post.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="writing-date">{post.date}</span>
            <span className="writing-title">{post.title}</span>
            {post.source && <span className="writing-source">{post.source}</span>}
          </a>
        ))}
      </div>
    </section>
  )
}

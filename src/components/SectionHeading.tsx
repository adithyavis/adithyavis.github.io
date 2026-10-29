import type { ReactNode } from 'react'

type SectionHeadingProps = {
  title: string
  subtitle?: string
  /** Controls aligned to the right of the title, such as a filter. */
  children?: ReactNode
}

export function SectionHeading({ title, subtitle, children }: SectionHeadingProps) {
  return (
    <div className="section-head">
      <div>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
      {children}
    </div>
  )
}

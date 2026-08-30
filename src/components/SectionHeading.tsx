type SectionHeadingProps = {
  title: string
  /** Space between the rule and the section body; sections vary. */
  gap?: string
}

export function SectionHeading({ title, gap }: SectionHeadingProps) {
  return (
    <div className="section-head" style={gap ? { ['--section-head-gap' as string]: gap } : undefined}>
      <h2 className="section-title">{title}</h2>
    </div>
  )
}

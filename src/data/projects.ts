export type ProjectLink = {
  label: string
  href: string
  /** `pill` renders the bordered chip; `plain` renders the bare accent link. */
  style: 'pill' | 'plain'
}

export type Project = {
  icon: string
  name: string
  description: string
  links: ProjectLink[]
}

export const projects: Project[] = [
  {
    icon: '🍽',
    name: 'menuIt',
    description: 'A minimal digital restaurant menu website. Completely serverless architecture.',
    links: [{ label: 'Demo ↗', href: 'https://youtu.be/NzhAndimcqQ', style: 'plain' }],
  },
  {
    icon: '📷',
    name: 'Delhi Camera',
    description:
      'A camera that lets you see delhi style, with simulated volumetric smog effects',
    links: [
      { label: 'Web ↗', href: 'https://delhi-camera.vercel.app', style: 'pill' },
      { label: 'GitHub ↗', href: 'https://github.com/adithyavis/delhi-camera', style: 'plain' },
    ],
  },
]

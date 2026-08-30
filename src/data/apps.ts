export type App = {
  icon: string
  name: string
  blurb: string
  cta: string
  href: string
}

export const apps: App[] = [
  {
    icon: '🍽',
    name: 'menuIt',
    blurb: 'A minimal digital restaurant menu website. Completely serverless architecture.',
    cta: 'Watch the demo',
    href: 'https://youtu.be/NzhAndimcqQ',
  },
  {
    icon: '📷',
    name: 'Delhi Camera',
    blurb: 'A camera that lets you see Delhi style, with simulated volumetric smog effects.',
    cta: 'Open the web app',
    href: 'https://delhi-camera.vercel.app',
  },
]

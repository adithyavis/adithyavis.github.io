export type AppIcon = 'youTube' | 'safari'

export type App = {
  name: string
  blurb: string
  cta: string
  ctaIcon: AppIcon
  href: string
}

export const apps: App[] = [
  {
    name: 'menuIt',
    blurb: 'A minimal digital restaurant menu website. Completely serverless architecture.',
    cta: 'Demo',
    ctaIcon: 'youTube',
    href: 'https://youtu.be/NzhAndimcqQ',
  },
  {
    name: 'Delhi Camera',
    blurb: 'A camera that lets you see Delhi style, with simulated volumetric smog effects.',
    cta: 'Open',
    ctaIcon: 'safari',
    href: 'https://delhi-camera.vercel.app',
  },
]

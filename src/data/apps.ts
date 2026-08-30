export type AppIcon = 'youTube' | 'safari'

export type App = {
  icon: string
  name: string
  blurb: string
  cta: string
  ctaIcon: AppIcon
  href: string
}

export const apps: App[] = [
  {
    icon: '🍽',
    name: 'menuIt',
    blurb: 'A minimal digital restaurant menu website. Completely serverless architecture.',
    cta: '',
    ctaIcon: 'youTube',
    href: 'https://youtu.be/NzhAndimcqQ',
  },
  {
    icon: '📷',
    name: 'Delhi Camera',
    blurb: 'A camera that lets you see Delhi style, with simulated volumetric smog effects.',
    cta: '',
    ctaIcon: 'safari',
    href: 'https://delhi-camera.vercel.app',
  },
]

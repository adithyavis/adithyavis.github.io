export type Talk = {
  year: string
  conference: string
  title: string
  blurb: string
  href: string
}

export const talks: Talk[] = [
  {
    year: '2022',
    conference: 'RN Matsuri',
    title: 'Configurable Feature Flags on the Client Side',
    blurb:
      "Session talk at Japan's premier React Native conference, on building a configurable framework for feature flags on mobile clients.",
    href: 'https://www.youtube.com/live/H8meRaHfxaU?t=4853',
  },
]

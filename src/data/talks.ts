export type Talk = {
  year: string
  conference: string
  title: string
  description: string
  href: string
}

export const talks: Talk[] = [
  {
    year: '2022',
    conference: 'RN Matsuri',
    title: 'Configurable Feature Flags on the Client Side',
    description:
      "Session talk at React Native Matsuri — Japan's premier React Native conference — on building a configurable framework for implementing feature flags on mobile clients.",
    href: 'https://www.youtube.com/live/H8meRaHfxaU?t=4853',
  },
]

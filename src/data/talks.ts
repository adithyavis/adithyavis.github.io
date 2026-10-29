export type Talk = {
  year: string
  conference: string
  title: string
  blurb: string
  href: string
  /** YouTube video id, plus the offset in seconds when the talk sits inside a longer stream. */
  video: { id: string; start?: number }
}

export const talks: Talk[] = [
  {
    year: '2026',
    conference: 'React India × Chennai React',
    title: 'Making Smooth Gesture-Driven Animations using React Native',
    blurb:
      'Talk at the React India × Chennai React meetup, on building smooth, gesture-driven animations in React Native.',
    href: 'https://www.youtube.com/live/7dc6tJOG_Yo',
    video: { id: '7dc6tJOG_Yo' },
  },
  {
    year: '2022',
    conference: 'RN Matsuri',
    title: 'Configurable Feature Flags on the Client Side',
    blurb:
      "Session talk at Japan's premier React Native conference, on building a configurable framework for feature flags on mobile clients.",
    href: 'https://www.youtube.com/live/H8meRaHfxaU?t=4853',
    video: { id: 'H8meRaHfxaU', start: 4853 },
  },
]

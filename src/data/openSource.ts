export type Repo = {
  name: string
  href: string
  blurb: string
  /** Empty string renders no star count, matching the design. */
  stars: string
  tags: string[]
  langs: string[]
}

export const repos: Repo[] = [
  {
    name: 'Reanimated Tab View',
    stars: '★ 97',
    href: 'https://adithyavis.github.io/reanimated-tab-view/',
    blurb:
      'A performant tab view for React Native powered by Reanimated. 200K+ monthly downloads at peak.',
    tags: ['React Native', 'Animations'],
    langs: ['TypeScript'],
  },
  {
    name: 'Serverless Expo OTA Server',
    stars: '★ 39',
    href: 'https://github.com/adithyavis/serverless-expo-ota-server',
    blurb: 'Serverless implementation of the Expo OTA server.',
    tags: ['OTA', 'Infra'],
    langs: ['TypeScript'],
  },
  {
    name: 'Awesome Mobile App Animations',
    stars: '★ 39',
    href: 'https://adithyavis.github.io/awesome-mobile-app-animations/',
    blurb: 'A collection of animations from popular apps, rebuilt in React Native.',
    tags: ['React Native', 'Animations'],
    langs: ['TypeScript', 'JavaScript'],
  },
  {
    name: 'Stocks Chart Example',
    stars: '★ 3',
    href: 'https://github.com/adithyavis/stocks-chart-example',
    blurb: 'Stocks chart functionality built with react-native-skia.',
    tags: ['Animations', 'React Native'],
    langs: ['TypeScript'],
  },
  {
    name: 'RN Nitro Screen Brightness',
    stars: '',
    href: 'https://github.com/adithyavis/react-native-nitro-screen-brightness',
    blurb: 'Nitro module for controlling screen brightness.',
    tags: ['Native module', 'React Native'],
    langs: ['Swift', 'Kotlin', 'TypeScript'],
  },
  {
    name: 'GraphQL as BFF',
    stars: '',
    href: 'https://github.com/adithyavis/graphql-bff-example',
    blurb: 'An example of how to use GraphQL as a backend-for-frontend.',
    tags: ['GraphQL', 'Infra'],
    langs: ['TypeScript'],
  },
]

/** Facet values in first-appearance order, matching the design's derivation. */
export const allTags = [...new Set(repos.flatMap((repo) => repo.tags))]
export const allLangs = [...new Set(repos.flatMap((repo) => repo.langs))]

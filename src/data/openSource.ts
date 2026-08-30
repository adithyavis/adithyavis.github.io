import starCounts from './stars.json'

export type Repo = {
  name: string
  href: string
  blurb: string
  repo: string
  tags: string[]
  langs: string[]
}

export const repos: Repo[] = [
  {
    name: 'React Native Canvas Kit',
    repo: 'adithyavis/react-native-canvas-kit',
    href: 'https://github.com/adithyavis/react-native-canvas-kit/',
    blurb:
      'Skia based 2D canvas framework for react-native.',
    tags: ['Mobile'],
    langs: ['TypeScript'],
  },
  {
    name: 'Reanimated Tab View',
    repo: 'adithyavis/reanimated-tab-view',
    href: 'https://adithyavis.github.io/reanimated-tab-view/',
    blurb:
      'A performant tab view for React Native powered by Reanimated. 200K+ monthly downloads at peak.',
    tags: ['Mobile'],
    langs: ['TypeScript'],
  },
  {
    name: 'Awesome Mobile App Animations',
    repo: 'adithyavis/awesome-mobile-app-animations',
    href: 'https://adithyavis.github.io/awesome-mobile-app-animations/',
    blurb: 'A collection of animations from popular apps, rebuilt in React Native.',
    tags: ['Mobile'],
    langs: ['TypeScript', 'JavaScript'],
  },
  {
    name: 'Serverless Expo OTA Server',
    repo: 'adithyavis/serverless-expo-ota-server',
    href: 'https://github.com/adithyavis/serverless-expo-ota-server',
    blurb: 'Serverless implementation of the Expo OTA server.',
    tags: ['Infra'],
    langs: ['TypeScript'],
  },
  {
    name: 'coderaven',
    repo: 'adithyavis/coderaven',
    href: 'https://github.com/adithyavis/coderaven',
    blurb: 'Run git-syncable code reviews on top of claude code locally 🚀.',
    tags: ['DevEx'],
    langs: ['TypeScript'],
  },
  {
    name: 'Stocks Chart Example',
    repo: 'adithyavis/stocks-chart-example',
    href: 'https://github.com/adithyavis/stocks-chart-example',
    blurb: 'Stocks chart functionality built with react-native-skia.',
    tags: ['Mobile'],
    langs: ['TypeScript'],
  },
  {
    name: 'ecrecover-cloudflare',
    repo: 'adithyavis/ecrecover-cloudflare',
    href: 'https://github.com/adithyavis/ecrecover-cloudflare',
    blurb: 'A Cloudflare Worker that runs secp256k1 ecrecover in Rust, built for Sign-In With Ethereum, EIP-712 orders, and transaction senders.',
    tags: ['Infra'],
    langs: ['Rust'],
  },
  {
    name: 'RN Nitro Screen Brightness',
    repo: 'adithyavis/react-native-nitro-screen-brightness',
    href: 'https://github.com/adithyavis/react-native-nitro-screen-brightness',
    blurb: 'Nitro module for controlling screen brightness.',
    tags: ['Mobile'],
    langs: ['Swift', 'Kotlin', 'TypeScript'],
  },
  {
    name: 'GraphQL as BFF',
    repo: 'adithyavis/graphql-bff-example',
    href: 'https://github.com/adithyavis/graphql-bff-example',
    blurb: 'An example of how to use GraphQL as a backend-for-frontend.',
    tags: ['Infra'],
    langs: ['TypeScript'],
  },
]

export const stars: Record<string, number> = starCounts

/** Facet values in first-appearance order, matching the design's derivation. */
export const allTags = [...new Set(repos.flatMap((repo) => repo.tags))]
export const allLangs = [...new Set(repos.flatMap((repo) => repo.langs))]

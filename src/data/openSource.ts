import forkCounts from './forks.json'
import starCounts from './stars.json'

export type Repo = {
  href: string
  blurb: string
  repo: string
  tags: string[]
  langs: string[]
}

export const repos: Repo[] = [
  {
    repo: 'adithyavis/react-native-canvas-kit',
    href: 'https://github.com/adithyavis/react-native-canvas-kit/',
    blurb:
      'Skia based 2D canvas framework for react-native.',
    tags: ['Mobile'],
    langs: ['TypeScript'],
  },
  {
    repo: 'adithyavis/reanimated-tab-view',
    href: 'https://adithyavis.github.io/reanimated-tab-view/',
    blurb:
      'A performant tab view for React Native powered by Reanimated. 200K+ monthly downloads at peak.',
    tags: ['Mobile'],
    langs: ['TypeScript'],
  },
  {
    repo: 'adithyavis/awesome-mobile-app-animations',
    href: 'https://adithyavis.github.io/awesome-mobile-app-animations/',
    blurb: 'A collection of animations from popular apps, rebuilt in React Native.',
    tags: ['Mobile'],
    langs: ['TypeScript', 'JavaScript'],
  },
  {
    repo: 'adithyavis/serverless-expo-ota-server',
    href: 'https://github.com/adithyavis/serverless-expo-ota-server',
    blurb: 'Serverless implementation of the Expo OTA server.',
    tags: ['Infra'],
    langs: ['TypeScript'],
  },
  {
    repo: 'adithyavis/coderaven',
    href: 'https://github.com/adithyavis/coderaven',
    blurb: 'Run git-syncable code reviews on top of claude code locally 🚀.',
    tags: ['DevEx'],
    langs: ['TypeScript'],
  },
  {
    repo: 'adithyavis/stocks-chart-example',
    href: 'https://github.com/adithyavis/stocks-chart-example',
    blurb: 'Stocks chart functionality built with react-native-skia.',
    tags: ['Mobile'],
    langs: ['TypeScript'],
  },
  {
    repo: 'adithyavis/ecrecover-cloudflare',
    href: 'https://github.com/adithyavis/ecrecover-cloudflare',
    blurb: 'A Cloudflare Worker that runs secp256k1 ecrecover in Rust, built for Sign-In With Ethereum, EIP-712 orders, and transaction senders.',
    tags: ['Infra'],
    langs: ['Rust'],
  },
  {
    repo: 'adithyavis/react-native-nitro-screen-brightness',
    href: 'https://github.com/adithyavis/react-native-nitro-screen-brightness',
    blurb: 'Nitro module for controlling screen brightness.',
    tags: ['Mobile'],
    langs: ['Swift', 'Kotlin', 'TypeScript'],
  },
  {
    repo: 'adithyavis/graphql-bff-example',
    href: 'https://github.com/adithyavis/graphql-bff-example',
    blurb: 'An example of how to use GraphQL as a backend-for-frontend.',
    tags: ['Infra'],
    langs: ['TypeScript'],
  },
]

/** Build-time counts, refreshed in CI by scripts/fetch-repo-stats.mjs. */
export const stars: Record<string, number> = starCounts
export const forks: Record<string, number> = forkCounts

/** The bare repository name, shown as the card title the way GitHub does. */
export const repoSlug = (repo: Repo) => repo.repo.split('/')[1]

/** Filter values in first-appearance order. */
export const allTags = [...new Set(repos.flatMap((repo) => repo.tags))]

/**
 * Total stars across the listed repos, rounded down to the nearest ten so the
 * "+" stays true as counts drift between builds.
 */
export function starTotalLabel(counts: Record<string, number>) {
  const total = repos.reduce((sum, repo) => sum + (counts[repo.repo] ?? 0), 0)
  return total < 10 ? String(total) : `${Math.floor(total / 10) * 10}+`
}

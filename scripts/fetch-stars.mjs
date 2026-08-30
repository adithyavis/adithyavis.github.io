// Refreshes src/data/stars.json from the GitHub API.
//
// Runs in CI before the build (see .github/workflows/deploy.yml). The result is
// baked into the bundle, so visitors make no API calls of their own. Nothing is
// committed back to the repository — the checked-in file is only a seed so that
// a local build works offline.
//
// Usage: node scripts/fetch-stars.mjs
// Set GITHUB_TOKEN to lift the rate limit from 60/hour to 5,000/hour.

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const HERE = dirname(fileURLToPath(import.meta.url))
const TARGET = resolve(HERE, '../src/data/stars.json')

const previous = JSON.parse(readFileSync(TARGET, 'utf8'))
const token = process.env.GITHUB_TOKEN

const headers = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  // GitHub rejects API requests without a User-Agent.
  'User-Agent': 'adithyavis.github.io-build',
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
}

async function fetchStars(slug) {
  const response = await fetch(`https://api.github.com/repos/${slug}`, { headers })
  if (!response.ok) throw new Error(`HTTP ${response.status} ${response.statusText}`)
  const body = await response.json()
  if (typeof body.stargazers_count !== 'number') throw new Error('no stargazers_count in response')
  return body.stargazers_count
}

const slugs = Object.keys(previous).sort()
console.log(`Fetching stars for ${slugs.length} repos${token ? ' (authenticated)' : ' (anonymous)'}`)

const results = await Promise.all(
  slugs.map(async (slug) => {
    try {
      return { slug, stars: await fetchStars(slug) }
    } catch (error) {
      // A single failure must not break a deploy — keep the previous count and
      // carry on, so the site ships slightly stale numbers instead of none.
      console.warn(`  ! ${slug}: ${error.message} — keeping ${previous[slug]}`)
      return { slug, stars: previous[slug], failed: true }
    }
  }),
)

const next = Object.fromEntries(results.map(({ slug, stars }) => [slug, stars]))

for (const { slug, stars, failed } of results) {
  if (failed) continue
  const before = previous[slug]
  console.log(`  ${slug}: ${stars}${before !== stars ? ` (was ${before})` : ''}`)
}

writeFileSync(TARGET, `${JSON.stringify(next, null, 2)}\n`)

const changed = results.filter((r) => !r.failed && previous[r.slug] !== r.stars).length
const failed = results.filter((r) => r.failed).length
console.log(`Wrote ${TARGET} — ${changed} changed, ${failed} failed`)

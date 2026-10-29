// Refreshes src/data/stars.json and src/data/forks.json from the GitHub API.
//
// Runs in CI before the build (see .github/workflows/deploy.yml). The result is
// baked into the bundle, so visitors make no API calls of their own. Nothing is
// committed back to the repository — the checked-in files are only a seed so
// that a local build works offline.
//
// Usage: node scripts/fetch-repo-stats.mjs
// Set GITHUB_TOKEN to lift the rate limit from 60/hour to 5,000/hour.

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const HERE = dirname(fileURLToPath(import.meta.url))
const TARGETS = {
  stars: resolve(HERE, '../src/data/stars.json'),
  forks: resolve(HERE, '../src/data/forks.json'),
}

const previous = {
  stars: JSON.parse(readFileSync(TARGETS.stars, 'utf8')),
  forks: JSON.parse(readFileSync(TARGETS.forks, 'utf8')),
}
const token = process.env.GITHUB_TOKEN

const headers = {
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  // GitHub rejects API requests without a User-Agent.
  'User-Agent': 'adithyavis.github.io-build',
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
}

async function fetchStats(slug) {
  const response = await fetch(`https://api.github.com/repos/${slug}`, { headers })
  if (!response.ok) throw new Error(`HTTP ${response.status} ${response.statusText}`)
  const body = await response.json()
  if (typeof body.stargazers_count !== 'number') throw new Error('no stargazers_count in response')
  if (typeof body.forks_count !== 'number') throw new Error('no forks_count in response')
  return { stars: body.stargazers_count, forks: body.forks_count }
}

const slugs = Object.keys(previous.stars).sort()
console.log(`Fetching stats for ${slugs.length} repos${token ? ' (authenticated)' : ' (anonymous)'}`)

const results = await Promise.all(
  slugs.map(async (slug) => {
    try {
      return { slug, ...(await fetchStats(slug)) }
    } catch (error) {
      // A single failure must not break a deploy — keep the previous counts and
      // carry on, so the site ships slightly stale numbers instead of none.
      const stars = previous.stars[slug]
      const forks = previous.forks[slug] ?? 0
      console.warn(`  ! ${slug}: ${error.message} — keeping ★${stars} ⑂${forks}`)
      return { slug, stars, forks, failed: true }
    }
  }),
)

let changed = 0
for (const { slug, stars, forks, failed } of results) {
  if (failed) continue
  const before = { stars: previous.stars[slug], forks: previous.forks[slug] }
  const moved = before.stars !== stars || before.forks !== forks
  if (moved) changed++
  console.log(`  ${slug}: ★${stars} ⑂${forks}${moved ? ` (was ★${before.stars} ⑂${before.forks})` : ''}`)
}

for (const key of ['stars', 'forks']) {
  const next = Object.fromEntries(results.map((result) => [result.slug, result[key]]))
  writeFileSync(TARGETS[key], `${JSON.stringify(next, null, 2)}\n`)
}

const failed = results.filter((r) => r.failed).length
console.log(`Wrote ${TARGETS.stars} and ${TARGETS.forks} — ${changed} changed, ${failed} failed`)

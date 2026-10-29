import { useEffect, useState } from 'react'
import { forks as buildTimeForks, repos, stars as buildTimeStars } from '../data/openSource'

const CACHE_KEY = 'gh-repo-stats-v1'
const MAX_AGE_MS = 6 * 60 * 60 * 1000

type Counts = Record<string, number>
export type RepoStats = { stars: Counts; forks: Counts }

type Cached = RepoStats & { at: number }

function readCache(): Cached | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const parsed: unknown = JSON.parse(raw)
    if (
      typeof parsed !== 'object' ||
      parsed === null ||
      typeof (parsed as Cached).at !== 'number' ||
      typeof (parsed as Cached).stars !== 'object' ||
      typeof (parsed as Cached).forks !== 'object'
    ) {
      return null
    }
    return parsed as Cached
  } catch {
    return null
  }
}

export function useLiveRepoStats(): RepoStats {
  // Starts from the build-time counts, never the cache: the first render must
  // match the prerendered HTML, so the cache is only applied after mount.
  const [live, setLive] = useState<RepoStats | null>(null)

  useEffect(() => {
    const cached = readCache()
    if (cached) setLive(cached)
    if (cached && Date.now() - cached.at < MAX_AGE_MS) return

    let cancelled = false
    const owners = [...new Set(repos.map((repo) => repo.repo.split('/')[0]))]

    Promise.all(
      owners.map(async (owner) => {
        const response = await fetch(
          `https://api.github.com/users/${owner}/repos?per_page=100`,
          { headers: { Accept: 'application/vnd.github+json' } },
        )
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        return (await response.json()) as unknown
      }),
    )
      .then((pages) => {
        if (cancelled) return
        const next: RepoStats = { stars: {}, forks: {} }
        for (const page of pages) {
          if (!Array.isArray(page)) continue
          for (const entry of page) {
            const { full_name: fullName, stargazers_count: starCount, forks_count: forkCount } = entry ?? {}
            if (typeof fullName !== 'string') continue
            if (typeof starCount === 'number') next.stars[fullName] = starCount
            if (typeof forkCount === 'number') next.forks[fullName] = forkCount
          }
        }
        if (Object.keys(next.stars).length === 0) return
        setLive(next)
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), ...next }))
        } catch {
        }
      })
      .catch(() => {
      })

    return () => {
      cancelled = true
    }
  }, [])

  return {
    stars: { ...buildTimeStars, ...live?.stars },
    forks: { ...buildTimeForks, ...live?.forks },
  }
}

import { useEffect, useState } from 'react'
import { repos, stars as buildTimeStars } from '../data/openSource'

const CACHE_KEY = 'gh-stars-v1'
const MAX_AGE_MS = 6 * 60 * 60 * 1000

type Cached = { at: number; stars: Record<string, number> }

function readCache(): Cached | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const parsed: unknown = JSON.parse(raw)
    if (
      typeof parsed !== 'object' ||
      parsed === null ||
      typeof (parsed as Cached).at !== 'number' ||
      typeof (parsed as Cached).stars !== 'object'
    ) {
      return null
    }
    return parsed as Cached
  } catch {
    return null
  }
}

export function useLiveStars(): Record<string, number> {
  const [live, setLive] = useState<Record<string, number>>(() => readCache()?.stars ?? {})

  useEffect(() => {
    const cached = readCache()
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
        const next: Record<string, number> = {}
        for (const page of pages) {
          if (!Array.isArray(page)) continue
          for (const entry of page) {
            const { full_name: fullName, stargazers_count: count } = entry ?? {}
            if (typeof fullName === 'string' && typeof count === 'number') next[fullName] = count
          }
        }
        if (Object.keys(next).length === 0) return
        setLive(next)
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), stars: next }))
        } catch {
        }
      })
      .catch(() => {
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { ...buildTimeStars, ...live }
}

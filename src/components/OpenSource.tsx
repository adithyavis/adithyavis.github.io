import { useState } from 'react'
import { allTags, repoSlug, repos } from '../data/openSource'
import type { RepoStats } from '../hooks/useLiveRepoStats'
import { ForkIcon, RepoIcon, StarIcon } from './icons'
import { SectionHeading } from './SectionHeading'
import './OpenSource.css'

/** GitHub's own language colours (github-linguist), so the dots match the repo pages. */
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Rust: '#dea584',
  Swift: '#f05138',
  Kotlin: '#a97bff',
}

type OpenSourceProps = { stats: RepoStats }

export function OpenSource({ stats }: OpenSourceProps) {
  // null means "All"; every repo carries at least one tag, so a filtered view
  // is never empty. Tags only drive this filter — the cards don't show them.
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const visible = activeTag ? repos.filter((repo) => repo.tags.includes(activeTag)) : repos

  const filters = [
    { label: 'All', value: null },
    ...allTags.map((tag) => ({ label: tag, value: tag })),
  ]

  return (
    <section className="shell section reveal" id="open-source">
      <SectionHeading title="Open source" subtitle={`${repos.length} projects, mostly React Native.`}>
        <div className="oss-filter" role="group" aria-label="Filter projects by tag">
          {filters.map(({ label, value }) => (
            <button
              type="button"
              className="oss-filter-option"
              key={label}
              aria-pressed={activeTag === value}
              onClick={() => setActiveTag(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </SectionHeading>

      <div className="oss-grid">
        {visible.map((repo) => {
          const starCount = stats.stars[repo.repo] ?? 0
          const forkCount = stats.forks[repo.repo] ?? 0
          const language = repo.langs[0]
          return (
            <a className="oss-card" key={repo.repo} href={repo.href} target="_blank" rel="noreferrer">
              <span className="oss-card-head">
                <span className="oss-repo-icon">
                  <RepoIcon size={14} />
                </span>
                <span className="oss-name">{repoSlug(repo)}</span>
                <span className="oss-badge">Public</span>
              </span>
              <span className="oss-blurb">{repo.blurb}</span>
              <span className="oss-meta">
                {language && (
                  <span className="oss-stat">
                    <span
                      className="oss-language-dot"
                      style={{ background: LANGUAGE_COLORS[language] ?? 'var(--text-faint)' }}
                    />
                    {language}
                  </span>
                )}
                {starCount > 0 && (
                  <span className="oss-stat" aria-label={`${starCount} stars`}>
                    <StarIcon size={14} />
                    {starCount}
                  </span>
                )}
                {forkCount > 0 && (
                  <span className="oss-stat" aria-label={`${forkCount} forks`}>
                    <ForkIcon size={14} />
                    {forkCount}
                  </span>
                )}
              </span>
            </a>
          )
        })}
      </div>
    </section>
  )
}

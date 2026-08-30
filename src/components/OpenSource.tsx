import { useCallback, useMemo, useRef, useState } from 'react'
import { allLangs, allTags, repos, stars } from '../data/openSource'
import { useDismissable } from '../hooks/useDismissable'
import { Collapsible } from './Collapsible'
import { SectionHeading } from './SectionHeading'
import './OpenSource.css'

/** Collapsing is only offered once the list outgrows this many rows. */
const COLLAPSE_THRESHOLD = 3

type Facet = 'tag' | 'lang'

/** Repos with no stars yet show nothing, matching the design. */
const starLabel = (slug: string) => {
  const count = stars[slug] ?? 0
  return count > 0 ? `★ ${count}` : ''
}

const toggle = (values: string[], value: string) =>
  values.includes(value) ? values.filter((v) => v !== value) : [...values, value]

export function OpenSource() {
  const [expanded, setExpanded] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false)
  const [activeTags, setActiveTags] = useState<string[]>([])
  const [activeLangs, setActiveLangs] = useState<string[]>([])

  // Dismissal is scoped to the whole control cluster, not just the popover, so
  // that removing a pill while the popover is open does not also close it.
  const controlsRef = useRef<HTMLDivElement>(null)
  const closeFilter = useCallback(() => setFilterOpen(false), [])
  useDismissable(filterOpen, controlsRef, closeFilter)

  const toggleFacet = useCallback((facet: Facet, value: string) => {
    const setValues = facet === 'tag' ? setActiveTags : setActiveLangs
    setValues((values) => toggle(values, value))
  }, [])

  const clearAll = useCallback(() => {
    setActiveTags([])
    setActiveLangs([])
  }, [])

  // A repo matches if it carries any selected tag AND any selected language;
  // an empty facet means "no constraint".
  const visible = useMemo(
    () =>
      repos.filter(
        (repo) =>
          (activeTags.length === 0 || repo.tags.some((t) => activeTags.includes(t))) &&
          (activeLangs.length === 0 || repo.langs.some((l) => activeLangs.includes(l))),
      ),
    [activeTags, activeLangs],
  )

  const selected = useMemo(
    () => [
      ...activeTags.map((value) => ({ facet: 'tag' as const, value })),
      ...activeLangs.map((value) => ({ facet: 'lang' as const, value })),
    ],
    [activeTags, activeLangs],
  )

  const collapsible = visible.length > COLLAPSE_THRESHOLD

  return (
    <section className="shell section reveal" id="open-source">
      <SectionHeading title="Open source" gap="22px" />

      <div className="oss-controls" ref={controlsRef}>
        <button
          type="button"
          className="oss-filter-button glass glass--cyan lift lift--bright"
          onClick={() => setFilterOpen((open) => !open)}
          aria-expanded={filterOpen}
        >
          <span className="oss-filter-glyph" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          {selected.length ? `Filter · ${selected.length}` : 'Filter'}
        </button>

        {selected.map(({ facet, value }) => (
          <button
            type="button"
            className="oss-pill"
            key={`${facet}:${value}`}
            onClick={() => toggleFacet(facet, value)}
            aria-label={`Remove ${value} filter`}
          >
            {value}
            <span className="oss-pill-x" aria-hidden="true">
              ×
            </span>
          </button>
        ))}

        {selected.length > 1 && (
          <button type="button" className="oss-clear-all" onClick={clearAll}>
            Clear all
          </button>
        )}

        {/* Sits below the whole cluster, so wrapped pill rows are never covered. */}
        {filterOpen && (
          <div className="oss-panel glass glass--raised">
            <div className="oss-panel-head">
              <span className="oss-panel-label">Filter by tag</span>
              <span className="oss-panel-actions">
                <button type="button" className="oss-clear" onClick={clearAll}>
                  Clear
                </button>
                <button
                  type="button"
                  className="oss-close"
                  onClick={closeFilter}
                  aria-label="Close filters"
                >
                  ×
                </button>
              </span>
            </div>

            <div className="oss-facet">
              {allTags.map((tag) => (
                <button
                  type="button"
                  className="oss-chip"
                  key={tag}
                  aria-pressed={activeTags.includes(tag)}
                  onClick={() => toggleFacet('tag', tag)}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="oss-panel-rule" />
            <div className="oss-panel-sublabel">Filter by language</div>

            <div className="oss-facet">
              {allLangs.map((lang) => (
                <button
                  type="button"
                  className="oss-chip"
                  key={lang}
                  aria-pressed={activeLangs.includes(lang)}
                  onClick={() => toggleFacet('lang', lang)}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {visible.length === 0 ? (
        <div className="oss-empty">No repositories match that filter.</div>
      ) : (
        <Collapsible
          expanded={expanded || !collapsible}
          onToggle={() => setExpanded((open) => !open)}
          collapsedHeight="290px"
          fadeStart="60%"
          showToggle={collapsible}
        >
          <div className="oss-list">
            {visible.map((repo) => (
              <a
                className="oss-row glass glass--panel lift"
                key={repo.name}
                href={repo.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="oss-name">{repo.name}</span>
                <span className="oss-blurb">{repo.blurb}</span>
                <span className="oss-stars">{starLabel(repo.repo)}</span>
              </a>
            ))}
          </div>
        </Collapsible>
      )}
    </section>
  )
}

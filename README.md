# adithyavis.github.io

Personal site — React + TypeScript, built with Vite, deployed to GitHub Pages by GitHub Actions.

## Local development

```sh
npm install
npm run dev      # dev server with hot reload
npm run build    # typecheck + production build into dist/
npm run preview  # serve the production build locally
```

## Editing content

Content lives in [`src/data/`](src/data/) as plain TypeScript — no JSX. To change what
the site says, edit these and nothing else:

| File | Section |
| --- | --- |
| `profile.ts` | Name, email, hero intro, social links, nav items, technical-focus chips |
| `experience.ts` | Experience cards |
| `openSource.ts` | Open source repos, with the `tags` / `langs` the filter derives its facets from |
| `stars.json` | Star counts — generated, see below; do not hand-edit |
| `apps.ts` | Apps |
| `talks.ts` | Talks |
| `writing.ts` | Writing list |

The open-source filter builds its tag and language chips from the repo entries
themselves, so adding a repo with a new tag adds that facet automatically.

### GitHub star counts

Each repo entry carries a `repo: 'owner/name'` slug.
[`scripts/fetch-stars.mjs`](scripts/fetch-stars.mjs) resolves those slugs against the
GitHub API and writes [`src/data/stars.json`](src/data/stars.json), which the build
inlines — visitors make **no** API calls, and counts render with the first paint.
A repo with zero stars renders no count.

The workflow runs the script on every deploy and on a **daily schedule**, so counts
stay current without a push. It writes into the build workspace only; **nothing is
committed back to the repository.** The checked-in `stars.json` is just a seed so a
local `npm run build` works offline, and it will drift from the live numbers — that is
expected, and no reason to update it by hand.

To refresh it locally (optional):

```sh
node scripts/fetch-stars.mjs           # 60 req/hour unauthenticated
GITHUB_TOKEN=ghp_… node scripts/fetch-stars.mjs   # 5,000 req/hour
```

If the API call fails, the script keeps the previous count for that repo and exits
successfully, so an API blip degrades to slightly stale numbers rather than a failed
deploy. Note that GitHub disables scheduled workflows after 60 days without repository
activity; a push or a manual run re-enables them.

Images go in [`public/assets/`](public/assets/) and are referenced by absolute path
(e.g. `/assets/levelsfyi_logo.webp`).

## Structure

- [`src/styles/`](src/styles/) — `base.css` holds the design tokens and the responsive
  column tracks; `glass.css` holds the frosted-surface recipe every card is built from;
  `layout.css` holds the section shell and scroll-reveal.
- [`src/components/`](src/components/) — one component per section, each with its own
  co-located CSS.
- [`src/hooks/`](src/hooks/) — scroll reveal, clipboard copy, popover dismissal.

## Deployment

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes `dist/` to GitHub Pages.

> **Repository setting required:** Settings → Pages → Build and deployment → Source must
> be **GitHub Actions** (not "Deploy from a branch"). The root `index.html` is now a Vite
> template, not the built page, so branch-based serving would break the site.

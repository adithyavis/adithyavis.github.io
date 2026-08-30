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
| `apps.ts` | Apps |
| `talks.ts` | Talks |
| `writing.ts` | Writing list |

The open-source filter builds its tag and language chips from the repo entries
themselves, so adding a repo with a new tag adds that facet automatically.

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

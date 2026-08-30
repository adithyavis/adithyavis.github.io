export type Article = {
  title: string
  href: string
  date: string
  tag?: string
  featured?: boolean
}

export const articles: Article[] = [
  {
    title: "Levels.fyi's Over-The-Air Mobile Updates",
    href: 'https://www.levels.fyi/blog/over-the-air-updates.html',
    date: 'Jun 4, 2025',
    tag: 'levels.fyi blog',
    featured: true,
  },
  {
    title: 'On Optimizing GraphQL BFFs',
    href: 'https://medium.com/@adithyaviswam/on-optimizing-graphql-bffs-23119191817',
    date: 'Sep 24, 2021',
  },
  {
    title: 'Overcoming browser throttling of setInterval executions',
    href: 'https://medium.com/@adithyaviswam/overcoming-browser-throttling-of-setinterval-executions-45387853a826',
    date: 'Sep 12, 2021',
  },
  {
    title: 'Beware of race conditions with Lifecycle Hooks',
    href: 'https://medium.com/@adithyaviswam/beware-of-race-conditions-with-lifecycle-hooks-c56b995469e2',
    date: 'Sep 4, 2021',
  },
  {
    title: 'Can the context API result in the zombie children issue?',
    href: 'https://medium.com/@adithyaviswam/can-the-context-api-result-in-the-zombie-children-issue-a00d52af8c8',
    date: 'Aug 24, 2021',
  },
  {
    title: 'An unusual use-case for React Portals — Caching components',
    href: 'https://medium.com/@adithyaviswam/an-unusual-use-case-of-react-portals-caching-components-3217e70b66b4',
    date: 'Aug 21, 2021',
  },
]

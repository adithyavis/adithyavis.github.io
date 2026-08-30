export type Post = {
  date: string
  title: string
  source: string
  href: string
}

export const writing: Post[] = [
  {
    date: 'Jun 4, 2025',
    title: "Levels.fyi's Over-The-Air Mobile Updates",
    source: 'levels.fyi blog',
    href: 'https://www.levels.fyi/blog/over-the-air-updates.html',
  },
  {
    date: 'Sep 24, 2021',
    title: 'On Optimizing GraphQL BFFs',
    source: 'Medium',
    href: 'https://medium.com/@adithyaviswam/on-optimizing-graphql-bffs-23119191817',
  },
  {
    date: 'Sep 12, 2021',
    title: 'Overcoming browser throttling of setInterval executions',
    source: 'Medium',
    href: 'https://medium.com/@adithyaviswam/overcoming-browser-throttling-of-setinterval-executions-45387853a826',
  },
  {
    date: 'Sep 4, 2021',
    title: 'Beware of race conditions with Lifecycle Hooks',
    source: 'Medium',
    href: 'https://medium.com/@adithyaviswam/beware-of-race-conditions-with-lifecycle-hooks-c56b995469e2',
  },
  {
    date: 'Aug 24, 2021',
    title: 'Can the Context API result in the zombie children issue?',
    source: 'Medium',
    href: 'https://medium.com/@adithyaviswam/can-the-context-api-result-in-the-zombie-children-issue-a00d52af8c8',
  },
  {
    date: 'Aug 21, 2021',
    title: 'An unusual use-case for React Portals — caching components',
    source: 'Medium',
    href: 'https://medium.com/@adithyaviswam/an-unusual-use-case-of-react-portals-caching-components-3217e70b66b4',
  },
]

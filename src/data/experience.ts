export type Highlight = {
  text: string
  /** A live/pulsing dot marks a currently-running product. */
  live: boolean
}

export type Job = {
  tag: string
  company: string
  logo: string
  logoAlt: string
  role: string
  highlights: Highlight[]
  links: { label: string; href: string }[]
}

export const experience: Job[] = [
  {
    tag: 'Current',
    company: 'levels.fyi',
    logo: '/assets/levelsfyi_logo.webp',
    logoAlt: 'levels.fyi logo',
    role: 'Staff Software Engineer · Founding Engineer',
    highlights: [
      { text: '3M+ monthly active users', live: true },
      { text: '4.8★ on the App Store and the Google Play Store', live: true },
    ],
    links: [
      { label: 'iOS ↗', href: 'https://apps.apple.com/us/app/levels-fyi-salaries-more/id1587020991' },
      { label: 'Android ↗', href: 'https://play.google.com/store/apps/details?id=com.levels.mobile' },
      { label: 'Web ↗', href: 'https://levels.fyi' },
    ],
  },
  {
    tag: 'Previously',
    company: 'menu Japan',
    logo: '/assets/menu_logo.webp',
    logoAlt: 'menu Japan logo',
    role: 'Senior/Lead Software Engineer',
    highlights: [{ text: '1M+ monthly active users', live: false }],
    links: [
      { label: 'iOS ↗', href: 'https://apps.apple.com/jp/app/menu/id1443466646' },
      { label: 'Android ↗', href: 'https://play.google.com/store/apps/details?id=co.tapgo.user' },
    ],
  },
]

export type Job = {
  period: string
  company: string
  logo: string
  role: string
  points: string[]
  links: { label: string; href: string }[]
}

export const experience: Job[] = [
  {
    period: '2024–NOW',
    company: 'levels.fyi',
    logo: '/assets/levelsfyi_logo.webp',
    role: 'Staff Software Engineer · Founding Engineer',
    points: [
      'Built and scaled the mobile apps to 3M+ monthly active users.',
      '4.8★ on the App Store and Google Play.',
    ],
    links: [
      { label: 'iOS', href: 'https://apps.apple.com/us/app/levels-fyi-salaries-more/id1587020991' },
      { label: 'Android', href: 'https://play.google.com/store/apps/details?id=com.levels.mobile' },
      { label: 'Web', href: 'https://levels.fyi' },
    ],
  },
  {
    period: '2022–2024',
    company: 'menu Japan',
    logo: '/assets/menu_logo.webp',
    role: 'Senior / Lead Software Engineer',
    points: ['Led mobile engineering for a food delivery app with 1M+ monthly active users.'],
    links: [
      { label: 'iOS', href: 'https://apps.apple.com/jp/app/menu/id1443466646' },
      { label: 'Android', href: 'https://play.google.com/store/apps/details?id=co.tapgo.user' },
    ],
  },
]

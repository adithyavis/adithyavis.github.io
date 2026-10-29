export type LinkIcon = 'appStore' | 'googlePlay' | 'safari'

export type Job = {
  period: string
  company: string
  logo: string
  role: string
  points: string[]
  links: { label: string; href: string; icon: LinkIcon }[]
}

export const experience: Job[] = [
  {
    period: '2024 — now',
    company: 'levels.fyi',
    logo: '/assets/levelsfyi_logo.webp',
    role: 'Staff Software Engineer · Founding Engineer',
    points: [
      '3M+ MAU. 4.8★ on the App Store and Google Play.',
    ],
    links: [
      { label: 'iOS', icon: 'appStore', href: 'https://apps.apple.com/us/app/levels-fyi-salaries-more/id1587020991' },
      { label: 'Android', icon: 'googlePlay', href: 'https://play.google.com/store/apps/details?id=com.levels.mobile' },
      { label: 'Web', icon: 'safari', href: 'https://levels.fyi' },
    ],
  },
  {
    period: '2022 — 2024',
    company: 'menu Japan',
    logo: '/assets/menu_logo.webp',
    role: 'Senior / Lead Software Engineer',
    points: ['Led engineering for a food delivery app with 1M+ monthly active users.'],
    links: [
      { label: 'iOS', icon: 'appStore', href: 'https://apps.apple.com/jp/app/menu/id1443466646' },
      { label: 'Android', icon: 'googlePlay', href: 'https://play.google.com/store/apps/details?id=co.tapgo.user' },
    ],
  },
  {
    period: '2022 — 2024',
    company: 'makro pro',
    logo: '/assets/makro-pro-logo.svg',
    role: 'Freelance Software Engineer',
    points: ['Biggest B2B ecommerce app in Thailand.'],
    links: [
      { label: 'Web', icon: 'safari', href: 'https://www.makro.pro/en' },
    ]
  },
  {
    period: '2019 — 2022',
    company: 'Konica Minolta',
    logo: '/assets/konica-minolta-logo.png',
    role: 'Senior Software Engineer',
    points: ['Founding engineer, tomoLinks.'],
    links: [
      { label: 'Web', icon: 'safari', href: 'https://tomolinks.konicaminolta.jp/' },
    ],
  },
  {
    period: '2018 — 2019',
    company: 'Quantiphi',
    logo: '/assets/quantiphi_logo.jpeg',
    role: 'Platform Engineer',
    points: [],
    links: [
      { label: 'Web', icon: 'safari', href: 'https://quantiphi.com/' },
    ],
  },
]

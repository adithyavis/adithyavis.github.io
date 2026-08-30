import type { SocialIconName } from '../components/icons'

export type SocialLink = {
  label: string
  href: string
  icon: SocialIconName
}

export const profile = {
  eyebrow: 'Staff Software Engineer · Founding Engineer',
  firstName: 'Adithya',
  lastName: 'Viswamithiran',
  email: 'adithyaviswam@gmail.com',
  badge: {
    number: '3M+',
    label: 'MAU',
    sub: 'levels.fyi',
  },
  socials: [
    { label: 'GitHub', href: 'https://github.com/adithyavis', icon: 'github' },
    { label: 'Twitter', href: 'https://twitter.com/adithyavis', icon: 'twitter' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adithya-vis', icon: 'linkedin' },
  ] satisfies SocialLink[],
}

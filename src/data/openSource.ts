export type OpenSourceProject = {
  tag: string
  title: string
  description: string
  href: string
  stars?: number
  image?: { src: string; alt: string; width: number }
}

export const openSource: OpenSourceProject[] = [
  {
    tag: 'React Native',
    title: 'Reanimated Tab View',
    description:
      'A performant tab view for React Native powered by Reanimated. 200K+ monthly downloads at peak.',
    href: 'https://adithyavis.github.io/reanimated-tab-view/',
    stars: 97,
    image: {
      src: '/assets/rtv_weekly_downloads.png',
      alt: 'Reanimated Tab View weekly downloads',
      width: 150,
    },
  },
  {
    tag: 'OTA',
    title: 'Serverless Expo OTA Server',
    description: 'Serverless implementation of the expo ota server',
    href: 'https://github.com/adithyavis/serverless-expo-ota-server',
    stars: 39,
  },
  {
    tag: 'Animations',
    title: 'Awesome Mobile App Animations',
    description:
      '✨ A collection of animations from popular apps like youtube. Built using react native ✨',
    href: 'https://adithyavis.github.io/awesome-mobile-app-animations/',
    stars: 39,
  },
  {
    tag: 'Animations',
    title: 'Stocks Chart Example',
    description: 'Stocks chart functionality built with react-native-skia',
    href: 'https://github.com/adithyavis/stocks-chart-example',
    stars: 3,
  },
  {
    tag: 'Nitro Module',
    title: 'RN Nitro Screen Brightness',
    description: 'Nitro module for controlling screen brightness',
    href: 'https://github.com/adithyavis/react-native-nitro-screen-brightness',
  },
  {
    tag: 'GraphQL',
    title: 'GraphQL as BFF',
    description: 'An example of how to use graphql as a bff',
    href: 'https://github.com/adithyavis/graphql-bff-example',
  },
]

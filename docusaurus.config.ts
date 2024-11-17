import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes as prismThemes } from 'prism-react-renderer'

const title = 'Bash Script Reference'

export default {
  title,
  tagline: 'The easy way to learn Bash scripting',
  favicon: 'img/SimpleIconsGnubashDark.svg',

  // Production url
  url: 'https://seeker-3.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/bash-script-reference/',
  trailingSlash: false,

  // GitHub pages deployment config.
  organizationName: 'seeker-3',
  projectName: 'bash-script-reference',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onBrokenAnchors: 'warn',
  onDuplicateRoutes: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
          editUrl: `https://github.com/seeker-3/bash-script-reference/tree/main/`,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/SimpleIconsGnubash.png',
    navbar: {
      title,
      logo: {
        alt: 'Logo',
        src: 'img/SimpleIconsGnubash.svg',
        srcDark: 'img/SimpleIconsGnubashDark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'referenceSidebar',
          position: 'left',
          label: 'Reference',
        },
        {
          href: 'https://github.com/seeker-3/bash-script-reference',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash'],
    },
  } satisfies Preset.ThemeConfig,
} satisfies Config

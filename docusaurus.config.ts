import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes as prismThemes } from 'prism-react-renderer'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const title = 'Bash Script Reference'

export default {
  title,
  tagline: 'Bash is cool',
  favicon: 'img/SimpleIconsGnubashDark.svg',

  // Set the production url of your site here
  url: 'https://seeker-3.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/bash-script-reference/',

  // GitHub pages deployment config.
  organizationName: 'seeker-3',
  projectName: 'bash-script-reference',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

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
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
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
          sidebarId: 'tutorialSidebar',
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
      darkTheme: prismThemes.nightOwl,
    },
  } satisfies Preset.ThemeConfig,
} satisfies Config

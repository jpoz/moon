/* eslint-disable sort-keys */
// @ts-check

// const path = require('path');
const prismTheme = require('./prism.config');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'moon',
	tagline: 'A build system for the JavaScript ecosystem',
	url: 'https://moonrepo.dev',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.svg',
	organizationName: 'moonrepo',
	projectName: 'moon',
	deploymentBranch: 'gh-pages',
	trailingSlash: false,

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/moonrepo/moon/tree/master/website',
				},
				// blog: {
				// 	showReadingTime: true,
				// 	// Please change this to your repo.
				// 	editUrl:
				// 		'https://github.com/moonrepo/moon/tree/master/website',
				// },
				theme: {
					customCss: [
						require.resolve('./src/css/theme.css'),
						require.resolve('./src/css/custom.css'),
					],
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			algolia: {
				apiKey: '539ec09a4ded3e5f01f88b4bc1c6e41f',
				appId: '9D74XH4YF0',
				indexName: 'moon',
			},
			navbar: {
				// title: 'moon',
				logo: {
					alt: 'moon',
					src: 'img/logo.svg',
				},
				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Docs',
					},
					// {
					// 	to: '/blog',
					// 	label: 'Blog',
					// 	position: 'left',
					// },
					// {
					// 	to: 'api',
					// 	label: 'Packages',
					// 	position: 'left',
					// },
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Learn',
						items: [
							{
								label: 'Documentation',
								to: '/docs',
							},
							// {
							// 	label: 'Packages',
							// 	to: '/api',
							// },
							{
								label: 'Example repository',
								href: 'https://github.com/moonrepo/examples',
							},
						],
					},
					{
						title: 'Ecosystem',
						items: [
							{
								label: 'Releases',
								to: 'https://github.com/moonrepo/moon/releases',
							},
							{
								label: 'Discussions',
								to: 'https://github.com/moonrepo/moon/discussions',
							},
						],
					},
					{
						title: 'Support',
						items: [
							{
								label: 'GitHub',
								to: 'https://github.com/moonrepo/moon',
							},
							{
								label: 'Discord',
								to: 'https://discord.gg/qCh9MEynv2',
							},
							{
								label: 'Twitter',
								to: 'https://twitter.com/tothemoonrepo',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} moon. moonrepo LLC.`,
			},
			prism: {
				theme: prismTheme,
				darkTheme: prismTheme,
			},
		}),

	plugins: [
		// [
		// 	'docusaurus-plugin-typedoc-api',
		// 	{
		// 		projectRoot: path.join(__dirname, '..'),
		// 		packages: ['packages/runtime'],
		// 		minimal: true,
		// 		readme: true,
		// 	},
		// ],
		function tailwind() {
			return {
				name: 'docusaurus-tailwindcss',
				configurePostCss(postcssOptions) {
					// eslint-disable-next-line import/no-extraneous-dependencies, node/no-unpublished-require
					postcssOptions.plugins.push(require('tailwindcss'));

					return postcssOptions;
				},
			};
		},
	],

	clientModules: [require.resolve('./src/js/darkModeSyncer.ts')],
};

module.exports = config;

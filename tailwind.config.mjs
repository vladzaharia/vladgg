/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Rubik', ...defaultTheme.fontFamily.sans],
				body: ['Atkinson Hyperlegible', ...defaultTheme.fontFamily.sans],
				sans: ['Atkinson Hyperlegible', ...defaultTheme.fontFamily.sans],
				mono: ['JetBrains Mono', 'Kode Mono', ...defaultTheme.fontFamily.mono],
				date: ['Space Mono', ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [],
}

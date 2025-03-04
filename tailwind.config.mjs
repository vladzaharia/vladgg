/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Rubik', ...defaultTheme.fontFamily.sans],
				body: ['Rubik', ...defaultTheme.fontFamily.sans],
				sans: ['Rubik', ...defaultTheme.fontFamily.sans],
				mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
				date: ['Space Mono', ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [],
}

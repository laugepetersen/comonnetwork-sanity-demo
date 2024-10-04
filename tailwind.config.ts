import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/{app,ui}/**/*.{ts,tsx}'],
	theme: {
		colors: {
			dark: '#152837',
			white: '#fff',
			'light-blue': '#5A6AA4',
			yellow: '#EDAF38',
			'green-light-mode': '#709D66',
			'dark-green-light-mode': '#468B44',
			'green-dark-mode': '#589E57',
			'dark-green-dark-mode': '#288B35',
		},
		fontWeight: {
			regular: '400',
			'regular-medium': '450',
			medium: '500',
			semibold: '600',
		},
		fontFamily: {
			title: 'var(--font-title)',
			body: 'Times New Roman, Garamond',
		},
		extend: {
			borderRadius: {
				sm: '2px',
				md: '4px',
				lg: '12px',
			},
			keyframes: {
				'fade-in-out': {
					'0%, 100%': { opacity: '0.5' },
					'50%': { opacity: '1' },
				},
			},
			animation: {
				'fade-in-out': 'fade-in-out 2s infinite',
			},
		},
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant('header-open', 'body:has(#header-open:checked) &')
			addVariant('header-closed', 'body:has(#header-open:not(:checked)) &')
		}),
		plugin(function ({ addUtilities }) {
			const newUtilities = {
				'.absolute-center': {
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				},
			}

			addUtilities(newUtilities)
		}),
	],
	safelist: [{ pattern: /action.*/ }, 'ghost'],
}

export default config

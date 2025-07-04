import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		listStyleType: {
			none: "none",
			disc: "disc",
			decimal: "decimal",
			alphabet: "lower-alpha",
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		screens: {
			'xs': '475px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
			'mobile': {'max': '767px'},
			'tablet': {'min': '768px', 'max': '1023px'},
			'desktop': {'min': '1024px'},
		},
		extend: {
			height: {
				'custom-height': 'calc(100svh - 64px)',
				'screen-mobile': '100dvh',
				'screen-desktop': '100vh',
			},
			minHeight: {
				'screen-mobile': '100dvh',
				'screen-desktop': '100vh',
			},
			width: {
				'fit-content': 'fit-content',
			},
			maxWidth: {
				'8xl': '88rem',
				'9xl': '96rem',
			},
			boxShadow: {
				'custom-inner': 'inset 0 0 6px #000;'
			},
			backgroundImage: {
				'custom-radial': 'radial-gradient(circle, #09446d 45%, #00243e 100%)',
				'black-overlay': 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5))',
				'home-image': "url('/cargo-1.jpeg')"
			},
			aspectRatio: {
				'square': '1 / 1',
				'video': '16 / 9',
				'portrait': '3 / 4',
				'landscape': '4 / 3',
				'ultrawide': '21 / 9',
				'golden': '1.618 / 1',
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			fontFamily: {
				sans: ['Raleway', 'sans-serif'],
				raleway: ['Raleway', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			fontWeight: {
				'light': '300',
				'normal': '400',
				'medium': '500',
				'semibold': '600',
				'bold': '700',
			},
			fontSize: {
				'responsive-xs': 'clamp(0.75rem, 2vw, 0.875rem)',
				'responsive-sm': 'clamp(0.875rem, 2.5vw, 1rem)',
				'responsive-base': 'clamp(1rem, 3vw, 1.125rem)',
				'responsive-lg': 'clamp(1.125rem, 3.5vw, 1.25rem)',
				'responsive-xl': 'clamp(1.25rem, 4vw, 1.5rem)',
				'responsive-2xl': 'clamp(1.5rem, 5vw, 2rem)',
				'responsive-3xl': 'clamp(2rem, 6vw, 3rem)',
				'responsive-4xl': 'clamp(2.5rem, 7vw, 4rem)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

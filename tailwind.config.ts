
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
				heading: ['Playfair Display', 'serif'],
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				fluorescent: {
					blue: '#33CCFF',
					purple: '#9966FF', 
					pink: '#FF66CC',
					orange: '#FF9966',
					green: '#66FF99'
				},
				button: {
					start: '#1e2d5a',
					middle: '#374e96',
					end: '#6e82c2'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: '1.5rem',
				'2xl': '2rem',
				full: '9999px',
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"fade-out": {
					"0%": {
						opacity: "1",
						transform: "translateY(0)"
					},
					"100%": {
						opacity: "0",
						transform: "translateY(10px)"
					}
				},
				"scale-in": {
					"0%": {
						transform: "scale(0.95)",
						opacity: "0"
					},
					"100%": {
						transform: "scale(1)",
						opacity: "1"
					}
				},
				"scale-out": {
					from: { transform: "scale(1)", opacity: "1" },
					to: { transform: "scale(0.95)", opacity: "0" }
				},
				"slide-in-right": {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0)" }
				},
				"slide-out-right": {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(100%)" }
				},
				"glow": {
					"0%, 100%": { 
						opacity: "0.8",
						filter: "brightness(1)" 
					},
					"50%": { 
						opacity: "1",
						filter: "brightness(1.2)" 
					}
				},
				"elastic": {
					"0%": { transform: "scale(1)" },
					"30%": { transform: "scale(1.05)" },
					"60%": { transform: "scale(0.98)" },
					"100%": { transform: "scale(1)" }
				},
				"shine": {
					"0%": { left: "-100%" },
					"100%": { left: "150%" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.3s ease-out",
				"fade-out": "fade-out 0.3s ease-out",
				"scale-in": "scale-in 0.2s ease-out",
				"scale-out": "scale-out 0.2s ease-out",
				"slide-in-right": "slide-in-right 0.3s ease-out",
				"slide-out-right": "slide-out-right 0.3s ease-out",
				"enter": "fade-in 0.3s ease-out, scale-in 0.2s ease-out",
				"exit": "fade-out 0.3s ease-out, scale-out 0.2s ease-out",
				"glow": "glow 2s ease-in-out infinite",
				"elastic": "elastic 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
				"shine": "shine 0.8s forwards"
			},
			boxShadow: {
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
				'glass-sm': '0 2px 8px 0 rgba(31, 38, 135, 0.05)',
				'neumorphic': '8px 8px 16px #d9d9d9, -8px -8px 16px #ffffff',
				'neumorphic-sm': '4px 4px 8px #d9d9d9, -4px -4px 8px #ffffff',
				'neumorphic-dark': '8px 8px 16px #121212, -8px -8px 16px #262626',
				'neumorphic-dark-sm': '4px 4px 8px #121212, -4px -4px 8px #262626',
				'neon': '0 0 5px rgba(153, 102, 255, 0.5), 0 0 20px rgba(153, 102, 255, 0.3)',
				'neon-blue': '0 0 5px rgba(51, 204, 255, 0.5), 0 0 20px rgba(51, 204, 255, 0.3)',
				'neon-pink': '0 0 5px rgba(255, 102, 204, 0.5), 0 0 20px rgba(255, 102, 204, 0.3)',
				'button': '0 4px 15px rgba(30, 45, 90, 0.2)',
			},
			backdropBlur: {
				'glass': 'blur(10px)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

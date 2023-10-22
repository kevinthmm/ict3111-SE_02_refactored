import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
        sans: ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Custom colors
        "amerex-blue": "#003EB9",
        "page-background": "#F0F2F5",
        'character-primary': '#000000D9',
        'character-secondary': '#00000073',
        'character-disabledOrPlaceholder': '#00000040',
        'character-inverse': '#ffffff',
      }
    },
  },
  plugins: [],
}
export default config


import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#1A1A1A',
        'primary-cta': '#FF0000', // Fiery Red
        'secondary-cta': '#FFA500', // Electric Orange
        'gold': '#FFD700',
        'silver': '#C0C0C0',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-cinzel)'],
      },
    },
  },
  plugins: [],
}
export default config

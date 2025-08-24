// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-satoshi)'],
        display: ['var(--font-clash-display)'],
      },
      animation: {
        'blob-spin': 'blob-spin 15s linear infinite',
      },
      keyframes: {
        'blob-spin': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.2)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
      },
    },
  },
  // --- TAMBAHKAN PLUGIN DI SINI ---
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
export default config

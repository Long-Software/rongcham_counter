import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  daisyui: {
    themes: [
      {
        rongCham: {
          primary: '#00296B',
          secondary: '#007AFF',
          accent: '#5B5F97',
          neutral: '#4F4F4F',
          info: '#23F2FF',
          success: '#00ff00',
          warning: '#FCC718',
          error: '#FF0000'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
}
export default config

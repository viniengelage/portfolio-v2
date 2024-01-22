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
        opaque: 'rgba(6, 6, 6, 0.3)',
        brand: {
          '50': '#f6f3ff',
          '100': '#eee9fe',
          '200': '#dfd5ff',
          '300': '#c7b4fe',
          '400': '#ac89fc',
          '500': '#9259f9',
          '600': '#8437f0',
          '700': '#792bdd',
          '800': '#611eb9',
          '900': '#521b97',
          '950': '#320f66',
        },
      },
      keyframes: {
        scroll: {
          to: { transform: 'translate(calc(-50% - 0.5rem))' },
        },
      },
      animation: {
        scrollFoward: 'scroll forwards',
        scrollReverse: 'scroll reverse',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.mask-gradient': {
          '-webkit-mask':
            'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)',
          mask: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}
export default config

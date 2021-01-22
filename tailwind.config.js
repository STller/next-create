module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl-s': '1.2rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '2.5rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      lineHeight: {
        'tight-s': '1.2',
        'snug': '1.4',
        'normal': '1.5',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

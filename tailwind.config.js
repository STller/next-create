module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      '25%': '1 1 25%',
      '50%': '1 1 50%',
      '45%': '1 1 45%',
      '33%': '1 1 33%',
      '45%-initial': '0 1 45%',
      'auto': '1 1 auto'
    },
    colors: {
      'red': '#E42832',
      'white': '#FFFFFF',
      'gold': '#9E7C4F',
      'grey': '#B5B5B5',
      'postTitle': '#999999',
      'input': '#323232',
      'text': '#4C4948'
    },
    fontSize: {
      '12px': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl-s': '1.2rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '2rem': '2rem',
      '4xl': '2.25rem',
      '5xl': '2.5rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      lineHeight: {
        '1.6': '1.6',
        '1.3': '1.3',
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

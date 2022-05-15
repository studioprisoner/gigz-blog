const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        'speaker-pattern': "url('/assets/img/speaker-pattern.png')"
      },
      colors: {
        'gigz-purple': '#852DF5',
        'gigz-pink': '#FF154D',
        'gigz-green': '#1CF5BD',
        'gigz-yellow': '#DDFF0E',
        'gigz-orange': '#FF9736'
      },
      fontFamily: {
        epilogue: "'Epilogue'"
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.800'),
            a: {
              color: theme('colors.gigz.purple'),
              '&:hover': {
                color: theme('colors.gigz.pink')
              },
              code: { color: theme('colors.blue.400') }
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32]
            },
            thead: {
              borderBottomColor: theme('colors.gray.200')
            },
            code: { color: theme('colors.pink.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
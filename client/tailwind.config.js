module.exports = {
  future: {
    defaultLineHeights: true,
    standardFontWeights: true,
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.tsx', './src/**/*.ts'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      inset: {
        '2': '2rem',
      },
      backgroundColor: {
        chat: '#ECECEC',
        quickReply: 'rgba(196, 196, 196, 0.3)',
        primary: '#434A65',
      },
      maxWidth: {
        half: '50%',
      },
      minHeight: {
        chat: '5rem'
      }
    },
  },
  variants: {},
  plugins: [],
};

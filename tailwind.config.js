const primary = '#131720';
const secondary = '#151F30';
const accent = '#2F80ED';
const grey = '#75797E';

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      backgroundColor: {
        primary,
        secondary,
        accent,
      },
      fontFamily: {
        primary: ['Syne', 'sans-serif'],
        secondary: ['Montserrat', 'sans-serif'],
      },
      textColor: {
        accent,
        grey,
      },
      borderColor: {
        accent,
        primary,
      },
    },
  },
  plugins: [],
};

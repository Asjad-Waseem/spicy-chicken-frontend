const rem = (size) => `${(size / 16).toFixed(4)}rem`;

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // screens: {
    //   'tablet': '350px',
    //   // => @media (min-width: 640px) { ... }

    //   'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'desktop': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
      orange: {
        400: '#f98a00',
        500: '#FB7600',
      },
      yellow: {
        400: '#F9E547',
      },
      blue: {
        400: '#00ace3',
        500: '#009ED0',
        600: '#0390BD',
      },
      green: {
        400: '#41C833',
      },
      melrose: {
        400: '#A595FF',
      },
      viking: {
        400: '#6BBCE2',
      },
      koromiko: {
        400: '#FFB56A',
      },
      mulberry: {
        400: '#C84594',
      },
    },
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    fontSize: {
      10: rem(10),
      16: rem(16),
      14: rem(14),
      18: rem(18),
      20: rem(20),
      22: rem(22),
      24: rem(24),
      26: rem(26),
      36: rem(36),
    },
    extend: {
      zIndex: {
        '-1': '-1',
      },
      maxWidth: {
        150: rem(150),
        180: rem(180),
        250: rem(250),
        360: rem(360),
      },
      maxHeight: {
        1000: rem(1000),
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};

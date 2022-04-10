import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  color: {
    background: 'rgb(255, 255, 255)',
    'light-blue': 'rgb(229, 246, 253)',
    'primary-blue': 'rgb(123, 208, 247)',
    plumWeb: 'rgb(238, 181, 235)',
    aterrima: 'rgb(0, 0, 0)',
    lightSlateGray: 'rgb(113, 140, 152)',
    coffee: 'rgb(102, 72, 56)',
    darkLava: 'rgb(73, 59, 49)',
    validationErrorRed: 'rgb(255, 72, 20)',
  },
  size: {
    column: {
      xlarge: '16rem',
      large: '12rem',
      medium: '8rem',
      small: '4rem',
    },
    margin: {
      xxlarge: '4rem',
      xlarge: '4.5rem',
      large: '3rem',
      medium: '2rem',
      small: '1rem',
      xsmall: '0.5rem',
    },
    padding: {
      xxlarge: '4rem',
      xlarge: '4.5rem',
      large: '3rem',
      medium: '2rem',
      small: '1rem',
      xsmall: '0.5rem',
    },
  },
  font: {
    weight: {
      boldest: 510,
      bolder: 490,
      bold: 470,
      normal: 450,
      light: 400,
    },
    size: {
      xxlarge: '2.2rem',
      xlarge: '2rem',
      large: '1.7rem',
      medium: '1.4rem',
      small: '1.2rem',
      xsmall: '1rem',
      info: '0.8rem',
    },

    'letter-spacing': {
      spaced: '0.2rem',
      standard: '0.1rem',
      compact: '0.1rem',
    },
  },
  radius: {
    edge: '2px',
    smooth: '10px',
    circle: '1000px',
  },
  breakpoints: {
    xlarge: '120rem', // 1920px
    large: '75rem', // 1200px
    medium: '63.75rem', // 1020px
    small: '48.0625rem', // 769px
    xsmall: '30rem', //480px
  },
  time: {
    fast: '200ms',
    medium: ' 500ms',
    slow: ' 1000ms',
  },
};

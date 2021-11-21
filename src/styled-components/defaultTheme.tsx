import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  color: {
    background: '#fff',
    'background-accent': '#e6e6e6',
    'light-blue': '#e5f6fd',
    'med-blue': '#caecfc',
    'primary-blue': '#7bd0f7',
    'dark-blue': '#6fbbde',
    lilac: '#eeb5eb',
    'lilac-darkened': '#be91bc',
    'lilac-lightened': '#f1c4ef',
    aterrima: '#000',
    dark: '#1a1a1a',
    earth: '#664838',
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
      heading: 700,
      normal: 600,
      light: 500,
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
      fancy: '0.2rem',
      important: '0.1rem',
    },

    // TODO: Deprecate
    h1: '1.6rem',
    h2: '1.4rem',
    h3: '1.2rem',
    h4: '1.1rem',
    h5: '0.9rem',
    h6: '0.8rem',
    'line-height': '1.3',
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

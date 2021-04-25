import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      background: string;
      'background-accent': string;
      'light-blue': string;
      'med-blue': string;
      'primary-blue': string;
      'dark-blue': string;
      lilac: string;
      'lilac-darkened': string;
      'lilac-lightened': string;
      aterrima: string;
      dark: string;
      earth: string;
    };

    size: {
      column: {
        xlarge: string;
        large: string;
        medium: string;
        small: string;
      };

      margin: {
        xxlarge: string;
        xlarge: string;
        large: string;
        medium: string;
        small: string;
        xsmall: string;
      };

      padding: {
        xxlarge: string;
        xlarge: string;
        large: string;
        medium: string;
        small: string;
        xsmall: string;
      };
    };

    font: {
      weight: {
        heading: number;
        normal: number;
        light: number;
      };

      size: {
        xxlarge: string;
        xlarge: string;
        large: string;
        medium: string;
        small: string;
        xsmall: string;
        info: string;
      };

      'letter-spacing': {
        fancy: string;
        important: string;
      };

      'line-height': string;
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };

    time: {
      fast: string;
      medium: string;
      slow: string;
    };

    radius: {
      edge: string;
      smooth: string;
      circle: string;
    };

    breakpoints: {
      xlarge: string;
      large: string;
      medium: string;
      small: string;
      xsmall: string;
    };
  }
}

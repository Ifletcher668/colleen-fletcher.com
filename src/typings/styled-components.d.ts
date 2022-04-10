import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      background: string;
      'light-blue': string;
      'primary-blue': string;
      plumWeb: string;
      aterrima: string;
      lightSlateGray: string;
      coffee: string;
      darkLava: string;
      validationErrorRed: string;
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
        boldest: number;
        bolder: number;
        bold: number;
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
        spaced: string;
        standard: string;
        compact: string;
      };
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

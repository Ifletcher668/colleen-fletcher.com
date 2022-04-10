import { createGlobalStyle } from 'styled-components';
import MASexy from '../assets/fonts/MASexy/MASexy.ttf';
import { above, color, font, getFancyFirstLetterStyles, size } from './_mixins';

const GlobalStylesheet = createGlobalStyle`
  @font-face {
      font-family: 'MA Sexy';
      src: url(${MASexy}) format('ttf');
  }

  /*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.4)
    );
  }

  img, picture, video, canvas {
    display: block;
    max-width: 100%;
  }

  svg {
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
    &:focus {
      box-shadow: 0 0 0 2px ${color('background')},
        0 0 0 4px ${color('primary-blue')};
    }
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  ul, ol {
  padding-left: 2rem;
  }

  #root, #__gatsby {
    isolation: isolate;
  }

  .gatsby-image-wrapper {
    border-radius: 2px;
  }

  .embedded-form {
    display: flex;
    
    &.left {
      justify-content: flex-start;
    }
  
    &.center {
      justify-content: center;
    }
  
    &.right {
      justify-content: flex-end;
    }
  }

  body,
  input,
  select,
  textarea {
    color: ${color('coffee')};
    font-family: "LoraVariable", sans-serif;
    font-weight: 420;
    letter-spacing: ${font('letter-spacing', 'standard')};
    line-height: 1.6;
    
    p {
      ${getFancyFirstLetterStyles()};
      width: 100%; // fix unknown bug causing some wrap
      margin-bottom: ${size('margin', 'small')}
    }

    em {
      font-weight: 460;
    }

    ${above.small`
      font-size: ${font('size', 'small')}
      
    `}
    
    ${above.medium`
      font-size: ${font('size', 'medium')}
      
    `}

    ${above.large`
      font-size: ${font('size', 'large')}
    `}
  }
`;

export default GlobalStylesheet;

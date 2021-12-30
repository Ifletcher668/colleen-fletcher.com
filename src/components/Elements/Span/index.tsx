import styled, { css } from 'styled-components';

type Props = {
  size?: 'huge' | 'large' | 'normal' | 'small';
  tilt?: 'up' | 'down';
};

// Mostly used to intercept custom Quill.js classNames and apply styles via styled-components
export default styled.span<Props>`
  font-size: ${props => {
    switch (props.size) {
      case 'huge':
        return props.theme.font.size.xxlarge;

      case 'large':
        return props.theme.font.size.xlarge;

      case 'normal':
        return props.theme.font.size.medium;

      case 'small':
        return props.theme.font.size.small;

      default:
        return 'inherit';
    }
  }};

  ${({ tilt }) =>
    tilt &&
    css`
      display: inline-block;
      transform: ${() => {
        switch (tilt) {
          case 'up':
            return 'rotate(1deg)';

          case 'down':
            return 'rotate(-1deg)';

          default:
            return 'inherit';
        }
      }};
    `}
`;

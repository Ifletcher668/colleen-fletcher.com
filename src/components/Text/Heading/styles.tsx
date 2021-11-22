import styled from 'styled-components';
import { Heading } from '../../Elements';

type Props = {
  tilt?: 'up' | 'even' | 'down';
  alignHeading?: AlignValues;
  justifyHeading?: JustifyValues;
};

export const StyledHeading = styled(Heading)<Props>`
  transform: ${props => {
    switch (props.tilt) {
      case 'up':
        return 'rotate(1deg)';

      case 'down':
        return 'rotate(-1deg)';

      case 'even':
        return 'rotate(0deg)';

      default:
        return 'unset';
    }
  }};

  text-align: ${props => {
    switch (props.justifyHeading) {
      case 'right':
        return 'right';

      case 'center':
        return 'center';

      case 'left':
        return 'left';

      default:
        return 'unset';
    }
  }};

  align-self: ${props => {
    switch (props.alignHeading) {
      case 'top':
        return 'start';

      case 'bottom':
        return 'end';

      case 'center':
        return 'center';

      default:
        return 'unset';
    }
  }};

  justify-self: ${props => {
    switch (props.justifyHeading) {
      case 'right':
        return 'end';

      case 'center':
        return 'center';

      case 'left':
        return 'start';

      default:
        return 'unset';
    }
  }};
`;

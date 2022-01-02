import styled from 'styled-components';
import { Paragraph } from '../../Elements';

interface WrapperProps {
  alignParagraph: AlignValues;
  justifyParagraph: JustifyValues;
}

export const TextWrapper = styled(Paragraph)<WrapperProps>`
  align-self: ${props => {
    switch (props.alignParagraph) {
      case 'top':
        return 'start';
      case 'center':
        return 'center';
      default:
        // end
        return 'end';
    }
  }};
  text-align: ${props => {
    switch (props.justifyParagraph) {
      case 'left':
        return 'left';
      case 'center':
        return 'center';
      default:
        // right
        return 'right';
    }
  }};
  justify-self: ${props => {
    switch (props.justifyParagraph) {
      case 'right':
        return 'end';
      case 'center':
        return 'center';
      default:
        // left
        return 'start';
    }
  }};
`;

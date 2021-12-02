import styled, { css } from 'styled-components';
import { Heading, Paragraph } from '../../Elements';

interface WrapperProps {
  alignParagraph: AlignValues;
  justifyParagraph: JustifyValues;
}

const addAlignAndJustifyValues = css<WrapperProps>`
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

export const TextWrapper = styled(Paragraph)<WrapperProps>`
  ${addAlignAndJustifyValues}
`;

export const BlockQuote = styled.blockquote<WrapperProps>`
  display: flex;
  align-items: center;
  min-height: 50px;
  ${addAlignAndJustifyValues}
`;

export const H1 = styled(Heading).attrs({ as: 'h1' })``;

export const H2 = styled(Heading).attrs({ as: 'h2' })``;

export const H3 = styled(Heading).attrs({ as: 'h3' })``;

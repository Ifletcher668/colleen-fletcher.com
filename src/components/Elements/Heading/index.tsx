import styled, { css } from 'styled-components';
import {
  color,
  getFancyFirstLetterStyles,
  font,
} from '../../../styled-components/_mixins';

type HeadingAlignmentProps = {
  tilt?: 'up' | 'even' | 'down';
  alignHeading?: AlignValues;
  justifyHeading?: JustifyValues;
};

const determineHeadingAlignment = css<HeadingAlignmentProps>`
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

const sharedHeadingStyles = css`
  color: ${color('darkLava')};
  letter-spacing: ${font('letter-spacing', 'spaced')};
  font-weight: ${font('weight', 'bold')};
  margin: 0;
`;

// Use 'em' values to scale headings down if parent font-size changes
export const H1 = styled.h1<HeadingAlignmentProps>`
  ${sharedHeadingStyles};
  ${determineHeadingAlignment}

  font-weight: ${font('weight', 'boldest')};
  font-size: 1.9em;
  ${getFancyFirstLetterStyles('1.9em')};
`;

export const H2 = styled.h2<HeadingAlignmentProps>`
  ${sharedHeadingStyles};
  ${determineHeadingAlignment}
  font-weight: ${font('weight', 'bolder')};
  font-size: 1.7em;
  ${getFancyFirstLetterStyles('1.7em')};
`;

export const H3 = styled.h3<HeadingAlignmentProps>`
  ${sharedHeadingStyles};
  ${determineHeadingAlignment}
  font-weight: ${font('weight', 'bolder')};
  font-size: 1.5em;
  ${getFancyFirstLetterStyles('1.5em')};
`;

export const H4 = styled.h4<HeadingAlignmentProps>`
  ${sharedHeadingStyles};
  ${determineHeadingAlignment}
  font-weight: ${font('weight', 'bold')};
  letter-spacing: ${font('letter-spacing', 'standard')};
  font-size: 1.4em;
  ${getFancyFirstLetterStyles('1.4em')};
`;

export const H5 = styled.h5<HeadingAlignmentProps>`
  ${sharedHeadingStyles};
  ${determineHeadingAlignment}
  letter-spacing: ${font('letter-spacing', 'compact')};
  font-size: 1.2em;
  ${getFancyFirstLetterStyles('1.2em')};
`;

export const H6 = styled.h6<HeadingAlignmentProps>`
  ${sharedHeadingStyles};
  ${determineHeadingAlignment}
  letter-spacing: ${font('letter-spacing', 'compact')};
  font-size: 1.1em;
  ${getFancyFirstLetterStyles('1.1em')};
`;

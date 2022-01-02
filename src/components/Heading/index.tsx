import React from 'react';
import { H1, H2, H3, H4, H5, H6 } from '../Elements';

interface Props extends DefaultProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  tilt?: 'up' | 'even' | 'down';
  alignHeading?: AlignValues;
  justifyHeading?: JustifyValues;
}

const Heading = ({
  level = 1,
  children,
  tilt = 'even',
  alignHeading,
  justifyHeading,
}: Props): JSX.Element => {
  const titleCaseStringChildren =
    typeof children === 'string'
      ? children.replace(/(^|\s)\S/g, (firstLetter: string) =>
          firstLetter.toUpperCase(),
        )
      : children;

  const sharedProps = {
    tilt: tilt,
    alignHeading: alignHeading,
    justifyHeading: justifyHeading,
  };

  switch (level) {
    case 1:
      return <H1 {...sharedProps}>{titleCaseStringChildren}</H1>;
    case 2:
      return <H2 {...sharedProps}>{titleCaseStringChildren}</H2>;
    case 3:
      return <H3 {...sharedProps}>{titleCaseStringChildren}</H3>;
    case 4:
      return <H4 {...sharedProps}>{titleCaseStringChildren}</H4>;
    case 5:
      return <H5 {...sharedProps}>{titleCaseStringChildren}</H5>;
    case 6:
      return <H6 {...sharedProps}>{titleCaseStringChildren}</H6>;
  }
};

export default Heading;

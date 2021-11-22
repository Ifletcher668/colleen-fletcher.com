import React, { ReactNode } from 'react';
import { ComponentTextHeading } from '../../../typings/strapi';
import { StyledHeading } from './styles';
import startCase from 'lodash/startCase';
import toLower from 'lodash/toLower';

type Props = {
  data: ComponentTextHeading;
};

type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;

function replaceNumtextWithNumber(
  level: ComponentTextHeading['level'],
): HeadingLevels {
  /* string value enum type in database
  looks better on client-end
  */
  let numLevel: HeadingLevels;

  switch (level) {
    case 'one':
      numLevel = 1;
      break;
    case 'two':
      numLevel = 2;
      break;
    case 'three':
      numLevel = 3;
      break;
    case 'four':
      numLevel = 4;
      break;
    case 'five':
      numLevel = 5;
      break;
    default:
      numLevel = 6;
  }

  return numLevel;
}

// HeadingField is used by strapi components
const HeadingField = ({
  data: { headingText, level, tilt, alignHeading, justifyHeading },
}: Props): JSX.Element => {
  const titleCaseText = startCase(toLower(headingText));

  return (
    // TODO:
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /* @ts-ignore */
    <StyledHeading
      tilt={tilt}
      alignHeading={alignHeading}
      justifyHeading={justifyHeading}
      // Unsure of how to ensure styled-components
      // that this string will only be of the correct type
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      /* @ts-ignore */
      as={`h${String(replaceNumtextWithNumber(level))}`}
    >
      {titleCaseText}
    </StyledHeading>
  );
};

export default HeadingField;

type HeadingProps = Partial<Omit<ComponentTextHeading, 'headingText'>> & {
  children: ReactNode;
};

// Used when not passing data from Strapi
export const Heading = ({
  alignHeading,
  children,
  justifyHeading,
  level,
  tilt,
}: HeadingProps): JSX.Element => {
  const titleCaseText =
    typeof children === 'string' ? startCase(toLower(children)) : children;

  return (
    // TODO:
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /* @ts-ignore */
    <StyledHeading
      tilt={tilt}
      alignHeading={alignHeading}
      justifyHeading={justifyHeading}
      // Unsure of how to ensure styled-components
      // that this string will only be of the correct type
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      /* @ts-ignore */
      as={`h${String(replaceNumtextWithNumber(level))}`}
    >
      {titleCaseText}
    </StyledHeading>
  );
};

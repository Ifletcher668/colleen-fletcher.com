import React from 'react';
import { ComponentTextHeading } from '../../../typings/strapi';
import Heading from '../../Heading';

interface Props {
  data: ComponentTextHeading;
}

const HeadingField: React.FC<Props> = ({
  data: { headingText, level, tilt, alignHeading, justifyHeading },
}: Props) => {
  // string value enum type in database
  // looks better on client-end
  //
  let levelAsNum: 1 | 2 | 3 | 4 | 5 | 6;
  switch (
    level // to number
  ) {
    case 'one':
      levelAsNum = 1;
      break;
    case 'two':
      levelAsNum = 2;
      break;
    case 'three':
      levelAsNum = 3;
      break;
    case 'four':
      levelAsNum = 4;
      break;
    case 'five':
      levelAsNum = 5;
      break;
    default:
      levelAsNum = 6;
  }

  return (
    <Heading
      level={levelAsNum}
      tilt={tilt}
      alignHeading={alignHeading}
      justifyHeading={justifyHeading}
    >
      {headingText}
    </Heading>
  );
};

export default HeadingField;

import React from 'react';
import { SingleImageField } from '../../Media';
import { HeadingField } from '../../Text';
import {
  GridAreaText,
  GridAreaImage,
  HeadingWithImageLeftSide,
} from './styles';

export interface Props {
  data: {
    heading: StrapiComponentTextHeading;
    image: StrapiComponentMediaSingleImage;
  };
}

const HeadingWithImageLeftSideField = ({ data }: Props): JSX.Element => {
  const { heading, image } = data;

  return (
    <HeadingWithImageLeftSide>
      <GridAreaText>
        <HeadingField data={heading} />
      </GridAreaText>

      <GridAreaImage>
        <SingleImageField data={image} />
      </GridAreaImage>
    </HeadingWithImageLeftSide>
  );
};

export default HeadingWithImageLeftSideField;

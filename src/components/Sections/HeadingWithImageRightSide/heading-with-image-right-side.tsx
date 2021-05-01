import React from 'react';
import { SingleImageField } from '../../Media';
import { HeadingField } from '../../Text';
import {
  HeadingWithImageRightSide,
  GridAreaImage,
  GridAreaText,
} from './styles';

export interface Props {
  data: {
    heading: StrapiComponentTextHeading;
    image: StrapiComponentMediaSingleImage;
  };
}

const HeadingWithImageRightSideField = ({ data }: Props): JSX.Element => {
  const { heading, image } = data;

  return (
    <HeadingWithImageRightSide>
      <GridAreaImage>
        <SingleImageField data={image} />
      </GridAreaImage>

      <GridAreaText>
        <HeadingField data={heading} />
      </GridAreaText>
    </HeadingWithImageRightSide>
  );
};

export default HeadingWithImageRightSideField;

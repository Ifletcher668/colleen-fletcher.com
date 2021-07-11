import React from 'react';
import {
  ComponentTextHeading,
  ComponentMediaSingleImage,
} from '../../../typings/strapi';
import { SingleImageField } from '../../Media';
import { HeadingField } from '../../Text';
import {
  HeadingWithImageRightSide,
  GridAreaImage,
  GridAreaText,
} from './styles';

export interface Props {
  data: {
    heading: ComponentTextHeading;
    image: ComponentMediaSingleImage;
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

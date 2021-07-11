import React from 'react';
import {
  ComponentMediaSingleImage,
  ComponentTextParagraph,
} from '../../../typings/strapi';
import { SingleImageField } from '../../Media';
import { Paragraph } from '../../Text';
import {
  ImageCenterTextEitherSide,
  GridAreaTextRight,
  GridAreaTextLeft,
  GridAreaImage,
} from './styles';

export interface Props {
  data: {
    image: ComponentMediaSingleImage;
    text_right: ComponentTextParagraph;
    text_left: ComponentTextParagraph;
  };
}

const ImageCenterTextEitherSideField = ({ data }: Props): JSX.Element => {
  const { image, text_right, text_left } = data;
  return (
    <ImageCenterTextEitherSide>
      <GridAreaTextLeft>
        <Paragraph data={text_right} />
      </GridAreaTextLeft>

      <GridAreaImage>
        <SingleImageField data={image} />
      </GridAreaImage>

      <GridAreaTextRight>
        <Paragraph data={text_left} />
      </GridAreaTextRight>
    </ImageCenterTextEitherSide>
  );
};

export default ImageCenterTextEitherSideField;

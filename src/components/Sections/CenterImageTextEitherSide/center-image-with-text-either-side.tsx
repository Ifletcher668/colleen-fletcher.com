import React from 'react';
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
    image: StrapiComponentMediaSingleImage;
    text_right: StrapiComponentTextParagraph;
    text_left: StrapiComponentTextParagraph;
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

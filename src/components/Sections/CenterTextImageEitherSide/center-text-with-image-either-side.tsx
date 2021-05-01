import React from 'react';
import { SingleImageField } from '../../Media';
import { Paragraph } from '../../Text';
import {
  TextCenterImageEitherSide,
  GridAreaImageLeft,
  GridAreaText,
  GridAreaImageRight,
} from './styles';

export interface Props {
  data: {
    text: StrapiComponentTextParagraph;
    image_right: StrapiComponentMediaSingleImage;
    image_left: StrapiComponentMediaSingleImage;
  };
}

const TextCenterImageEitherSideField = ({ data }: Props): JSX.Element => {
  const { text, image_right, image_left } = data;

  return (
    <TextCenterImageEitherSide>
      <GridAreaImageLeft>
        <SingleImageField data={image_left} />
      </GridAreaImageLeft>

      <GridAreaText>
        <Paragraph data={text} />
      </GridAreaText>

      <GridAreaImageRight>
        <SingleImageField data={image_right} />
      </GridAreaImageRight>
    </TextCenterImageEitherSide>
  );
};

export default TextCenterImageEitherSideField;

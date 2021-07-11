import React from 'react';
import {
  ComponentTextParagraph,
  ComponentMediaSingleImage,
} from '../../../typings/strapi';
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
    text: ComponentTextParagraph;
    image_right: ComponentMediaSingleImage;
    image_left: ComponentMediaSingleImage;
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

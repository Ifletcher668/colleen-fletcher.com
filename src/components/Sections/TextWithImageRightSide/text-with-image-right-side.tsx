import React from 'react';
import {
  ComponentMediaSingleImage,
  ComponentTextParagraph,
} from '../../../typings/strapi';
import { SingleImageField } from '../../Media';
import { Paragraph } from '../../Text';
import { GridAreaImage, GridAreaText, TextWithImageRightSide } from './styles';

export interface Props {
  data: {
    image: ComponentMediaSingleImage;
    text: ComponentTextParagraph;
  };
}

const TextWithImageRightSideField = ({ data }: Props): JSX.Element => {
  const { image, text } = data;

  return (
    <TextWithImageRightSide>
      <GridAreaText>
        <Paragraph data={text} />
      </GridAreaText>

      <GridAreaImage>
        <SingleImageField data={image} />
      </GridAreaImage>
    </TextWithImageRightSide>
  );
};

export default TextWithImageRightSideField;

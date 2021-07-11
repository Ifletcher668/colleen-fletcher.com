import React from 'react';
import {
  ComponentMediaSingleImage,
  ComponentTextParagraph,
} from '../../../typings/strapi';
import { SingleImageField } from '../../Media';
import { Paragraph } from '../../Text';
import { TextWithImageLeftSide, GridAreaText, GridAreaImage } from './styles';

export interface Props {
  data: {
    image: ComponentMediaSingleImage;
    text: ComponentTextParagraph;
  };
}

const TextWithImageLeftSideField = ({ data }: Props): JSX.Element => {
  const { image, text } = data;

  return (
    <TextWithImageLeftSide>
      <GridAreaImage>
        <SingleImageField data={image} />
      </GridAreaImage>

      <GridAreaText>
        <Paragraph data={text} />
      </GridAreaText>
    </TextWithImageLeftSide>
  );
};

export default TextWithImageLeftSideField;

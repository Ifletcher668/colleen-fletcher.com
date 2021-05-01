import React from 'react';
import { SingleImageField } from '../../Media';
import { Paragraph } from '../../Text';
import { TextWithImageLeftSide, GridAreaText, GridAreaImage } from './styles';

export interface Props {
  data: {
    image: StrapiComponentMediaSingleImage;
    text: StrapiComponentTextParagraph;
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

import React from 'react';
import { SingleImageField } from '../../Media';
import { Paragraph } from '../../Text';
import { TextWithImageRightSide, GridAreaImage, GridAreaText } from './styles';

export interface Props {
  data: {
    image: StrapiComponentMediaSingleImage;
    text: StrapiComponentTextParagraph;
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

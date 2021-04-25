import React from 'react';
import { Grid } from '../../Containers';
import { SingleImageField } from '../../Media';
import { Paragraph } from '../../Text';
import { GridArea } from '../../../StyledComponents/helpers';

export interface Props {
  data: {
    image: StrapiComponentMediaSingleImage;
    text_right: StrapiComponentTextParagraph;
    text_left: StrapiComponentTextParagraph;
  };
}

const ImageCenterTextEitherSideField: React.FC<Props> = ({ data }: Props) => {
  const { image, text_right, text_left } = data;
  return (
    <Grid
      containerType="section"
      columns={{
        xlarge:
          '[text-left] 1.5fr [spacer] 0.5fr [image] 1fr [spacer] 0.5fr [text-right] 1.5fr',
        medium: '1fr',
      }}
    >
      <GridArea column="text-left">
        <Paragraph data={text_right} />
      </GridArea>
      <GridArea column="image">
        <SingleImageField data={image} />
      </GridArea>
      <GridArea column="text-right">
        <Paragraph data={text_left} />
      </GridArea>
    </Grid>
  );
};

export default ImageCenterTextEitherSideField;

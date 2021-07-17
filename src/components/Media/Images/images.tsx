import React from 'react';
import { CSSObject } from 'styled-components';
import { ComponentMediaImages } from '../../../typings/strapi';
import { Grid } from '../../Containers';
import { ImageWithCaption } from '../../Images';

interface Props {
  data: ComponentMediaImages;
}

const ImagesField: React.FC<Props> = ({ data }: Props) => {
  const { files, configuration } = data;

  const styles: CSSObject = {
    gap: '1rem',
  };

  return (
    <Grid
      containerType="section"
      styling={styles}
      columns={{
        xlarge: 'repeat(auto-fit, minmax(224px, 1fr))',
        xsmall: '1fr',
      }}
    >
      {files.map((image, idx) => {
        const imageData = {
          file: image,
          configuration,
        };
        return <ImageWithCaption key={idx} between data={imageData} />;
      })}
    </Grid>
  );
};

export default ImagesField;

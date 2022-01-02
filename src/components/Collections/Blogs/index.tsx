import React from 'react';
import Grid from '../../Containers/Grid';
import { ImageWithCaption } from '../../Images';
import { ButtonField } from '../../Widgets';
import { Paragraph } from '../../Text';
import { Blog } from '../../../typings/strapi';

export interface Props {
  data: Array<Pick<Blog, 'id' | 'slug' | 'fullUrlPath' | 'preview'>>;
}

const BlogsField = ({ data }: Props): JSX.Element => (
  <Grid
    containerType="section"
    columns={{
      xlarge: '[left] 1fr [right] 1fr',
      small: '1fr',
    }}
    styling={{ gap: '5em' }}
  >
    {data.map(
      ({
        id,
        slug,
        fullUrlPath,
        preview: {
          heading: headingText,
          text: previewText,
          image: previewImage,
          button: previewButton,
        },
      }) => {
        // TODO: Refactor when handling routes better
        if (
          !previewButton.action ||
          previewButton.action === '/' ||
          previewButton.action === slug
        ) {
          previewButton.action = fullUrlPath;
        }

        return (
          <Grid
            key={`${id}-${slug}`}
            rows={{
              xlarge: 'minmax(6rem, 12rem) 0.5fr 1fr minmax(3rem, 4rem)',
            }}
          >
            <Paragraph data={headingText} />

            <ImageWithCaption
              data={previewImage}
              containerType="div"
              styling={{ width: '100%', height: '100%' }} // ensures image doesn't collapse
            />

            <Paragraph data={previewText} />

            <ButtonField data={previewButton} />
          </Grid>
        );
      },
    )}
  </Grid>
);

export default BlogsField;

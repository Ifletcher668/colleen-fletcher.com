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
  <>
    {data.map(
      (
        {
          id,
          slug,
          fullUrlPath,
          preview: {
            text: previewText,
            image: previewImage,
            button: previewButton,
          },
        },
        idx,
      ) => {
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
            key={idx + id}
            containerType="article"
            styling={{
              placeItems: 'center',
              margin: '2em 0em',
              gap: '1em 0',
            }}
            rows={{
              xlarge: '0.05fr auto auto minmax(50px, 70px)',
            }}
          >
            {/* TODO: Heading*/}
            {/* <HeadingField data={heading} /> */}
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
  </>
);

export default BlogsField;

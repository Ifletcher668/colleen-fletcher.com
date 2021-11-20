import React from 'react';
import Grid from '../../Containers/Grid';
import { HeadingField } from '../../Text';
import { ImageWithCaption } from '../../Images';
import { ButtonField } from '../../Widgets';
import { Paragraph } from '../../Text';
import { Blog } from '../../../typings/strapi';

export interface Props {
  data: Array<Pick<Blog, 'id' | 'slug' | 'fullUrlPath' | 'preview'>>;
}

const BlogsField = ({ data }: Props): JSX.Element => {
  return (
    <>
      {data.map((blog, idx) => {
        const {
          preview: { text, heading, image, button },
        } = blog;

        // TODO: Refactor when handling routes better
        if (
          button.action === '/' ||
          button.action === '' ||
          button.action === blog.slug
        ) {
          const buttonPath = blog.fullUrlPath;
          button.action = buttonPath;
        }

        return (
          <Grid
            key={idx}
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
            <HeadingField data={heading} />
            <ImageWithCaption
              data={image}
              containerType="div"
              styling={{ width: '100%', height: '100%' }} // ensures image doesn't collapse
            />
            <Paragraph data={text} />
            <ButtonField data={button} />
          </Grid>
        );
      })}
    </>
  );
};

export default BlogsField;

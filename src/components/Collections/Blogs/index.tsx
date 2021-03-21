import React from 'react';
import Grid from '../../Containers/Grid';
import { HeadingField } from '../../Text';
import { ImageWithCaption } from '../../Images';
import { ButtonField } from '../../Widgets';
import { Paragraph } from '../../Text';

export interface Props {
    data: Array<Pick<StrapiBlog, 'id' | 'slug' | 'fullUrlPath'>>;
    previews: StrapiBlog[];
}

const BlogsField: React.FC<Props> = ({ data, previews }: Props) => {
    return (
        <>
            {data.map((blog, idx) => {
                // TODO: Refactor when Strapi issue fixed
                const [{ preview }] = previews.filter(p => p.id === blog.id);
                const { text, heading, image, button } = preview;
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
                            margin: `2em 0em`,
                            gap: `1em 0`,
                        }}
                        rows={{
                            xlarge: `0.05fr auto auto minmax(50px, 70px)`,
                        }}
                    >
                        <HeadingField data={heading} />
                        <ImageWithCaption data={image} />
                        <Paragraph data={text} />
                        <ButtonField data={button} />
                    </Grid>
                );
            })}
        </>
    );
};

export default BlogsField;

import React from 'react';
import Image from 'gatsby-image';
import MarkdownField from 'react-markdown';
import Grid from '../../../../Container/Grid';
import {HeadingField} from '../../Text';
import {ImageWithCaption} from '../../../../Images/';
import {ButtonField} from '../../Widgets';

export interface Props {
    data: StrapiBlog[];
    previews: StrapiBlog[];
}

const BlogsField: React.FC<Props> = ({data, previews}: Props) => {
    return (
        <>
            {data.map((blog, idx) => {
                // TODO: Refactor when Strapi issue fixed
                const [{preview}] = previews.filter(p => p.id === blog.id);
                const {text, heading, image, button} = preview;
                if (button.action === '/') {
                    const buttonPath = blog.fullUrlPath;
                    button.action = buttonPath;
                }
                return (
                    <Grid
                        key={idx}
                        containerType="article"
                        styling={{
                            margin: `2em 0em`,
                            gap: `1em 0`,
                        }}
                        rows={{
                            xlarge: `0.1fr minmax(5em, 10em) 1fr minmax(1em,1.5em)`,
                        }}
                    >
                        <HeadingField center data={heading} />
                        <ImageWithCaption imageComponent={image} />
                        <MarkdownField
                            key={idx}
                            source={text.body}
                            allowDangerousHtml
                        />
                        <ButtonField data={button} />
                    </Grid>
                );
            })}
        </>
    );
};

export default BlogsField;

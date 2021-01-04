import React from 'react';
import {graphql} from 'gatsby';
import Image from 'gatsby-image';
import Heading from '../components/Heading';
import {Grid} from '../components/Container';
import MarkdownField from 'react-markdown';
import {Card, CardHeader, CardBody, CardFooter} from '../components/Card';
import ALink from 'gatsby-plugin-transition-link/AniLink';
interface Props {
    data: Strapi;
}

export default (props: Props) => {
    const {
        data: {
            strapi: {blog},
        },
    } = props;

    return (
        <>
            <Grid containerType="main-content">
                <Heading center level={1}>
                    {blog.name}
                </Heading>
                <MarkdownField
                    source={blog.meta_description}
                    allowDangerousHtml
                    className="paragraph"
                />
                <Grid containerType="section">
                    {blog.blog_posts.map((blogPost, idx) => {
                        const zigZagColumns: Grid['columns'] =
                            idx % 2 === 0
                                ? [`[image] 1fr [spacer] 0.05fr [text] 2fr`]
                                : [`[text] 2fr [spacer] 0.05fr [image] 1fr `];
                        return (
                            <Grid
                                key={idx}
                                columns={zigZagColumns}
                                rows={[`[content] 1fr [spacer] 0.2fr`]}
                            >
                                <Image
                                    alt={
                                        blogPost.cover_image
                                            ? blogPost.cover_image
                                                  .alternativeText
                                            : ''
                                    }
                                    title={
                                        blogPost.cover_image
                                            ? blogPost.cover_image.caption
                                            : ''
                                    }
                                    fluid={
                                        blogPost.cover_image
                                            ? blogPost.cover_image.imageFile
                                                  .childImageSharp.fluid
                                            : ''
                                    }
                                    style={{
                                        gridColumn: `image`,
                                        gridRow: 'content',
                                    }}
                                />
                                <Card
                                    style={{
                                        gridColumn: `text`,
                                        gridRow: 'content / span spacer',
                                    }}
                                >
                                    <CardHeader>
                                        <Heading center level={3}>
                                            <ALink to={blogPost.fullUrlPath}>
                                                {blogPost.title}
                                            </ALink>
                                        </Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <MarkdownField
                                            source={blogPost.preview}
                                            allowDangerousHtml
                                            className="paragraph"
                                        />
                                    </CardBody>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </>
    );
};

export const query = graphql`
    query GET_BLOG_PAGE($id: ID!) {
        strapi {
            blog(id: $id) {
                ...StrapiBlog
            }
        }
    }
`;

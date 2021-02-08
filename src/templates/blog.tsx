import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import Heading from '../components/Heading';
import { Grid } from '../components/Containers';
import { PageContainer } from '../components/Containers';
import MarkdownField from 'react-markdown';
import { Card, CardHeader, CardBody, CardFooter } from '../components/Card';
import PaintDripLink from '../components/TransitionLink';
import { zigZagGridColumns } from '../utils/zigZagGridColumns';
interface Props {
    data: Strapi;
}

export default (props: Props): JSX.Element => {
    const {
        data: {
            strapi: { blog },
        },
    } = props;

    return (
        <>
            <PageContainer>
                <Heading
                    alignHeading="center"
                    justifyHeading="center"
                    level={1}
                >
                    {blog.name}
                </Heading>
                <MarkdownField
                    source={blog.meta_description}
                    allowDangerousHtml
                    className="paragraph"
                />
                <Grid containerType="section" gap={`2em 0`}>
                    {blog.blog_posts.map((post, idx) => {
                        const zigZagColumnLayout = zigZagGridColumns(idx);

                        return (
                            <Grid
                                key={idx}
                                columns={zigZagColumnLayout}
                                rows={{
                                    xlarge: `[content] 1fr [spacer] 0.2fr`,
                                }}
                            >
                                <Image
                                    alt={
                                        post.cover_image
                                            ? post.cover_image.alternativeText
                                            : ''
                                    }
                                    title={
                                        post.cover_image
                                            ? post.cover_image.caption
                                            : ''
                                    }
                                    fluid={
                                        post.cover_image
                                            ? post.cover_image.imageFile
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
                                        <Heading
                                            alignHeading="top"
                                            justifyHeading="right"
                                            level={3}
                                        >
                                            <PaintDripLink
                                                to={post.fullUrlPath}
                                            >
                                                {post.title}
                                            </PaintDripLink>
                                        </Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <MarkdownField
                                            source={post.preview}
                                            allowDangerousHtml
                                            className="paragraph"
                                        />
                                    </CardBody>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </PageContainer>
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

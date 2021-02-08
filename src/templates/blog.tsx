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
import { GridArea } from '../StyledComponents/helpers';
import { ImageWithCaption } from '../components/Images';
import { HeadingField, Paragraph } from '../components/Text';
import { ButtonField } from '../components/Widgets';
import Divider from '../components/Divider';
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

                        const buttonData: StrapiComponentWidgetButton = {
                            action: `${post.fullUrlPath}`,
                            buttonText:
                                post.preview && post.preview.button
                                    ? post.preview.button.buttonText
                                    : 'Click',
                            variant:
                                post.preview && post.preview.button
                                    ? post.preview.button.variant
                                    : 'primary',
                        };

                        return (
                            <Grid
                                key={idx}
                                containerType="article"
                                columns={zigZagColumnLayout}
                                rows={{
                                    xlarge: `[content] 1fr [divider] 0.01fr`,
                                }}
                                styling={{
                                    margin: `2em 0em`,
                                    gap: `1em 0`,
                                }}
                            >
                                {post.preview && post.preview.image ? (
                                    <GridArea column="image" row="content">
                                        <ImageWithCaption
                                            data={post.preview.image}
                                        />
                                    </GridArea>
                                ) : (
                                    <></>
                                )}
                                {post.preview && post.preview.heading ? (
                                    <GridArea column="text" row="content">
                                        <HeadingField
                                            data={post.preview.heading}
                                        />

                                        <Paragraph data={post.preview.text} />

                                        <ButtonField data={buttonData} />
                                    </GridArea>
                                ) : (
                                    <></>
                                )}
                                <GridArea column="full" row="divider">
                                    <Divider type="standard" />
                                </GridArea>
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

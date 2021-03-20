import React from 'react';
import { graphql } from 'gatsby';
import Heading from '../components/Heading';
import { Grid } from '../components/Containers';
import { PageContainer } from '../components/Containers';
import MarkdownField from 'react-markdown';
import { zigZagGridColumns } from '../utils/zigZagGridColumns';
import { GridArea } from '../StyledComponents/helpers';
import { ImageWithCaption } from '../components/Images';
import { HeadingField, Paragraph } from '../components/Text';
import { ButtonField } from '../components/Widgets';
import Divider from '../components/Divider';
import Layout from '../components/Layout';
interface Props {
    data: Strapi;
    location: Location;
}

export default (props: Props): JSX.Element => {
    const {
        data: {
            strapi: { blog },
        },
    } = props;

    return (
        <Layout location={props.location}>
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
                                columns={zigZagColumnLayout} // col names === 'image' and 'content'
                                rows={{
                                    xlarge: `[content-start] 1fr [content-middle] auto [content-end] 0.02fr`,
                                    large: `[content-start] 1fr [content-middle] auto [content-end] 0.02fr`,
                                    medium: `[content-start] auto [content-middle] auto [content-end] auto`,
                                }}
                                styling={{
                                    margin: `2em 0em`,
                                    gap: `1em 0`,
                                }}
                            >
                                <GridArea
                                    col-xl="image"
                                    col-lg="image"
                                    col-md="image"
                                    row-xl="content-start"
                                    row-lg="content-start"
                                    row-md="content-start"
                                    row-sm="content-start"
                                    row-xs="content-start"
                                >
                                    <ImageWithCaption
                                        data={post.preview.image}
                                    />
                                </GridArea>

                                <GridArea
                                    col-xl="text"
                                    col-lg="text"
                                    col-md="text"
                                    row-xl="content-start / content-end"
                                    row-lg="content-start / content-end"
                                    row-md="content-start / content-end"
                                    row-sm="content-middle"
                                    row-xs="content-middle"
                                >
                                    <Grid>
                                        <HeadingField
                                            data={post.preview.heading}
                                        />

                                        <Paragraph data={post.preview.text} />

                                        <ButtonField data={buttonData} />
                                    </Grid>
                                </GridArea>

                                <GridArea
                                    col-xl="1 / span 3"
                                    col-lg="1 / span 3"
                                    col-md="1 / span 3"
                                    row-xl="content-end"
                                    row-lg="content-end"
                                    row-md="content-end"
                                    row-sm="content-end"
                                    row-xs="content-end"
                                >
                                    <Divider type="standard" />
                                </GridArea>
                            </Grid>
                        );
                    })}
                </Grid>
            </PageContainer>
        </Layout>
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

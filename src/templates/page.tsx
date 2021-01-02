import React from 'react';
import {graphql} from 'gatsby';
import Heading from '../components/Heading';
import StrapiDynamicZone from '../components/StrapiDynamicZone';
import BannerBackground from 'gatsby-background-image';
import {Grid} from '../components/Container';
import Card from '../components/Card';
import MarkdownField from 'react-markdown';
import SEO from '../components/SEO';

type PageContext = {
    id: string;
    blogsPageId: StrapiBlogPost[];
};
interface Props {
    data: Strapi;
    pageContext: PageContext;
}

export default (props: Props) => {
    const {
        data: {
            strapi: {page, blogs, blogPosts},
        },
    } = props;

    return (
        <>
            <SEO />
            <BannerBackground
                fluid={
                    page.banner_background_image.imageFile.childImageSharp.fluid
                }
                className="banner-background"
            >
                <StrapiDynamicZone components={page.banner} />
            </BannerBackground>
            <StrapiDynamicZone components={page.body} />
            {props.pageContext.blogsPageId && (
                <>
                    <Grid
                        rows={`[rest] 1fr [test] 2fr`}
                        containerType="section"
                    >
                        <Heading level={2}>Blogs</Heading>
                        {blogs.map((blog, idx) => {
                            return (
                                <Card
                                    key={idx}
                                    heading={
                                        <Heading level={4}>{blog.name}</Heading>
                                    }
                                    footer={[]}
                                >
                                    <MarkdownField
                                        source={blog.meta_description}
                                        allowDangerousHtml
                                        className="paragraph"
                                    />
                                </Card>
                            );
                        })}
                    </Grid>
                    {blogPosts.map((blogPost, idx) => {
                        return <Card key={idx}>{blogPost.title}</Card>;
                    })}
                </>
            )}
        </>
    );
};

export const query = graphql`
    query GET_PAGE($id: ID!) {
        strapi {
            page(id: $id) {
                title
                banner_background_image {
                    ...StrapiUploadFile
                }
                meta_description
                banner {
                    __typename
                    ... on STRAPI_ComponentMediaSingleImage {
                        ...StrapiComponentMediaSingleImage
                    }
                    ... on STRAPI_ComponentMediaImages {
                        ...StrapiComponentMediaImages
                    }
                    ... on STRAPI_ComponentMediaSingleVideo {
                        ...StrapiComponentMediaSingleVideo
                    }
                    ... on STRAPI_ComponentMediaVideos {
                        ...StrapiComponentMediaVideos
                    }
                    ... on STRAPI_ComponentMediaSingleFile {
                        ...StrapiComponentMediaSingleFile
                    }
                    ... on STRAPI_ComponentMediaFiles {
                        ...StrapiComponentMediaFiles
                    }
                    ... on STRAPI_ComponentTextParagraph {
                        ...StrapiComponentTextParagraph
                    }
                    ... on STRAPI_ComponentTextQuote {
                        ...StrapiComponentTextQuote
                    }
                    ... on STRAPI_ComponentTextHeading {
                        ...StrapiComponentTextHeading
                    }
                    ... on STRAPI_ComponentWidgetDivider {
                        ...StrapiComponentWidgetDivider
                    }
                    ... on STRAPI_ComponentWidgetButton {
                        ...StrapiComponentWidgetButton
                    }
                    ... on STRAPI_ComponentSectionHeadingRightImageLeft {
                        ...StrapiComponentSectionHeadingRightImageLeft
                    }
                    ... on STRAPI_ComponentSectionHeadingLeftImageRight {
                        ...StrapiComponentSectionHeadingLeftImageRight
                    }
                    ... on STRAPI_ComponentSectionImageRightTextLeft {
                        ...StrapiComponentSectionImageRightTextLeft
                    }
                    ... on STRAPI_ComponentSectionTextRightImageLeft {
                        ...StrapiComponentSectionTextRightImageLeft
                    }
                    ... on STRAPI_ComponentSectionTextCenterImageEitherSide {
                        ...StrapiComponentSectionTextCenterImageEitherSide
                    }
                    ... on STRAPI_ComponentSectionImageCenterTextEitherSide {
                        ...StrapiComponentSectionImageCenterTextEitherSide
                    }
                }
                body {
                    __typename
                    ... on STRAPI_ComponentMediaSingleImage {
                        ...StrapiComponentMediaSingleImage
                    }
                    ... on STRAPI_ComponentMediaImages {
                        ...StrapiComponentMediaImages
                    }
                    ... on STRAPI_ComponentMediaSingleVideo {
                        ...StrapiComponentMediaSingleVideo
                    }
                    ... on STRAPI_ComponentMediaVideos {
                        ...StrapiComponentMediaVideos
                    }
                    ... on STRAPI_ComponentMediaSingleFile {
                        ...StrapiComponentMediaSingleFile
                    }
                    ... on STRAPI_ComponentMediaFiles {
                        ...StrapiComponentMediaFiles
                    }
                    ... on STRAPI_ComponentTextParagraph {
                        ...StrapiComponentTextParagraph
                    }
                    ... on STRAPI_ComponentTextQuote {
                        ...StrapiComponentTextQuote
                    }
                    ... on STRAPI_ComponentTextHeading {
                        ...StrapiComponentTextHeading
                    }
                    ... on STRAPI_ComponentWidgetDivider {
                        ...StrapiComponentWidgetDivider
                    }
                    ... on STRAPI_ComponentWidgetButton {
                        ...StrapiComponentWidgetButton
                    }
                    ... on STRAPI_ComponentSectionHeadingRightImageLeft {
                        ...StrapiComponentSectionHeadingRightImageLeft
                    }
                    ... on STRAPI_ComponentSectionHeadingLeftImageRight {
                        ...StrapiComponentSectionHeadingLeftImageRight
                    }
                    ... on STRAPI_ComponentSectionImageRightTextLeft {
                        ...StrapiComponentSectionImageRightTextLeft
                    }
                    ... on STRAPI_ComponentSectionTextRightImageLeft {
                        ...StrapiComponentSectionTextRightImageLeft
                    }
                    ... on STRAPI_ComponentSectionTextCenterImageEitherSide {
                        ...StrapiComponentSectionTextCenterImageEitherSide
                    }
                    ... on STRAPI_ComponentSectionImageCenterTextEitherSide {
                        ...StrapiComponentSectionImageCenterTextEitherSide
                    }
                }
            }
            blogPosts {
                title
            }
            blogs {
                name
                slug
                fullUrlPath
                meta_description
            }
        }
    }
`;
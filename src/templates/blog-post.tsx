import React from 'react';
import {graphql} from 'gatsby';
import Heading from '../components/Heading';
import StrapiDynamicZone from '../components/StrapiDynamicZone';
import CoverImage from 'gatsby-image';

interface Props {
    data: Strapi;
}

export default (props: Props) => {
    const {
        data: {
            strapi: {
                blogPost: {title, body, cover_image},
            },
        },
    } = props;

    return (
        <>
            <section className="blog-post-header">
                <Heading tilt="even" level={1}>
                    {title}
                </Heading>
                {cover_image && (
                    <>
                        <CoverImage
                            fluid={cover_image.imageFile.childImageSharp.fluid}
                            alt={cover_image.alternativeText}
                            title={cover_image.caption}
                        />
                        <figcaption>{cover_image.caption}</figcaption>
                    </>
                )}
            </section>
            <StrapiDynamicZone components={body} />
        </>
    );
};

export const query = graphql`
    query GET_BLOG_POST($id: ID!) {
        strapi {
            blogPost(id: $id) {
                title
                cover_image {
                    ...StrapiUploadFile
                }
                tags {
                    name
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
        }
    }
`;

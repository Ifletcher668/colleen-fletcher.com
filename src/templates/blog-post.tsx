import React from 'react';
import { graphql } from 'gatsby';
import StrapiDynamicZone from '../components/StrapiDynamicZone';
import { Grid } from '../components/Containers';
import { PageContainer } from '../components/Containers';
import Image from 'gatsby-image';
interface Props {
    data: Strapi;
}

export default (props: Props): JSX.Element => {
    const {
        data: {
            strapi: {
                blogPost: { title, body, cover_image },
            },
        },
    } = props;

    return (
        <PageContainer>
            <Grid containerType="section" gap={`2em 0`}>
                {cover_image && (
                    <Image
                        style={{
                            maxWidth: `600px`,
                            maxHeight: `600px`,
                        }}
                        fluid={cover_image.imageFile.childImageSharp.fluid}
                    />
                )}
                <StrapiDynamicZone components={body} />
            </Grid>
        </PageContainer>
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

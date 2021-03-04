import React from 'react';
import { graphql } from 'gatsby';
import StrapiDynamicZone from '../components/StrapiDynamicZone';
import { PageContainer } from '../components/Containers';
import SEO from '../components/SEO';
interface Props {
    data: Strapi;
}

export default (props: Props): JSX.Element => {
    const {
        data: {
            strapi: {
                blogPost: { title, body, meta_description },
            },
        },
    } = props;

    return (
        <>
            <SEO title={title} description={meta_description} />
            <PageContainer>
                <StrapiDynamicZone components={body} />
            </PageContainer>
        </>
    );
};

export const query = graphql`
    query GET_BLOG_POST($id: ID!) {
        strapi {
            blogPost(id: $id) {
                title
                meta_description
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

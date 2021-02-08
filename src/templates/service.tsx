import React from 'react';
import { graphql } from 'gatsby';
import StrapiDynamicZone from '../components/StrapiDynamicZone';
import { Grid } from '../components/Containers';
import { PageContainer } from '../components/Containers';
import BannerBackground from 'gatsby-background-image';

interface Props {
    data: Strapi;
}

export default (props: Props): JSX.Element => {
    const {
        data: {
            strapi: { service },
        },
    } = props;

    return (
        <Grid containerType="section">
            {service.banner_background_image && (
                <BannerBackground
                    fluid={
                        service.banner_background_image.imageFile
                            .childImageSharp.fluid
                    }
                    className="banner-background"
                >
                    {service.banner && (
                        <StrapiDynamicZone components={service.banner} />
                    )}
                </BannerBackground>
            )}
            <PageContainer>
                <StrapiDynamicZone components={service.sales_page} />
            </PageContainer>
        </Grid>
    );
};

export const query = graphql`
    query GET_SALES_PAGE($id: ID!) {
        strapi {
            service(id: $id) {
                title
                banner_background_image {
                    ...StrapiUploadFile
                }
                banner {
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
                sales_page {
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

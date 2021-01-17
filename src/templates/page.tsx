import React from 'react';
import {graphql} from 'gatsby';
import Image from 'gatsby-image';
import Heading from '../components/Heading';
import StrapiDynamicZone from '../components/StrapiDynamicZone';
import BannerBackground from 'gatsby-background-image';
import {Flexbox, Grid} from '../components/Container';
import SEO from '../components/SEO';

type PageContext = {
    id: string;
    blogsPageId: StrapiBlogPost[];
    offeringsPageId: StrapiOffering[];
};
interface Props {
    data: Strapi;
    pageContext: PageContext;
}

export default (props: Props) => {
    const {
        data: {
            strapi: {page},
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
                <Flexbox>
                    <StrapiDynamicZone components={page.banner} />
                </Flexbox>
            </BannerBackground>
            <Grid containerType="main-content">
                <StrapiDynamicZone components={page.body} />
            </Grid>
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
        }
    }
`;

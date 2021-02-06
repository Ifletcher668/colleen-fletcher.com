import React from 'react';
import {graphql} from 'gatsby';
import StrapiDynamicZone from '../components/StrapiDynamicZone';
import {ContentWrapper} from '../components/Containers';
import SEO from '../components/SEO';
import BannerBackgroundImage from '../components/Banner';

type PageContext = {
    id: string;
};
interface Props {
    data: Strapi;
    pageContext: PageContext;
}

type Previews = {
    blogPreviews: StrapiBlog[];
    offeringPreviews: StrapiOffering[];
};
export default (props: Props): JSX.Element => {
    const {
        data: {
            strapi: {page, blogs: blogPreviews, offerings: offeringPreviews},
        },
    } = props;

    const previews: Previews = {
        blogPreviews,
        offeringPreviews,
    };
    return (
        <>
            <SEO />
            {page.banner_background_image && (
                <BannerBackgroundImage
                    image={page.banner_background_image}
                    banner={page.banner}
                />
            )}
            <ContentWrapper>
                <StrapiDynamicZone components={page.body} previews={previews} />
            </ContentWrapper>
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
                    ... on STRAPI_ComponentCollectionsBlogs {
                        ...StrapiComponentCollectionsBlogs
                    }
                    ... on STRAPI_ComponentCollectionsBlogPosts {
                        ...StrapiComponentCollectionsBlogPosts
                    }
                    ... on STRAPI_ComponentCollectionsOfferings {
                        ...StrapiComponentCollectionsOfferings
                    }
                    ... on STRAPI_ComponentCollectionsServices {
                        ...StrapiComponentCollectionsServices
                    }
                }
            }
            blogs {
                id
                preview {
                    ...StrapiComponentGeneralPreview
                }
            }
            offerings {
                id
                preview {
                    ...StrapiComponentGeneralPreview
                }
            }
        }
    }
`;

import { graphql } from 'gatsby';
import React from 'react';
import BannerBackgroundImage from '../components/Banner';
import { PageContainer } from '../components/Containers';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import StrapiDynamicZone from '../components/StrapiDynamicZone';
import { TemplateProps } from './types';

export default (props: TemplateProps): JSX.Element => {
  const {
    data: {
      strapi: {
        page: { banner, banner_background_image, body, seo, title },
      },
    },
  } = props;

  return (
    <Layout location={props.location}>
      <SEO // Make SEO required eventually
        title={seo?.title ?? title}
        description={seo?.meta_description}
        image={seo?.image}
      />

      {banner_background_image && (
        <BannerBackgroundImage
          image={banner_background_image}
          banner={banner}
        />
      )}

      <PageContainer>
        <StrapiDynamicZone components={body} />
      </PageContainer>
    </Layout>
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
        seo {
          ...StrapiComponentGeneralSeo
        }
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
          ... on STRAPI_ComponentWidgetEmbeddedForm {
            ...StrapiComponentWidgetEmbeddedForm
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
    }
  }
`;

import { graphql } from 'gatsby';
import React from 'react';
import { PageContainer } from '../components/Containers';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import StrapiDynamicZone from '../components/StrapiDynamicZone';
import { TemplateProps } from './types';

export default (props: TemplateProps): JSX.Element => {
  const {
    data: {
      strapi: {
        blogPost: { body, seo, preview, title },
      },
    },
  } = props;

  return (
    <Layout location={props.location}>
      <SEO // Make SEO Required
        title={seo?.title ?? title}
        description={seo?.meta_description ?? preview.text.body}
        image={seo?.image ?? preview.image.file}
      />

      <PageContainer>
        <StrapiDynamicZone components={body} />
      </PageContainer>
    </Layout>
  );
};

export const query = graphql`
  query GET_BLOG_POST($id: ID!) {
    strapi {
      blogPost(id: $id) {
        title
        tags {
          name
        }
        seo {
          ...StrapiComponentGeneralSeo
        }
        preview {
          text {
            ...StrapiComponentTextParagraph
          }
          image {
            ...StrapiComponentMediaSingleImage
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
        }
      }
    }
  }
`;

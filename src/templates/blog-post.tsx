import React from 'react';
import { graphql } from 'gatsby';
import StrapiDynamicZone from '../components/StrapiDynamicZone';
import { PageContainer } from '../components/Containers';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import { TemplateProps } from './types';

export default (props: TemplateProps): JSX.Element => {
  const {
    data: {
      strapi: {
        blogPost: { title, body, meta_description },
      },
    },
  } = props;

  return (
    <Layout location={props.location}>
      <SEO title={title} description={meta_description} />
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

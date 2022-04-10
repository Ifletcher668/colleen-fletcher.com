import { graphql } from 'gatsby';
import React from 'react';
import { Comments } from '../components/Comments';
import { PageContainer } from '../components/Containers';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import StrapiDynamicZone from '../components/StrapiDynamicZone';
import { TemplateProps } from './types';

export default (props: TemplateProps): JSX.Element => {
  const {
    data: {
      strapi: {
        blogPost: { id: blogPostId, body, seo, title },
      },
    },
  } = props;

  return (
    <Layout location={props.location}>
      <SEO // Make SEO Required
        title={seo?.title ?? title}
        description={seo?.meta_description ?? ''}
        image={seo?.image}
      />

      <PageContainer>
        <StrapiDynamicZone components={body} />

        <Comments blogPostId={blogPostId} />
      </PageContainer>
    </Layout>
  );
};

export const query = graphql`
  query GET_BLOG_POST($id: ID!) {
    strapi {
      blogPost(id: $id) {
        id
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
          ... on STRAPI_ComponentWidgetEmbeddedForm {
            ...StrapiComponentWidgetEmbeddedForm
          }
          ... on STRAPI_ComponentWidgetButton {
            ...StrapiComponentWidgetButton
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

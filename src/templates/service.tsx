import { graphql } from 'gatsby';
import React from 'react';
import BannerBackgroundImage from '../components/Banner/';
import { Grid, PageContainer } from '../components/Containers';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import StrapiDynamicZone from '../components/StrapiDynamicZone';
import { TemplateProps } from './types';

export default (props: TemplateProps): JSX.Element => {
  const {
    data: {
      strapi: {
        service: {
          banner_background_image,
          banner,
          title,
          sales_page,
          seo,
          preview,
        },
      },
    },
  } = props;

  return (
    <Layout location={props.location}>
      <SEO // Make SEO required eventually
        title={seo?.title ?? title}
        description={seo?.meta_description ?? preview?.text.body}
        image={seo?.image ?? preview?.image.file}
      />

      <Grid containerType="section">
        {banner_background_image && banner && (
          <BannerBackgroundImage
            image={banner_background_image}
            banner={banner}
          />
        )}

        <PageContainer>
          <StrapiDynamicZone components={sales_page} />
        </PageContainer>
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  query GET_SALES_PAGE($id: ID!) {
    strapi {
      service(id: $id) {
        ...StrapiService
        seo {
          ...StrapiComponentGeneralSeo
        }
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
          ... on STRAPI_ComponentMediaSingleVideo {
            ...StrapiComponentMediaSingleVideo
          }
          ... on STRAPI_ComponentTextParagraph {
            ...StrapiComponentTextParagraph
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
        sales_page {
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

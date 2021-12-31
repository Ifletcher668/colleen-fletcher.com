import { graphql } from 'gatsby';
import React from 'react';
import { Grid, PageContainer } from '../components/Containers';
import Divider from '../components/Divider';
import Heading from '../components/Heading';
import { ImageWithCaption } from '../components/Images';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Paragraph } from '../components/Text';
import { ButtonField } from '../components/Widgets';
import { GridArea } from '../styled-components/helpers';
import {
  BlogPost,
  ComponentMediaSingleImage,
  ComponentTextParagraph,
  ComponentWidgetButton,
} from '../typings/strapi';
import { zigZagGridColumns } from '../utils/zigZagGridColumns';
import { TemplateProps } from './types';

export default (props: TemplateProps): JSX.Element => {
  const {
    data: {
      strapi: {
        blog: { seo, name, blog_posts, preview },
      },
    },
  } = props;

  const buildBlogPostPreviewSection = ({
    fullUrlPath,
    preview,
    title,
    cover_image,
  }: BlogPost): JSX.Element => {
    const previewHeading: ComponentTextParagraph = {
      body: preview?.heading?.headingText ?? `<h2>${title}</h2>`, // paragraph component parses html
      alignParagraph: preview?.heading?.alignHeading ?? 'center',
      justifyParagraph: preview?.heading?.justifyHeading ?? 'center',
    };

    const defaultImageConfig: ComponentMediaSingleImage['configuration'] = {
      isCircle: false,
      hasBorder: true,
      alignImage: 'center',
      justifyImage: 'center',
      imageHeight: 666,
      imageWidth: 666,
    };

    const previewImage: ComponentMediaSingleImage = {
      file: preview?.image?.file ?? cover_image,
      configuration: preview?.image?.configuration ?? defaultImageConfig,
    };

    const buttonData: ComponentWidgetButton = {
      action: preview?.button?.action ?? fullUrlPath,
      buttonText: preview?.button?.buttonText ?? 'Click',
      variant: preview?.button?.variant ?? 'primary',
    };

    return (
      <>
        <GridArea
          col-xl="image"
          col-lg="image"
          col-md="image"
          row-xl="content-start"
          row-lg="content-start"
          row-md="content-start"
          row-sm="content-start"
          row-xs="content-start"
        >
          <ImageWithCaption data={previewImage} />
        </GridArea>

        <GridArea
          col-xl="text"
          col-lg="text"
          col-md="text"
          row-xl="content-start / content-end"
          row-lg="content-start / content-end"
          row-md="content-start / content-end"
          row-sm="content-middle"
          row-xs="content-middle"
        >
          <Grid>
            <Paragraph data={previewHeading} />

            {/* no fallback text if preview is missing */}
            {preview?.text && <Paragraph data={preview.text} />}

            <ButtonField data={buttonData} />
          </Grid>
        </GridArea>
      </>
    );
  };

  return (
    <Layout location={props.location}>
      <SEO // Make SEO required eventually
        title={seo?.title ?? name}
        description={seo?.meta_description ?? preview?.text?.body}
        image={seo?.image ?? preview?.image?.file}
      />

      <PageContainer>
        <Heading alignHeading="center" justifyHeading="center" level={1}>
          {name}
        </Heading>

        <Paragraph
          data={{
            body: seo?.meta_description ?? '',
            alignParagraph: 'center',
            justifyParagraph: 'center',
          }}
          className="paragraph"
        />

        <Grid containerType="section" gap={'2em 0'}>
          {blog_posts.map((blog_post, idx) => {
            const zigZagColumnLayout = zigZagGridColumns(idx);

            return (
              <Grid
                key={idx}
                containerType="article"
                columns={zigZagColumnLayout} // col names === 'image' and 'content'
                rows={{
                  xlarge:
                    '[content-start] 1fr [content-middle] auto [content-end] 0.02fr',
                  large:
                    '[content-start] 1fr [content-middle] auto [content-end] 0.02fr',
                  medium:
                    '[content-start] auto [content-middle] auto [content-end] auto',
                }}
                styling={{
                  margin: '2em 0em',
                  gap: '1em 0',
                }}
              >
                {buildBlogPostPreviewSection(blog_post)}

                <GridArea
                  col-xl="1 / span 3"
                  col-lg="1 / span 3"
                  col-md="1 / span 3"
                  row-xl="content-end"
                  row-lg="content-end"
                  row-md="content-end"
                  row-sm="content-end"
                  row-xs="content-end"
                >
                  <Divider type="standard" />
                </GridArea>
              </Grid>
            );
          })}
        </Grid>
      </PageContainer>
    </Layout>
  );
};

export const query = graphql`
  query GET_BLOG_PAGE($id: ID!) {
    strapi {
      blog(id: $id) {
        ...StrapiBlog
      }
    }
  }
`;

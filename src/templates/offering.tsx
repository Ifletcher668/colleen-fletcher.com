// Named "Work With Me on the page"
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
import { ComponentWidgetButton } from '../typings/strapi';
import { zigZagGridColumns } from '../utils/zigZagGridColumns';
import { TemplateProps } from './types';

export const query = graphql`
  query GET_OFFERING_PAGE($id: ID!) {
    strapi {
      offering(id: $id) {
        ...StrapiOffering
      }
    }
  }
`;

export default (props: TemplateProps): JSX.Element => {
  const {
    data: {
      strapi: {
        offering: { title, seo, preview, services, fullUrlPath },
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

      <PageContainer>
        <Heading level={1} justifyHeading="center" alignHeading="center">
          {title}
        </Heading>

        {preview && (
          <ImageWithCaption
            data={preview.image}
            styling={{
              justifySelf: 'center',
              width: `${
                typeof window !== 'undefined' // SSR
                  ? window.innerWidth > 768
                    ? '50%'
                    : '100%;'
                  : 'unset'
              }`, // needed for flexbox to not collapse. pls refactor
            }}
          />
        )}

        {services?.length > 0 && (
          <Grid containerType="section">
            {services.map(
              ({ slug: serviceSlug, preview: servicePreview }, idx) => {
                const zigZagColumnLayout = zigZagGridColumns(idx);

                // Mutating button data to append offering's url
                const buttonData: ComponentWidgetButton = {
                  action: `${fullUrlPath}${serviceSlug}`,
                  buttonText: servicePreview.button.buttonText,
                  variant: servicePreview.button.variant,
                };

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
                      <ImageWithCaption data={servicePreview.image} />
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
                        <Paragraph data={servicePreview.heading} />

                        <Paragraph data={servicePreview.text} />

                        <ButtonField data={buttonData} />
                      </Grid>
                    </GridArea>

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
              },
            )}
          </Grid>
        )}
      </PageContainer>
    </Layout>
  );
};

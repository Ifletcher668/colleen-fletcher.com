import React from 'react';
import Grid from '../Containers/Grid';
import {
  BlogPostsField,
  BlogsField,
  OfferingsField,
  ServicesField,
} from '../Collections';
import { SingleImageField, ImagesField, SingleVideoField } from '../Media';
import { Paragraph, HeadingField, QuoteField } from '../Text';
import { DividerField, ButtonField } from '../Widgets';
import {
  ImageCenterTextEitherSideField,
  TextCenterImageEitherSideField,
  HeadingWithImageLeftSideField,
  HeadingWithImageRightSideField,
  TextWithImageLeftSideField,
  TextWithImageRightSideField,
} from '../Sections';

/**
 * Necessary secondary query until
 * Strapi is able to fix querying
 * for components inside a Dynamic zone
 */
type Previews = {
  blogPreviews: StrapiBlog[];
  offeringPreviews: StrapiOffering[];
};

interface Props {
  components: NonNullable<Array<StrapiDynamicZone>>;
  previews?: Previews;
}

const StrapiDynamicZone = ({ components, previews }: Props): JSX.Element => {
  return (
    <>
      {components.map((component, idx) => {
        switch (component.__typename) {
          case 'STRAPI_ComponentMediaSingleImage':
            return (
              <SingleImageField
                key={`${idx}${component.__typename}`}
                data={{
                  file: component.file,
                  isCircle: component.isCircle,
                  hasBorder: component.hasBorder,
                }}
              />
            );

          case 'STRAPI_ComponentMediaImages':
            return (
              <ImagesField
                key={`${idx}${component.__typename}`}
                data={{
                  style: component.style,
                  files: component.files,
                  isCircle: component.isCircle,
                  hasBorder: component.hasBorder,
                }}
              />
            );

          // TODO: Add file support

          case 'STRAPI_ComponentMediaSingleVideo':
            return (
              <SingleVideoField
                key={`${idx}${component.__typename}`}
                data={{
                  title: component.title,
                  srcURL: component.srcURL,
                }}
              />
            );

          case 'STRAPI_ComponentTextHeading':
            return (
              <HeadingField
                key={`${idx}${component.__typename}`}
                data={{
                  headingText: component.headingText,
                  level: component.level,
                  tilt: component.tilt,
                  justifyHeading: component.justifyHeading,
                  alignHeading: component.alignHeading,
                }}
              />
            );

          case 'STRAPI_ComponentTextParagraph':
            return (
              <Paragraph
                key={`${idx}${component.__typename}`}
                data={{
                  body: component.body,
                  justifyParagraph: component.justifyParagraph,
                  alignParagraph: component.alignParagraph,
                }}
              />
            );

          case 'STRAPI_ComponentTextQuote':
            return (
              <QuoteField
                key={`${idx}${component.__typename}`}
                data={component.text}
              />
            );

          case 'STRAPI_ComponentSectionTextRightImageLeft':
            return (
              <TextWithImageLeftSideField
                key={`${idx}${component.__typename}`}
                data={{
                  image: component.image,
                  text: component.text,
                }}
              />
            );

          case 'STRAPI_ComponentSectionImageRightTextLeft':
            return (
              <TextWithImageRightSideField
                key={`${idx}${component.__typename}`}
                data={{
                  image: component.image,
                  text: component.text,
                }}
              />
            );

          case 'STRAPI_ComponentSectionHeadingLeftImageRight':
            return (
              <HeadingWithImageRightSideField
                key={`${idx}${component.__typename}`}
                data={{
                  heading: component.heading,
                  image: component.image,
                }}
              />
            );

          case 'STRAPI_ComponentSectionHeadingRightImageLeft':
            return (
              <HeadingWithImageLeftSideField
                key={`${idx}${component.__typename}`}
                data={{
                  heading: component.heading,
                  image: component.image,
                }}
              />
            );

          case 'STRAPI_ComponentSectionTextCenterImageEitherSide':
            return (
              <TextCenterImageEitherSideField
                key={`${idx}${component.__typename}`}
                data={{
                  image_left: component.image_left,
                  text: component.text,
                  image_right: component.image_right,
                }}
              />
            );

          case 'STRAPI_ComponentSectionImageCenterTextEitherSide':
            return (
              <ImageCenterTextEitherSideField
                key={`${idx}${component.__typename}`}
                data={{
                  text_left: component.text_left,
                  image: component.image,
                  text_right: component.text_right,
                }}
              />
            );

          case 'STRAPI_ComponentWidgetDivider':
            // TODO: refactor from this simple Typescript workaround
            return component.style === 'fancy' ||
              component.style === 'standard' ? (
              <DividerField
                key={`${idx}${component.__typename}`}
                data={{ style: component.style }}
              />
            ) : (
              <DividerField
                key={`${idx}${component.__typename}`}
                data={{ style: 'standard' }}
              />
            );

          case 'STRAPI_ComponentWidgetButton':
            return (
              <ButtonField
                key={`${idx}${component.__typename}`}
                data={{
                  buttonText: component.buttonText,
                  variant: component.variant,
                  action: component.action,
                }}
              />
            );

          case 'STRAPI_ComponentCollectionsOfferings':
            return (
              <OfferingsField
                key={`${idx}${component.__typename}`}
                data={component.offerings}
                previews={previews!.offeringPreviews}
              />
            );

          case 'STRAPI_ComponentCollectionsBlogs':
            return (
              <Grid
                key={`${idx}{idx}`}
                containerType="section"
                columns={{
                  xlarge: '[left] 1fr [right] 1fr',
                  small: '1fr',
                }}
                styling={{ gap: '5em' }}
              >
                <BlogsField
                  data={component.blogs}
                  previews={previews!.blogPreviews}
                />
              </Grid>
            );

          case 'STRAPI_ComponentCollectionsBlogPosts':
            return (
              <BlogPostsField
                key={`${idx}{component.__typename}`}
                data={component.blog_posts}
              />
            );

          case 'STRAPI_ComponentCollectionsServices':
            return (
              <ServicesField
                key={`${idx}{component.__typename}`}
                data={component.services}
              />
            );

          default:
            return <>{console.log('No component passed to dynamic zone')}</>;
        }
      })}
    </>
  );
};

export default StrapiDynamicZone;

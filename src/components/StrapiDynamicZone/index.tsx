import React from 'react';
import Grid from '../Containers/Grid';
import {
    BlogPostsField,
    BlogsField,
    OfferingsField,
    ServicesField,
} from '../Collections';
import { SingleImageField, ImagesField } from '../Media';
import { Paragraph, HeadingField, QuoteField } from '../Text';
import { DividerField, ButtonField } from '../Widgets';
import {
    ImageCenterTextEitherSideField,
    TextCenterImageEitherSideField,
    HeadingWithImageLeftSideField,
    HeaderWithImageRightSideField,
    TextWithImageLeftSideField,
    TextWithImageRightSideField,
} from '../Sections';

type Previews = {
    blogPreviews: StrapiBlog[];
    offeringPreviews: StrapiOffering[];
};

interface Props {
    components: StrapiDynamicZone[];
    previews?: Previews;
}

const StrapiDynamicZone: React.FC<Props> = ({
    components,
    previews,
}: Props): JSX.Element => {
    return (
        <>
            {components.map((component, idx) => {
                switch (component.__typename) {
                    case 'STRAPI_ComponentMediaSingleImage':
                        const singleImageData = {
                            file: component.file,
                            isCircle: component.isCircle,
                            hasBorder: component.hasBorder,
                        };
                        return (
                            <SingleImageField
                                data={singleImageData}
                                key={`${idx}${component.__typename}`}
                            />
                        );
                    case 'STRAPI_ComponentMediaImages':
                        const imagesData: StrapiComponentMediaImages = {
                            style: component.style,
                            files: component.files,
                            isCircle: component.isCircle,
                            hasBorder: component.hasBorder,
                        };
                        return (
                            <ImagesField
                                data={imagesData}
                                key={`${idx}${component.__typename}`}
                            />
                        );

                    // TODO: Add file and video support

                    case 'STRAPI_ComponentTextHeading':
                        const headingData = {
                            headingText: component.headingText,
                            level: component.level,
                            tilt: component.tilt,
                            justifyHeading: component.justifyHeading,
                            alignHeading: component.alignHeading,
                        };
                        return (
                            <HeadingField
                                key={`${idx}${component.__typename}`}
                                data={headingData}
                            />
                        );

                    case 'STRAPI_ComponentTextParagraph':
                        const bodyData = {
                            body: component.body,
                            justifyParagraph: component.justifyParagraph,
                            alignParagraph: component.alignParagraph,
                        };
                        return (
                            <Paragraph
                                key={`${idx}${component.__typename}`}
                                data={bodyData}
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
                        const textWithImageLeftSideData = {
                            image: component.image,
                            text: component.text,
                        };

                        return (
                            <TextWithImageLeftSideField
                                key={`${idx}${component.__typename}`}
                                data={textWithImageLeftSideData}
                            />
                        );

                    case 'STRAPI_ComponentSectionImageRightTextLeft':
                        const textWithImageRightSideData = {
                            image: component.image,
                            text: component.text,
                        };
                        return (
                            <TextWithImageRightSideField
                                key={`${idx}${component.__typename}`}
                                data={textWithImageRightSideData}
                            />
                        );

                    case 'STRAPI_ComponentSectionHeadingLeftImageRight':
                        const headerWithImageRightSideData = {
                            heading: component.heading,
                            image: component.image,
                        };
                        return (
                            <HeaderWithImageRightSideField
                                data={headerWithImageRightSideData}
                                key={`${idx}${component.__typename}`}
                            />
                        );

                    case 'STRAPI_ComponentSectionHeadingRightImageLeft':
                        const headerWithImageLeftSideData = {
                            heading: component.heading,
                            image: component.image,
                        };
                        return (
                            <HeadingWithImageLeftSideField
                                data={headerWithImageLeftSideData}
                                key={`${idx}${component.__typename}`}
                            />
                        );

                    case 'STRAPI_ComponentSectionTextCenterImageEitherSide':
                        const textCenterImageEitherSideFieldData = {
                            image_left: component.image_left,
                            text: component.text,
                            image_right: component.image_right,
                        };
                        return (
                            <TextCenterImageEitherSideField
                                data={textCenterImageEitherSideFieldData}
                                key={`${idx}${component.__typename}`}
                            />
                        );

                    case 'STRAPI_ComponentSectionImageCenterTextEitherSide':
                        const imageCenterTextEitherSideFieldData = {
                            text_left: component.text_left,
                            image: component.image,
                            text_right: component.text_right,
                        };
                        return (
                            <ImageCenterTextEitherSideField
                                data={imageCenterTextEitherSideFieldData}
                                key={`${idx}${component.__typename}`}
                            />
                        );

                    case 'STRAPI_ComponentWidgetDivider':
                        // TODO: refactor
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
                        const buttonData: StrapiComponentWidgetButton = {
                            buttonText: component.buttonText,
                            variant: component.variant,
                            action: component.action,
                        };
                        return (
                            <ButtonField
                                key={`${idx}${component.__typename}`}
                                data={buttonData}
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
                                    xlarge: `[left] 1fr [right] 1fr`,
                                    small: `1fr`,
                                }}
                                styling={{ gap: `5em` }}
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
                        return (
                            <>
                                {console.log(
                                    `No component passed to dynamic zone`,
                                )}
                            </>
                        );
                }
            })}
        </>
    );
};

export default StrapiDynamicZone;

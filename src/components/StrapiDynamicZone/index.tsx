import React from 'react';
import Grid from '../Container/Grid';
import {
    BlogPostsField,
    BlogsField,
    OfferingsField,
    ServicesField,
} from './Components/Collections';
import {SingleImageField, ImagesField} from './Components/Media';
import {TextField, HeadingField, QuoteField} from './Components/Text';
import {DividerField, ButtonField} from './Components/Widgets';
import {
    ImageCenterTextEitherSideField,
    TextCenterImageEitherSideField,
    HeaderWithImageLeftSideField,
    HeaderWithImageRightSideField,
    TextWithImageLeftSideField,
    TextWithImageRightSideField,
} from './Components/Section';
interface Props {
    components: StrapiDynamicZone[];
    previews?: Previews;
}

type Previews = {
    blogPreviews: StrapiBlog[];
    offeringPreviews: StrapiOffering[];
};

const StrapiDynamicZone: React.FC<Props> = ({
    components,
    previews,
}: Props): JSX.Element => {
    return (
        <>
            {components.map((component, idx) => {
                switch (component.__typename) {
                    case 'STRAPI_ComponentMediaSingleImage':
                        return (
                            <SingleImageField
                                data={component.file}
                                key={`${idx}${component.__typename}`}
                            />
                        );
                    case 'STRAPI_ComponentMediaImages':
                        const imagesData = {
                            style: component.style,
                            files: component.files,
                        };
                        return (
                            <ImagesField
                                data={imagesData}
                                key={`${idx}${component.__typename}`}
                            />
                        );
                    // TODO: Add file and video support
                    // case 'STRAPI_ComponentMediaSingleFile':
                    //     return (
                    //         <h3
                    //             className="center"
                    //             key={`${idx}${component.__typename}`}
                    //         >
                    //             Single File
                    //         </h3>
                    //     );
                    // case 'STRAPI_ComponentMediaFiles':
                    //     return (
                    //         <h3
                    //             className="center"
                    //             key={`${idx}$${component.__typename}`}
                    //         >
                    //             Multiple Files
                    //         </h3>
                    //     );
                    // case 'STRAPI_ComponentMediaSingleVideo':
                    //     return (
                    //         <h3
                    //             className="center"
                    //             key={`${idx}${component.__typename}`}
                    //         >
                    //             Single Video
                    //         </h3>
                    //     );
                    // case 'STRAPI_ComponentMediaVideos':
                    //     return (
                    //         <h3
                    //             className="center"
                    //             key={`${idx}${component.__typename}`}
                    //         >
                    //             Multiple Videos
                    //         </h3>
                    //     );
                    case 'STRAPI_ComponentTextHeading':
                        const headingData = {
                            headingText: component.headingText,
                            level: component.level,
                            tilt: component.tilt,
                        };
                        return (
                            <HeadingField
                                key={`${idx}${component.__typename}`}
                                data={headingData}
                            />
                        );
                    case 'STRAPI_ComponentTextParagraph':
                        return (
                            <TextField
                                key={`${idx}${component.__typename}`}
                                data={component.body}
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
                                data={textWithImageRightSideData}
                                key={`${idx}${component.__typename}`}
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
                            <HeaderWithImageLeftSideField
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
                        return (
                            <DividerField
                                key={`${idx}${component.__typename}`}
                                data={component.style}
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
                                styling={{gap: `5em`}}
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

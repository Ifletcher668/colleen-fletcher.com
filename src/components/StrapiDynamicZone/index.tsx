import React from 'react';
import {TextField, HeadingField, QuoteField} from './Components/Text/';
import {DividerField, ButtonField} from './Components/Widgets';
import {
    BlogPostsField,
    BlogsField,
    OfferingsField,
    ServicesField,
} from './Components/Collections';
import Grid from '../Container/Grid';
interface Props {
    components: StrapiDynamicZone[];
    previews?: Previews;
}

type Previews = {
    blogPreviews: StrapiBlog[];
    offeringPreviews: StrapiOffering[];
};

const StrapiDynamicZone: React.FC<Props> = ({components, previews}: Props) => {
    return (
        <>
            {components.map((component, idx) => {
                switch (component.__typename) {
                    case 'STRAPI_ComponentMediaSingleImage':
                        return (
                            <h1 key={`${idx}${component.__typename}`}>
                                Single Image
                            </h1>
                        );
                    case 'STRAPI_ComponentMediaImages':
                        return (
                            <h1 key={`${idx}${component.__typename}`}>
                                Multiple Images
                            </h1>
                        );
                    case 'STRAPI_ComponentMediaSingleFile':
                        return (
                            <h1 key={`${idx}${component.__typename}`}>
                                Single File
                            </h1>
                        );
                    case 'STRAPI_ComponentMediaFiles':
                        return (
                            <h1 key={`${idx}$${component.__typename}`}>
                                Multiple Files
                            </h1>
                        );
                    case 'STRAPI_ComponentMediaSingleVideo':
                        return (
                            <h1 key={`${idx}${component.__typename}`}>
                                Single Video
                            </h1>
                        );
                    case 'STRAPI_ComponentMediaVideos':
                        return (
                            <h1 key={`${idx}${component.__typename}`}>
                                Multiple Videos
                            </h1>
                        );
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
                        return (
                            <h1 key={`${idx}${component.__typename}`}>
                                Text Right Image Left Section
                            </h1>
                        );
                    case 'STRAPI_ComponentSectionImageRightTextLeft':
                        return (
                            <h1 key={`${idx}${component.__typename}`}>
                                Text Left Image Right Section
                            </h1>
                        );
                    case 'STRAPI_ComponentSectionHeadingLeftImageRight':
                        return (
                            <h1 key={`${idx}${component.__typename}`}>
                                Heading Left Image Right Section
                            </h1>
                        );
                    case 'STRAPI_ComponentSectionHeadingRightImageLeft':
                        return (
                            <h1 key={`${idx}${component.__typename}`}>
                                Heading Right Image Left Section
                            </h1>
                        );
                    case 'STRAPI_ComponentSectionTextCenterImageEitherSide':
                        return (
                            <h1 key={`${idx}${component.__typename}`}>
                                Text Center Image Either Side Section
                            </h1>
                        );
                    case 'STRAPI_ComponentSectionImageCenterTextEitherSide':
                        return (
                            <h1 key={`${idx}${component.__typename}`}>
                                Image Center Text Either Side Section
                            </h1>
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
                            <Grid
                                key={`${idx}${idx}`}
                                containerType="section"
                                columns={{xlarge: `[left] 1fr [right] 1fr`}}
                                styling={{gap: `5em`}}
                            >
                                <OfferingsField
                                    data={component.offerings}
                                    previews={previews!.offeringPreviews}
                                />
                            </Grid>
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
                        return <h1 key={component.__typename}>Nothing</h1>;
                }
            })}
        </>
    );
};

export default StrapiDynamicZone;

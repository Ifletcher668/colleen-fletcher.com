import React from 'react';
import {TextField, HeadingField, QuoteField} from './Components/Text/';
import {DividerField, ButtonField} from './Components/Widgets';
interface Props {
    components: StrapiDynamicZone[];
}

const StrapiDynamicZone: React.FC<Props> = ({components}: Props) => {
    // console.log(components);
    return (
        <>
            {components.map((component, idx) => {
                switch (component.__typename) {
                    case 'STRAPI_ComponentMediaSingleImage':
                        return <h1>Single Image</h1>;
                    case 'STRAPI_ComponentMediaImages':
                        return <h1>Multiple Images</h1>;
                    case 'STRAPI_ComponentMediaSingleFile':
                        return <h1>Single File</h1>;
                    case 'STRAPI_ComponentMediaFiles':
                        return <h1>Multiple Files</h1>;
                    case 'STRAPI_ComponentMediaSingleVideo':
                        return <h1>Single Video</h1>;
                    case 'STRAPI_ComponentMediaVideos':
                        return <h1>Multiple Videos</h1>;
                    case 'STRAPI_ComponentTextHeading':
                        const headingData = {
                            headingText: component.headingText,
                            level: component.level,
                            tilt: component.tilt,
                        };
                        return <HeadingField data={headingData} />;
                    case 'STRAPI_ComponentTextParagraph':
                        return <TextField data={component.body} />;
                    case 'STRAPI_ComponentTextQuote':
                        return <QuoteField data={component.text} />;
                    case 'STRAPI_ComponentSectionTextRightImageLeft':
                        return <h1>Text Right Image Left Section</h1>;
                    case 'STRAPI_ComponentSectionImageRightTextLeft':
                        return <h1>Text Left Image Right Section</h1>;
                    case 'STRAPI_ComponentSectionHeadingLeftImageRight':
                        return <h1>Heading Left Image Right Section</h1>;
                    case 'STRAPI_ComponentSectionHeadingRightImageLeft':
                        return <h1>Heading Right Image Left Section</h1>;
                    case 'STRAPI_ComponentSectionTextCenterImageEitherSide':
                        return <h1>Text Center Image Either Side Section</h1>;
                    case 'STRAPI_ComponentSectionImageCenterTextEitherSide':
                        return <h1>Image Center Text Either Side Section</h1>;
                    case 'STRAPI_ComponentWidgetDivider':
                        return <DividerField data={component.style} />;
                    case 'STRAPI_ComponentWidgetButton':
                        const buttonData: StrapiComponentWidgetButton = {
                            buttonText: component.buttonText,
                            variant: component.variant,
                            action: component.action,
                        };
                        return <ButtonField data={buttonData} />;
                    default:
                        return <h1>Nothing</h1>;
                }
            })}
        </>
    );
};

export default StrapiDynamicZone;

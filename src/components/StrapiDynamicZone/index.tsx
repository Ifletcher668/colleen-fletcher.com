import React from 'react';
import TextField from './Components/Text/paragraph';
import TextWithImageField from './Components/Text/text-with-image-right-side';

interface Props {
    components: StrapiDynamicZone[];
}

const StrapiDynamicZone: React.FC<Props> = ({components}: Props) => {
    console.log(components);

    return (
        <>
            {components.map(({__typename}, idx) => {
                switch (__typename) {
                    case 'STRAPI_ComponentTextCenterImageWithTextEitherSide':
                        return <h1>Center Image With Text Either Side</h1>;
                    case 'STRAPI_ComponentTextHeaderWithImageLeftSide':
                        return <h1>Header With Image Left Side</h1>;
                    case 'STRAPI_ComponentTextHeaderWithImageRightSide':
                        return <h1>Header With Image Right Side</h1>;
                    case 'STRAPI_ComponentTextParagraph':
                        return <h1>Paragraph!</h1>;
                    case 'STRAPI_ComponentTextTextWithImageLeftSide':
                        return <h1>Text With Image Left Side</h1>;
                    case 'STRAPI_ComponentTextTextWithImageRightSide':
                        return <h1>Text With Image Right Side</h1>;
                    case 'STRAPI_ComponentTextTextWithImageLeftSide':
                        return (
                            <h1>STRAPI_ComponentTextTextWithImageRightSide</h1>
                        );
                    case 'STRAPI_ComponentMediaFiles':
                        return <h1>Multiple Files</h1>;
                    case 'STRAPI_ComponentMediaImages':
                        return <h1>Multiple Images</h1>;
                    case 'STRAPI_ComponentMediaSingleFile':
                        return <h1>Single File</h1>;
                    case 'STRAPI_ComponentMediaSingleImage':
                        return <h1>Single Image</h1>;
                    case 'STRAPI_ComponentMediaSingleVideo':
                        return <h1>Single Video</h1>;
                    case 'STRAPI_ComponentMediaVideos':
                        return <h1>Multiple Videos</h1>;
                    case 'STRAPI_ComponentSectionPreview':
                        return <h1>Preview Section</h1>;
                    case 'STRAPI_ComponentWidgetsCallToAction':
                        return <h1>Call To Action</h1>;
                    case 'STRAPI_ComponentWidgetsDivider':
                        return <h1>Divider</h1>;
                    case 'STRAPI_ComponentWidgetsHeading':
                        return <h1>Heading</h1>;
                    case 'STRAPI_ComponentWidgetsQuote':
                        return <h1>Quote</h1>;
                    default:
                        return <h1>Nothing</h1>;
                }
            })}
        </>
    );
};

export default StrapiDynamicZone;

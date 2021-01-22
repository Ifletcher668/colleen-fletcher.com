import React from 'react';
import Image from 'gatsby-image';
import {Flexbox} from '../../Container';

interface Props extends DefaultProps {
    uploadFile?: StrapiUploadFile;
    imageComponent?: StrapiComponentMediaSingleImage;
}

const ImageWithCaption: React.FC<Props> = (props: Props) => {
    if (props.uploadFile) {
        return (
            // TODO: Refactor Flexbox component
            <Flexbox
                containerType="section"
                vertical
                // style={{maxHeight: `10em`}}
            >
                <Image
                    alt={props.uploadFile.alternativeText}
                    title={props.uploadFile.caption}
                    fluid={props.uploadFile.imageFile.childImageSharp.fluid}
                />
                <figcaption>{props.uploadFile.caption}</figcaption>
            </Flexbox>
        );
    } else if (props.imageComponent) {
        return (
            <Flexbox
                containerType="section"
                vertical
                // style={{maxHeight: `10em`}}
            >
                <Image
                    alt={props.imageComponent.file.alternativeText}
                    title={props.imageComponent.file.caption}
                    fluid={
                        props.imageComponent.file.imageFile.childImageSharp
                            .fluid
                    }
                />
                <figcaption>{props.imageComponent.file.caption}</figcaption>
            </Flexbox>
        );
    } else
        return (
            // probably not the best way to do this...
            <>
                <h1>no image</h1>
            </>
        );
};
export default ImageWithCaption;

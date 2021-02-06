import React from 'react';
import Image from 'gatsby-image';
import { Flexbox } from '../../Containers';
import { CSSObject } from 'styled-components';
import { FigCaption } from '../../Atoms';

interface Props extends FlexboxProps {
    uploadFile?: StrapiUploadFile;
    imageComponent?: StrapiComponentMediaSingleImage;
    /**
     * @param styling
     * ImageWithCaption abstracts Gatsby's Image component
     * and wraps it around my Flexbox component. Styling
     * is inherited by Flexbox to add custom styles to
     * the styled-component.
     */
    styling?: CSSObject;
    circle?: boolean;
}

const ImageWithCaption: React.FC<Props> = (props: Props) => {
    const {
        circle,
        styling,
        uploadFile,
        imageComponent,
        containerType = 'div',
    } = props;
    if (uploadFile) {
        return (
            <Flexbox containerType={containerType} vertical {...props}>
                <Image
                    className={circle ? 'circle' : ''}
                    alt={uploadFile.alternativeText}
                    title={uploadFile.caption}
                    fluid={uploadFile.imageFile.childImageSharp.fluid}
                />
                <FigCaption>{uploadFile.caption}</FigCaption>
            </Flexbox>
        );
    } else if (imageComponent) {
        return (
            <Flexbox containerType={containerType} around vertical {...props}>
                <Image
                    className={circle ? 'circle' : ''}
                    alt={imageComponent.file.alternativeText}
                    title={imageComponent.file.caption}
                    fluid={imageComponent.file.imageFile.childImageSharp.fluid}
                />
                <FigCaption>{imageComponent.file.caption}</FigCaption>
            </Flexbox>
        );
    } else
        return (
            // probably not the best way to do this...
            <></>
        );
};

export default ImageWithCaption;

import React from 'react';
import Image from 'gatsby-image';
import {Flexbox} from '../../Container';
import styled, {CSSObject} from 'styled-components';

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
                <StyledFigCaption>{uploadFile.caption}</StyledFigCaption>
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
                <StyledFigCaption>
                    {imageComponent.file.caption}
                </StyledFigCaption>
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

const StyledFigCaption = styled.figcaption`
    align-self: flex-end;
`;

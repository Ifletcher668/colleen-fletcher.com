import React from 'react';
import { Image } from '../index';
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
    const { uploadFile, imageComponent, containerType = 'div' } = props;

    if (uploadFile) {
        return (
            <Flexbox containerType={containerType} vertical {...props}>
                <Image uploadFile={uploadFile} />
                <FigCaption>{uploadFile.caption}</FigCaption>
            </Flexbox>
        );
    } else if (imageComponent) {
        return (
            <Flexbox containerType={containerType} around vertical {...props}>
                <Image imageComponent={imageComponent} />
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

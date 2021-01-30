import React from 'react';
import GatsbyImage from 'gatsby-image';

interface Props {
    uploadFile?: StrapiUploadFile;
    imageComponent?: StrapiComponentMediaSingleImage;
    circle?: boolean;
}

const Image: React.FC<Props> = (props: Props) => {
    const {circle, uploadFile, imageComponent} = props;
    if (uploadFile) {
        return (
            <GatsbyImage
                className={circle ? 'circle' : ''}
                alt={uploadFile.alternativeText}
                title={uploadFile.caption}
                fluid={uploadFile.imageFile.childImageSharp.fluid}
            />
        );
    } else if (imageComponent) {
        return (
            <GatsbyImage
                className={circle ? 'circle' : ''}
                alt={imageComponent.file.alternativeText}
                title={imageComponent.file.caption}
                fluid={imageComponent.file.imageFile.childImageSharp.fluid}
            />
        );
    } else
        return (
            <>
                {console.error(
                    `Error! No image found when passing to 'Image' component`,
                )}
            </>
        );
};

export default Image;

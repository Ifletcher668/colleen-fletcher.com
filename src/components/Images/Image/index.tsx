import React from 'react';
import GatsbyImage, { GatsbyImageFluidProps } from 'gatsby-image';
import styled from 'styled-components';

interface Props {
    uploadFile?: StrapiUploadFile;
    imageComponent?: StrapiComponentMediaSingleImage;
    circle?: boolean;
}

const Image: React.FC<Props> = (props: Props) => {
    const { uploadFile, imageComponent } = props;
    if (uploadFile) {
        const { alternativeText, caption, imageFile } = uploadFile;
        return (
            <ImageWrapper
                alt={alternativeText ? alternativeText : ''}
                title={caption ? caption : ''}
                fluid={
                    imageFile.childImageSharp.fluid
                        ? imageFile.childImageSharp.fluid
                        : ''
                }
            />
        );
    } else if (imageComponent) {
        const { file } = imageComponent;
        if (file === null || file === undefined) return <> </>;

        const { alternativeText, caption, imageFile } = file;
        return (
            <ImageWrapper
                alt={alternativeText ? alternativeText : ''}
                title={caption ? caption : ''}
                fluid={
                    imageFile.childImageSharp.fluid
                        ? imageFile.childImageSharp.fluid
                        : ''
                }
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

interface WrapperProps extends Props, Pick<GatsbyImageFluidProps, 'fluid'> {}

const ImageWrapper = styled(GatsbyImage)<WrapperProps>`
    border-radius: ${p => (p.circle ? '1000px' : '2px')};
`;

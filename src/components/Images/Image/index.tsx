import React from 'react';
import GatsbyImage, { GatsbyImageFluidProps } from 'gatsby-image';
import styled from 'styled-components';

interface Props {
    data: StrapiComponentMediaSingleImage;
}

const Image: React.FC<Props> = ({ data }: Props) => {
    const { file, hasBorder, isCircle } = data;
    if (file === null || file === undefined) {
        console.log('imageComponent file is null');
        return <></>;
    }

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
            hasBorder={hasBorder}
            isCircle={isCircle}
        />
    );
};

export default Image;

interface WrapperProps extends Pick<GatsbyImageFluidProps, 'fluid'> {
    hasBorder: boolean;
    isCircle: boolean;
}

const ImageWrapper = styled(GatsbyImage)<WrapperProps>`
    border: ${p =>
        p.hasBorder ? '1.5px solid' + p.theme.color.aterrima : 'none'};
    border-radius: ${p => (p.isCircle ? '1000px' : '2px')};
`;

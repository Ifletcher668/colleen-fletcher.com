import React from 'react';
import GatsbyImage, { GatsbyImageFluidProps } from 'gatsby-image';
import styled from 'styled-components';
import { below, color } from '../../../StyledComponents/_mixins';
interface Props {
    data: StrapiComponentMediaSingleImage;
}

interface WrapperProps extends Pick<GatsbyImageFluidProps, 'fluid'> {
    hasBorder: boolean;
    isCircle: boolean;
}

const ImageWrapper = styled(GatsbyImage)<WrapperProps>`
    border: ${p => (p.hasBorder ? '1.5px solid' + color('aterrima') : 'none')};
    border-radius: ${p => (p.isCircle ? '1000px' : '2px')};

    /* TODO: Poorly handling gatsby-image fluid */
    min-height: 300px;
    min-width: 300px;
    max-width: 600px;
    max-height: 600px;

    ${below.medium`
        align-self: 'center',
        margin: 'auto',
        min-height: '224px',
        min-width: '224px',
        max-height: '224px',
        max-width: '224px',
    `}
`;

const Image: React.FC<Props> = ({ data }: Props) => {
    const { file, hasBorder, isCircle } = data;

    if (file === null || file === undefined) {
        console.log('file passed to <Image /> component is null ');
        return <></>;
    }

    const { alternativeText, caption, imageFile } = file;

    if (imageFile === null || imageFile === undefined) {
        console.log(
            `imageFile is null on <Image /> Component! Here is the file that was passed to the <Image /> component`,
        );
        console.log(file);

        return <></>;
    }
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

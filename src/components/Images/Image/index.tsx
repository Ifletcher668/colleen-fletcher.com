import React from 'react';
import GatsbyImage, { GatsbyImageFluidProps } from 'gatsby-image';
import styled from 'styled-components';
import BreakPointHandler from '../../../utils/Breakpoints/breakpoint-handler';

const { below } = new BreakPointHandler();
interface Props {
    data: StrapiComponentMediaSingleImage;
}

const Image: React.FC<Props> = ({ data }: Props) => {
    const { file, hasBorder, isCircle } = data;
    if (file === null || file === undefined) {
        console.log('<Image /> file is null');
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

    /* TODO: Poorly handling gatsby-image fluid */
    min-height: 300px;
    min-width: 300px;
    max-width: 600px;
    max-height: 600px;

    ${props =>
        below(props.theme.breakpoint.medium, {
            alignSelf: 'center',
            margin: 'auto',
            minHeight: '300px',
            minWidth: '300px',
            maxHeight: '300px',
            maxWidth: '300px',
        })}
`;

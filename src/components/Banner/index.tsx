import React from 'react';
import BannerBackground from 'gatsby-background-image';
import StrapiDynamicZone from '../StrapiDynamicZone';
import { Flexbox } from '../Containers';
import { Flexbox as FlexboxWrapper } from '../Containers/Flexbox/styles';
import styled from 'styled-components';

interface Props {
    image: StrapiUploadFile | null;
    banner: StrapiDynamicZone[];
}

const BannerBackgroundImage: React.FC<Props> = ({
    image,
    banner,
}: Props): JSX.Element => {
    if (image === null) return <> </>;

    return (
        <BannerWrapper>
            <BannerBackground
                fluid={image.imageFile.childImageSharp.fluid}
                className="background"
            >
                <Flexbox>
                    <StrapiDynamicZone components={banner} />
                </Flexbox>
            </BannerBackground>
        </BannerWrapper>
    );
};

const BannerWrapper = styled.section`
    .background {
        display: flex;
        width: 100vw;
        min-height: 400px;
    }
    ${FlexboxWrapper} {
        padding: ${props => props.theme.size.margin.xsmall};
    }
`;

export default BannerBackgroundImage;

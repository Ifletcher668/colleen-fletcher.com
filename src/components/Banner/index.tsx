import React from 'react';
import BannerBackground from 'gatsby-background-image';
import StrapiDynamicZone from '../StrapiDynamicZone';
import {Flexbox} from '../Container';
import styled from 'styled-components';

interface Props {
    image: StrapiUploadFile;
    banner: StrapiDynamicZone[];
}

const BannerBackgroundImage: React.FC<Props> = (props: Props): JSX.Element => {
    return (
        <BannerWrapper>
            <BannerBackground
                fluid={props.image.imageFile.childImageSharp.fluid}
                className="background"
            >
                <Flexbox>
                    <StrapiDynamicZone components={props.banner} />
                </Flexbox>
            </BannerBackground>
        </BannerWrapper>
    );
};

// TODO: why isn't this working?
const BannerWrapper = styled.section`
    .background {
        display: flex;
        width: 100vw;
        height: 400px;
    }
`;

export default BannerBackgroundImage;

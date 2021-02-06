import React from 'react';
import BannerBackground from 'gatsby-background-image';
import StrapiDynamicZone from '../StrapiDynamicZone';
import {Flexbox} from '../Containers';
import styled from 'styled-components';

interface Props {
    image: StrapiUploadFile | null;
    banner: StrapiDynamicZone[];
}

const BannerBackgroundImage: React.FC<Props> = (props: Props): JSX.Element => {
    return props.image !== null ? (
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
    ) : (
        <></>
    );
};

const BannerWrapper = styled.section`
    .background {
        display: flex;
        width: 100vw;
        min-height: 400px;
    }
`;

export default BannerBackgroundImage;

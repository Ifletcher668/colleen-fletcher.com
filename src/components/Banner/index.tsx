import React from 'react';
import BannerBackground from 'gatsby-background-image';
import StrapiDynamicZone from '../StrapiDynamicZone';
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
        <BannerWrapper
            Tag="section"
            fluid={image.imageFile.childImageSharp.fluid}
        >
            <StrapiDynamicZone components={banner} />
        </BannerWrapper>
    );
};

const BannerWrapper = styled(BannerBackground)`
    display: flex;
    padding: ${props => props.theme.size.padding.xsmall};
`;

export default BannerBackgroundImage;

import React from 'react';
import { DynamicZone, UploadFile } from '../../typings/strapi';
// import BannerBackground from 'gatsby-background-image';
import StrapiDynamicZone from '../StrapiDynamicZone';
// import styled from 'styled-components';
// import { below, size } from '../../StyledComponents/_mixins';
interface Props {
  image: UploadFile | null;
  banner: DynamicZone[];
}

// const BannerWrapper = styled(BannerBackground)`
//   display: flex;
//   padding: ${size('padding', 'xsmall')};
//   ${below.small`
//         flex-flow: column nowrap;
//     `}
// `;

const BannerBackgroundImage: React.FC<Props> = ({
  image,
  banner,
}: Props): JSX.Element => {
  if (image?.imageFile === null) return <> </>;

  return (
    <StrapiDynamicZone components={banner} />
    // <BannerWrapper Tag="section">
    // </BannerWrapper>
  );
};

export default BannerBackgroundImage;

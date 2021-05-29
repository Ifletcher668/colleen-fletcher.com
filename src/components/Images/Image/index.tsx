import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { color } from '../../../StyledComponents/_mixins';
interface Props {
  data: StrapiComponentMediaSingleImage;
}

interface WrapperProps {
  hasBorder: boolean;
  isCircle: boolean;
}

const ImageWrapper = styled(GatsbyImage)<WrapperProps>`
  border: ${p => (p.hasBorder ? '1.5px solid' + color('aterrima') : 'none')};
  border-radius: ${p => (p.isCircle ? '1000px' : '2px')};
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
      'imageFile is null on <Image /> Component! Here is the file that was passed to the <Image /> component',
    );
    console.log(file);

    return <></>;
  }

  return (
    <ImageWrapper
      alt={alternativeText ? alternativeText : ''}
      title={caption ? caption : ''}
      image={imageFile.childImageSharp.gatsbyImageData}
      hasBorder={hasBorder}
      isCircle={isCircle}
    />
  );
};

export default Image;

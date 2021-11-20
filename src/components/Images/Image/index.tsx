import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled, { css } from 'styled-components';
import { color } from '../../../styled-components/_mixins';
import {
  ComponentGeneralImageConfiguration,
  ComponentMediaSingleImage,
} from '../../../typings/strapi';

interface Props {
  data: ComponentMediaSingleImage;
}

const ImageWrapper = styled(GatsbyImage)<ComponentGeneralImageConfiguration>`
  border-radius: ${p => (p.isCircle ? '1000px' : '2px')};

  ${p =>
    p.hasBorder &&
    css`
      border: 1.5px solid ${color('aterrima')};
    `}
  ${p =>
    p.imageWidth &&
    css`
      max-width: ${p.imageWidth}px;
    `}
  ${p =>
    p.imageHeight &&
    css`
      max-height: ${p.imageHeight}px;
    `}
`;

const Image = ({ data }: Props): JSX.Element => {
  const { file, configuration } = data;

  if (!file) {
    console.log('file passed to <Image /> component is null ');
    return <></>;
  }

  const { alternativeText, caption, imageFile } = file;

  if (!imageFile) {
    console.log(
      'imageFile is null on <Image /> Component! Here is the file that was passed to the <Image /> component',
    );
    console.log(file);

    return <></>;
  }

  return (
    <ImageWrapper
      alt={alternativeText || ''}
      title={caption || ''}
      image={imageFile.childImageSharp.gatsbyImageData}
      {...configuration}
    />
  );
};

export default Image;

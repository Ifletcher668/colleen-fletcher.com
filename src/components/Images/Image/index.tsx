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
  border-radius: ${({ isCircle }) => (isCircle ? '1000px' : '2px')};

  ${({ hasBorder }) =>
    hasBorder &&
    css`
      border: 1.5px solid ${color('aterrima')};
    `}

  ${({ imageWidth }) =>
    imageWidth &&
    css`
      max-width: ${imageWidth}px;
    `}

  ${({ imageHeight }) =>
    imageHeight &&
    css`
      max-height: ${imageHeight}px;
    `}

  justify-self: ${({ justifyImage }) => {
    switch (justifyImage) {
      case 'right':
        return 'end';

      case 'center':
        return 'center';

      case 'left':
        return 'start';

      default:
        return 'inherit';
    }
  }};

  text-align: ${({ justifyImage }) => {
    switch (justifyImage) {
      case 'right':
        return 'right';

      case 'center':
        return 'center';

      case 'left':
        return 'left';

      default:
        return 'inherit';
    }
  }};

  align-self: ${({ alignImage }) => {
    switch (alignImage) {
      case 'top':
        return 'start';

      case 'bottom':
        return 'end';

      case 'center':
        return 'center';

      default:
        return 'inherit';
    }
  }};
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

import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ComponentMediaSingleImage } from '../../../typings/strapi';
import { theme } from '../../../styled-components/defaultTheme';

interface Props {
  data: ComponentMediaSingleImage;
}

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

  const imgStyle = {
    borderRadius: configuration?.isCircle ? '1000px' : '2px',
    border: configuration?.hasBorder
      ? `1.5px solid ${theme.color.aterrima}`
      : 'unset',
    maxWidth: configuration?.imageWidth ? configuration?.imageWidth : '100%',
    maxHeight: configuration?.imageHeight ? configuration?.imageHeight : '100%',
  };

  return (
    <GatsbyImage
      style={{
        alignSelf: 'center',
        textAlign: 'center',
      }}
      imgStyle={imgStyle}
      alt={alternativeText || ''}
      title={caption || ''}
      image={imageFile.childImageSharp.gatsbyImageData}
      {...configuration}
    />
  );
};

export default Image;

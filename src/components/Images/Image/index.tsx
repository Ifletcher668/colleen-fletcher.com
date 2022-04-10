import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ComponentMediaSingleImage } from '../../../typings/strapi';
import { theme } from '../../../styled-components/defaultTheme';

interface Props {
  data: ComponentMediaSingleImage;
}

const Image = ({ data }: Props): JSX.Element => {
  const { file, configuration } = data;
  const {
    alignImage,
    hasBorder,
    imageHeight,
    imageWidth,
    isCircle,
    justifyImage,
  } = configuration ?? {};

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
    borderRadius: isCircle ? '1000px' : '2px',
    border: hasBorder ? `1.5px solid ${theme.color.aterrima}` : 'unset',
    maxWidth: imageWidth ? imageWidth : '100%',
    maxHeight: imageHeight ? imageHeight : '100%',
  };

  return (
    <GatsbyImage
      style={{
        alignSelf: alignImage ? alignImage : 'center',
        justifySelf: justifyImage ? justifyImage : 'center',
        maxWidth: imageWidth ? imageWidth : '100%',
        maxHeight: imageHeight ? imageHeight : '100%',
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

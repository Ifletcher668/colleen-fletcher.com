import React from 'react';
import { ComponentMediaSingleImage } from '../../../typings/strapi';
import { Image, ImageWithCaption } from '../../Images';

export interface Props {
  data: ComponentMediaSingleImage;
}

const SingleImageField = ({ data }: Props): JSX.Element => {
  if (!data) {
    console.log('No single-image data found');
    return <></>;
  } else if (!data.file) {
    console.log('data');
    console.log(data);
    console.log('No single-image file!');
    return <></>;
  }

  return data.file.caption ? (
    <ImageWithCaption data={data} />
  ) : (
    <Image data={data} />
  );
};

export default SingleImageField;

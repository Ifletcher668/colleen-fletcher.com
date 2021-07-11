import React from 'react';
import { Image } from '../index';
import { Flexbox } from '../../Containers';
import { CSSObject } from 'styled-components';
import { FigCaption } from '../../Atoms';
import { ComponentMediaSingleImage } from '../../../typings/strapi';

interface Props extends FlexboxProps {
  data: ComponentMediaSingleImage;
  /**
   * @param styling
   * ImageWithCaption abstracts Gatsby's Image component
   * and wraps it around my Flexbox component. Styling
   * is inherited by Flexbox to add custom styles to
   * the styled-component.
   */
  styling?: CSSObject;
  circle?: boolean;
}

const ImageWithCaption: React.FC<Props> = (props: Props) => {
  const { data, containerType = 'article', styling } = props;
  if (!data)
    return (
      <>
        {console.log('data is undefined, no image passed to ImageWithCaption!')}
      </>
    );

  return (
    <Flexbox
      containerType={containerType}
      vertical
      styling={styling}
      {...props}
    >
      <Image data={data} />

      {data.file?.caption && <FigCaption>{data.file.caption}</FigCaption>}
    </Flexbox>
  );
};

export default ImageWithCaption;

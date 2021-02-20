import React from 'react';
import { Image } from '../index';
import { Flexbox } from '../../Containers';
import { CSSObject } from 'styled-components';
import { FigCaption } from '../../Atoms';

interface Props extends FlexboxProps {
    data: StrapiComponentMediaSingleImage;
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
                {console.log(
                    `data is undefined, no image passed to ImageWithCaption!`,
                )}
            </>
        );

    return (
        <Flexbox containerType={containerType} vertical styling={styling}>
            <Image data={data} />
            {data.file && data.file.caption && (
                <FigCaption>{data.file.caption}</FigCaption>
            )}
        </Flexbox>
    );
};

export default ImageWithCaption;

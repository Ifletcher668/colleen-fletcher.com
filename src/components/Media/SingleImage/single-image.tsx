import React from 'react';
import { Image, ImageWithCaption } from '../../Images';

export interface Props {
    data: StrapiComponentMediaSingleImage;
}

const SingleImageField: React.FC<Props> = ({ data }: Props) => {
    if (!data) {
        console.log(`No single-image data found`);
        return <></>;
    } else if (!data.file) {
        console.log(`data`);
        console.log(data);
        console.log(`No single-image file!`);
        return <></>;
    }

    return data.file.caption ? (
        <ImageWithCaption data={data} />
    ) : (
        <Image data={data} />
    );
};

export default SingleImageField;

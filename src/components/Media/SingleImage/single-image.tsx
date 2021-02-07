import React from 'react';
import { Image, ImageWithCaption } from '../../Images';

export interface Props {
    data: StrapiComponentMediaSingleImage;
}

const SingleImageField: React.FC<Props> = ({ data }: Props) => {
    return data ? (
        data.file.caption ? (
            <ImageWithCaption data={data} />
        ) : (
            <Image data={data} />
        )
    ) : (
        <> {console.log(`No Image found`)}</>
    );
};

export default SingleImageField;

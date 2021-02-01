import React from 'react';
import {Image, ImageWithCaption} from '../../../../Images';

export interface Props {
    data: StrapiUploadFile;
}

const SingleImageField: React.FC<Props> = ({data}: Props) => {
    return data.caption ? (
        <ImageWithCaption uploadFile={data} />
    ) : (
        <Image uploadFile={data} />
    );
};

export default SingleImageField;
import React from 'react';
import {ImageWithCaption} from '../../../Images';

export interface Props {
    data: StrapiUploadFile;
}

const SingleImageField: React.FC<Props> = ({data}: Props) => {
    return <ImageWithCaption uploadFile={data} />;
};

export default SingleImageField;

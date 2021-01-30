import React from 'react';
import {CSSObject} from 'styled-components';
import {Grid} from '../../../Container';
import {ImageWithCaption} from '../../../Images';

interface Props {
    data: {
        style: Omit<ImageStyle, 'standard' | 'fancy'>;
        files: StrapiUploadFile[];
    };
}

const ImagesField: React.FC<Props> = ({data}: Props) => {
    const {style, files} = data;

    const styles: CSSObject = {
        gap: `0 1em`,
    };

    return (
        <Grid
            containerType="section"
            styling={styles}
            columns={{
                xlarge: `repeat(${files.length}, 1fr)`,
                xsmall: `1fr`,
            }}
        >
            {files.map((image, idx) => {
                return (
                    <ImageWithCaption between key={idx} uploadFile={image} />
                );
            })}
        </Grid>
    );
};

export default ImagesField;

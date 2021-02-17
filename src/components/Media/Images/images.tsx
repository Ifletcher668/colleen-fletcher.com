import React from 'react';
import { CSSObject } from 'styled-components';
import { Grid } from '../../Containers';
import { ImageWithCaption } from '../../Images';

interface Props {
    data: StrapiComponentMediaImages;
}

const ImagesField: React.FC<Props> = ({ data }: Props) => {
    const { files, isCircle, hasBorder } = data;

    const styles: CSSObject = {
        gap: `1rem`,
    };

    return (
        <Grid
            containerType="section"
            styling={styles}
            columns={{
                xlarge: `repeat(auto-fit, minmax(224px, 1fr))`,
                xsmall: `1fr`,
            }}
        >
            {files.map((image, idx) => {
                const imageData = {
                    file: image,
                    isCircle,
                    hasBorder,
                };
                return <ImageWithCaption key={idx} between data={imageData} />;
            })}
        </Grid>
    );
};

export default ImagesField;

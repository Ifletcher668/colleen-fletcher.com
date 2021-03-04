import React from 'react';
import { Grid } from '../../Containers';
import { SingleImageField } from '../../Media';
import { Paragraph } from '../../Text';
import { GridArea } from '../../../StyledComponents/helpers';

export interface Props {
    data: {
        text: StrapiComponentTextParagraph;
        image_right: StrapiComponentMediaSingleImage;
        image_left: StrapiComponentMediaSingleImage;
    };
}

const TextCenterImageEitherSideField: React.FC<Props> = ({ data }: Props) => {
    const { text, image_right, image_left } = data;
    return (
        <Grid
            containerType="section"
            columns={{
                xlarge: `[image-left] 1.5fr [spacer] 0.5fr [text] 3fr [spacer] 0.5fr [image-right] 1.5fr`,
                medium: `1fr`,
            }}
        >
            <GridArea column="image-left">
                <SingleImageField data={image_left} />
            </GridArea>
            <GridArea column="text">
                <Paragraph data={text} />
            </GridArea>
            <GridArea column="image-right">
                <SingleImageField data={image_right} />
            </GridArea>
        </Grid>
    );
};

export default TextCenterImageEitherSideField;

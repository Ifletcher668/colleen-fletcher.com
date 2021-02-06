import React from 'react';
import {Grid} from '../../Containers';
import {SingleImageField} from '../../Media';
import {TextField} from '../../Text';
import {GridArea} from '../../../StyledComponents/helpers';

export interface Props {
    data: {
        text: StrapiComponentTextParagraph;
        image_right: StrapiUploadFile;
        image_left: StrapiUploadFile;
    };
}

const TextCenterImageEitherSideField: React.FC<Props> = ({data}: Props) => {
    const {text, image_right, image_left} = data;
    return (
        <Grid
            containerType="section"
            columns={{
                xlarge: `[image-left] 1.5fr [spacer] 0.5fr [text] 3fr [spacer] 0.5fr [image-right] 1.5fr`,
                small: `1f`,
            }}
        >
            <GridArea column="image-left">
                <SingleImageField data={image_left} />
            </GridArea>
            <GridArea column="text">
                <TextField data={text.body} />
            </GridArea>
            <GridArea column="image-right">
                <SingleImageField data={image_right} />
            </GridArea>
        </Grid>
    );
};

export default TextCenterImageEitherSideField;

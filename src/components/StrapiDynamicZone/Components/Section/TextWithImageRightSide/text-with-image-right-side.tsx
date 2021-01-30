import React from 'react';
import {Grid} from '../../../../Container';
import {SingleImageField} from '../../Media/';
import {TextField} from '../../Text';
import {GridArea} from '../../../../../StyledComponents/helpers';

export interface Props {
    data: {
        image: StrapiUploadFile;
        text: StrapiComponentTextParagraph;
    };
}

const TextWithImageRightSideField: React.FC<Props> = ({data}: Props) => {
    const {image, text} = data;
    return (
        <Grid
            containerType="section"
            columns={{
                xlarge: `[text] 2fr [spacer] 0.5fr [image] 1fr`,
                small: `1f`,
            }}
        >
            <GridArea column="text">
                <TextField data={text.body} />
            </GridArea>
            <GridArea column="image">
                <SingleImageField data={image} />
            </GridArea>
        </Grid>
    );
};

export default TextWithImageRightSideField;

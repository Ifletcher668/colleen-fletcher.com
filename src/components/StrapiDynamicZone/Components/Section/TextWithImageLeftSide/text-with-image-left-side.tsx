import React from 'react';
import {Grid} from '../../../../Container';
import {SingleImageField} from '../../Media';
import {TextField} from '../../Text';
import {GridArea} from '../../../../../StyledComponents/helpers';

export interface Props {
    data: {
        image: StrapiUploadFile;
        text: StrapiComponentTextParagraph;
    };
}

const TextWithImageLeftSideField: React.FC<Props> = ({data}: Props) => {
    const {image, text} = data;
    return (
        <Grid
            containerType="section"
            columns={{
                xlarge: `[image] 1fr [spacer] 0.5fr [text] 2fr`,
                small: `1f`,
            }}
        >
            <GridArea column="image">
                <SingleImageField data={image} />
            </GridArea>
            <GridArea column="text">
                <TextField data={text.body} />
            </GridArea>
        </Grid>
    );
};

export default TextWithImageLeftSideField;

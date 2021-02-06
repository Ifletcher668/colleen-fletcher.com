import React from 'react';
import {Grid} from '../../Containers';
import {SingleImageField} from '../../Media';
import {Paragraph} from '../../Text';
import {GridArea} from '../../../StyledComponents/helpers';

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
                <Paragraph data={text} />
            </GridArea>
            <GridArea column="image">
                <SingleImageField data={image} />
            </GridArea>
        </Grid>
    );
};

export default TextWithImageRightSideField;

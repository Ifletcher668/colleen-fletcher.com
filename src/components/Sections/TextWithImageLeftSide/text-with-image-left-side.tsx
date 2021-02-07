import React from 'react';
import { Grid } from '../../Containers';
import { SingleImageField } from '../../Media';
import { Paragraph } from '../../Text';
import { GridArea } from '../../../StyledComponents/helpers';

export interface Props {
    data: {
        image: StrapiComponentMediaSingleImage;
        text: StrapiComponentTextParagraph;
    };
}

const TextWithImageLeftSideField: React.FC<Props> = ({ data }: Props) => {
    const { image, text } = data;

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
                <Paragraph data={text} />
            </GridArea>
        </Grid>
    );
};

export default TextWithImageLeftSideField;

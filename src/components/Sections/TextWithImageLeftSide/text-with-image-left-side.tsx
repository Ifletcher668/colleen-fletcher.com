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
            containerType="article"
            columns={{
                xlarge: `[image] 1fr [spacer] 0.5fr [text] 2fr`,
                small: `1f`,
            }}
            rows={{
                large: `[content-start] 1fr [content-end] 0.02fr`,
                medium: `[content-start] auto [content-end] auto`,
            }}
        >
            <GridArea
                col-xl="image"
                col-lg="image"
                col-md="image"
                row-xl="content-start"
                row-lg="content-start"
                row-md="content-start"
                row-sm="content-start"
                row-xs="content-start"
            >
                <SingleImageField data={image} />
            </GridArea>

            <GridArea
                col-xl="text"
                col-lg="text"
                col-md="text"
                row-xl="content-start / content-end"
                row-lg="content-start / content-end"
                row-md="content-start / content-end"
                row-sm="content-end"
                row-xs="content-end"
            >
                <Paragraph data={text} />
            </GridArea>
        </Grid>
    );
};

export default TextWithImageLeftSideField;

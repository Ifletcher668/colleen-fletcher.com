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

const TextWithImageRightSideField: React.FC<Props> = ({
    data,
}: Props): JSX.Element => {
    const { image, text } = data;

    return (
        <Grid
            containerType="article"
            columns={{
                xlarge: `[text] minmax(64%, 2fr) [spacer] 50px [image] minmax(34%, 1fr)`,
                small: `1f`,
            }}
            rows={{
                large: `[content-start] 1fr [content-middle] auto [content-end] auto`,
                medium: `[content-start] auto [content-end] auto`,
            }}
        >
            <GridArea
                col-xl="text"
                col-lg="text"
                col-md="text"
                row-xl="content-start / content-end"
                row-lg="content-start / content-end"
                row-md="content-start / content-end"
                row-sm="content-middle"
                row-xs="content-middle"
            >
                <Paragraph data={text} />
            </GridArea>

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
        </Grid>
    );
};

export default TextWithImageRightSideField;

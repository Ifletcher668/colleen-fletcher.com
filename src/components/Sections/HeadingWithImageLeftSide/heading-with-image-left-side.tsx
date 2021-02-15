import React from 'react';
import { GridArea } from '../../../StyledComponents/helpers';
import { Grid } from '../../Containers';
import { SingleImageField } from '../../Media';
import { HeadingField } from '../../Text';

export interface Props {
    data: {
        heading: StrapiComponentTextHeading;
        image: StrapiComponentMediaSingleImage;
    };
}

const HeadingWithImageLeftSideField: React.FC<Props> = ({ data }: Props) => {
    const { heading, image } = data;

    return (
        <Grid
            containerType="section"
            columns={{
                xlarge: `[image] minmax(34%, 1fr) [spacer] 2% [text] minmax(64%, 2fr)`,
                large: `[image] minmax(36%, 1fr) [spacer] 4% [text] minmax(60%, 1fr)`,
                small: `1fr`,
            }}
            rows={{
                large: `[content-start] 1fr [content-end] 0.02fr`,
                medium: `[content-start] auto [content-end] auto`,
            }}
            styling={{
                width: `100%`,
            }}
        >
            <GridArea
                col-xl="text"
                col-lg="text"
                col-md="text"
                col-sm="1"
                row-xl="content-start / content-end"
                row-lg="content-start / content-end"
                row-md="content-start / content-end"
                row-sm="content-end"
                row-xs="content-end"
            >
                <HeadingField data={heading} />
            </GridArea>

            <GridArea
                col-xl="image"
                col-lg="image"
                col-md="image"
                col-sm="1"
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

export default HeadingWithImageLeftSideField;

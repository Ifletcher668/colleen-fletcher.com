import React from 'react';
import {GridArea} from '../../../../../StyledComponents/helpers';
import {Grid} from '../../../../Container';
import {SingleImageField} from '../../Media';
import {HeadingField} from '../../Text';

export interface Props {
    data: {
        heading: StrapiComponentTextHeading;
        image: StrapiUploadFile;
    };
}

const HeaderWithImageRightSideField: React.FC<Props> = ({data}: Props) => {
    const {heading, image} = data;
    return (
        <Grid
            containerType="section"
            columns={{
                xlarge: `[text] 2fr [spacer] 0.5fr [image] 1fr`,
                small: `1f`,
            }}
            styling={{alignItems: `center`}}
        >
            <GridArea column="text">
                <HeadingField data={heading} />
            </GridArea>
            <GridArea column="image">
                <SingleImageField data={image} />
            </GridArea>
        </Grid>
    );
};

export default HeaderWithImageRightSideField;
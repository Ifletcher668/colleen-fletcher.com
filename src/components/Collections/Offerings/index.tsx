import React from 'react';
import Grid from '../../Containers/Grid';
import { HeadingField, Paragraph } from '../../Text';
import { ImageWithCaption } from '../../Images';
import { ButtonField } from '../../Widgets';
import { zigZagGridColumns } from '../../../utils/zigZagGridColumns';
import { GridArea } from '../../../StyledComponents/helpers';
import Divider from '../../Divider';
import styled from 'styled-components';

export interface Props {
    data: StrapiOffering[];
    previews: StrapiOffering[];
}

// Component only used in StrapiDynamicZone
const OfferingsField: React.FC<Props> = ({ data, previews }: Props) => {
    return (
        <Grid containerType="section" gap={`2em 0`}>
            {data.map((offering, idx) => {
                // TODO: Refactor when Strapi nested component issue fixed
                const [{ preview }] = previews.filter(
                    p => p.id === offering.id,
                );
                const { text, heading, image, button } = preview;
                if (
                    button.action === '/' ||
                    button.action === '' ||
                    button.action === offering.slug // mutate data based on input in strapi
                ) {
                    button.action = offering.fullUrlPath;
                }

                const zigZagColumnLayout = zigZagGridColumns(idx);

                return (
                    <Grid
                        key={idx}
                        containerType="article"
                        columns={zigZagColumnLayout} // col names === 'image' and 'content'
                        rows={{ xlarge: `[content] 1fr [divider] 0.01fr` }}
                        styling={{
                            margin: `2em 0em`,
                            gap: `1em 0`,
                        }}
                    >
                        <GridArea column="image" row="content">
                            <ImageWithCaption data={image} />
                        </GridArea>
                        <GridArea column="text" row="content">
                            <HeadingField data={heading} />
                            <Paragraph data={text} />
                            <ButtonField data={button} />
                        </GridArea>
                        <GridArea column="full" row="divider">
                            <Divider type="standard" />
                        </GridArea>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default OfferingsField;

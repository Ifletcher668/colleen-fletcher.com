import React from 'react';
import MarkdownField from 'react-markdown';
import Grid from '../../Containers/Grid';
import {HeadingField, Paragraph} from '../../Text';
import {ImageWithCaption} from '../../Images';
import {ButtonField} from '../../Widgets';
import {GridArea, GridDivider} from '../../../StyledComponents/helpers';
import Divider from '../../Divider';
import {zigZagGridColumns} from '../../../utils/zigZagGridColumns';

export interface Props {
    data: StrapiOffering[];
    previews: StrapiOffering[];
}

const OfferingsField: React.FC<Props> = ({data, previews}: Props) => {
    return (
        <Grid containerType="section" gap={`2em 0`}>
            {data.map((blog, idx) => {
                // TODO: Refactor when Strapi nested component issue fixed
                const [{preview}] = previews.filter(p => p.id === blog.id);
                const {text, heading, image, button} = preview;
                if (button.action === '/' || button.action === '') {
                    //TODO: Refactor out forward slash
                    const buttonPath = blog.fullUrlPath;
                    button.action = buttonPath;
                }
                const zigZag = zigZagGridColumns(idx);
                return (
                    <Grid
                        key={idx}
                        containerType="article"
                        columns={zigZag}
                        rows={{xlarge: `[content] 1fr [divider] 0.001fr`}}
                        styling={{
                            margin: `2em 0em`,
                            gap: `1em 0`,
                            gridColumn: idx % 2 === 0 ? `left` : `right`,
                        }}
                    >
                        <GridArea column="image">
                            <ImageWithCaption circle imageComponent={image} />
                        </GridArea>
                        <GridArea column="text">
                            <HeadingField center data={heading} />
                            <Paragraph data={text} />
                            <ButtonField data={button} />
                        </GridArea>
                        <GridDivider>
                            <Divider type="standard" />
                        </GridDivider>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default OfferingsField;

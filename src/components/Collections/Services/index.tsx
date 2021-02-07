import React from 'react';
import Grid from '../../Containers/Grid';
import { HeadingField, Paragraph } from '../../Text';
import { ImageWithCaption } from '../../Images';
import { ButtonField } from '../../Widgets';
import { zigZagGridColumns } from '../../../utils/zigZagGridColumns';
import { GridArea } from '../../../StyledComponents/helpers';
import Divider from '../../Divider';

export interface Props {
    data: StrapiService[];
    previews: StrapiService[];
}

const ServicesField: React.FC<Props> = ({
    data,
    previews,
}: Props): JSX.Element => {
    return (
        <Grid containerType="section" gap={`2em 0`}>
            {data.map((service, idx) => {
                // const [{ preview }] = previews.filter(
                //     p => p.id === service.id,
                // );

                const { text, heading, image, button } = service.preview;
                if (
                    button.action === '' ||
                    button.action === '/' ||
                    button.action === service.slug
                ) {
                    button.action = service.fullUrlPath;
                }

                const zigZagColumLayout = zigZagGridColumns(idx);
                return (
                    <Grid
                        key={idx}
                        containerType="article"
                        columns={zigZagColumLayout} // col names === 'image' and 'content'
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

export default ServicesField;

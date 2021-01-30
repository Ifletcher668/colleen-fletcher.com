import React from 'react';
import MarkdownField from 'react-markdown';
import Grid from '../../../../Container/Grid';
import {HeadingField} from '../../Text';
import {ImageWithCaption} from '../../../../Images/';
import {ButtonField} from '../../Widgets';
import {GridArea, GridDivider} from '../../../../../StyledComponents/helpers';
import Divider from '../../../../Divider';

export interface Props {
    data: StrapiOffering[];
    previews: StrapiOffering[];
}

const OfferingsField: React.FC<Props> = ({data, previews}: Props) => {
    return (
        <Grid containerType="section">
            {data.map((blog, idx) => {
                // TODO: Refactor when Strapi nested component issue fixed
                const [{preview}] = previews.filter(p => p.id === blog.id);
                const {text, heading, image, button} = preview;
                if (button.action === '/' || button.action === '') {
                    //TODO: Refactor out forward slash
                    const buttonPath = blog.fullUrlPath;
                    button.action = buttonPath;
                }
                const zigZagColumns =
                    idx % 2 === 0
                        ? {
                              xlarge: `[image] 1fr [spacer] 0.5fr [text] 2fr`,
                              small: `1fr`,
                          }
                        : {
                              xlarge: `[text] 2fr [spacer] 0.05fr [image] 1fr`,
                              small: `1fr`,
                          };
                return (
                    <Grid
                        key={idx}
                        containerType="article"
                        columns={zigZagColumns}
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
                            <MarkdownField
                                key={idx}
                                source={text.body}
                                allowDangerousHtml
                            />
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

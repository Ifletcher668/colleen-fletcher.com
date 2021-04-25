import React from 'react';
import Grid from '../../Containers/Grid';
import { HeadingField, Paragraph } from '../../Text';
import { ImageWithCaption } from '../../Images';
import { ButtonField } from '../../Widgets';
import { zigZagGridColumns } from '../../../utils/zigZagGridColumns';
import { GridArea } from '../../../StyledComponents/helpers';
import Divider from '../../Divider';

export interface Props {
  data: Array<Pick<StrapiOffering, 'id' | 'slug' | 'fullUrlPath'>>;
  previews: StrapiOffering[];
}

// Component only used in StrapiDynamicZone
const OfferingsField: React.FC<Props> = ({ data, previews }: Props) => {
  return (
    <Grid containerType="section" gap="2em 0">
      {data.map((offering, idx) => {
        // TODO: Refactor when Strapi nested component issue fixed
        const [{ preview }] = previews.filter(p => p.id === offering.id);
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
            rows={{
              xlarge:
                '[content-start] 1fr [content-middle] auto [content-end] 0.02fr',
              large:
                '[content-start] 1fr [content-middle] auto [content-end] 0.02fr',
              medium:
                '[content-start] auto [content-middle] auto [content-end] auto',
            }}
            styling={{
              margin: '2em 0em',
              gap: '1em 0',
            }}
          >
            <GridArea
              col-xl="image"
              col-lg="image"
              col-md="image"
              col-sm="1fr"
              row-xl="content-start"
              row-lg="content-start"
              row-md="content-start"
              row-sm="content-start"
              row-xs="content-start"
            >
              <ImageWithCaption data={image} />
            </GridArea>

            <GridArea
              col-xl="text"
              col-lg="text"
              col-md="text"
              col-sm="1fr"
              row-xl="content-start / content-end"
              row-lg="content-start / content-end"
              row-md="content-start / content-end"
              row-sm="content-middle"
              row-xs="content-middle"
            >
              <Grid>
                <HeadingField data={heading} />

                <Paragraph data={text} />

                <ButtonField data={button} />
              </Grid>
            </GridArea>

            <GridArea
              col-xl="1 / span 3"
              col-lg="1 / span 3"
              col-md="1 / span 3"
              row-xl="content-end"
              row-lg="content-end"
              row-md="content-end"
              row-sm="content-end"
              row-xs="content-end"
            >
              <Divider type="standard" />
            </GridArea>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default OfferingsField;

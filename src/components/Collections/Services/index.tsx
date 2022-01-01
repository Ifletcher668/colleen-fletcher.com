import React from 'react';
import Grid from '../../Containers/Grid';
import { Paragraph } from '../../Text';
import { ImageWithCaption } from '../../Images';
import { ButtonField } from '../../Widgets';
import { zigZagGridColumns } from '../../../utils/zigZagGridColumns';
import { GridArea } from '../../../styled-components/helpers';
import Divider from '../../Divider';
import { Service } from '../../../typings/strapi';

export interface Props {
  data: Service[];
}

const ServicesField = ({ data }: Props): JSX.Element => {
  return (
    <Grid containerType="section" gap="2em 0">
      {data.map((service, idx) => {
        const {
          heading: serviceHeading,
          text: serviceText,
          image: serviceImage,
          button: serviceButton,
        } = service.preview;

        if (
          !serviceButton.action ||
          serviceButton.action === '/' ||
          serviceButton.action === service.slug
        ) {
          serviceButton.action = service.fullUrlPath;
        }

        const zigZagColumLayout = zigZagGridColumns(idx);
        return (
          <Grid
            key={idx}
            containerType="article"
            columns={zigZagColumLayout} // col names === 'image' and 'content'
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
              <ImageWithCaption data={serviceImage} />
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
                <Paragraph data={serviceHeading} />

                <Paragraph data={serviceText} />

                <ButtonField data={serviceButton} />
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

export default ServicesField;

// Named "Work With Me on the page"
import React from 'react';
import { graphql } from 'gatsby';
import Heading from '../components/Heading';
import { Grid } from '../components/Containers';
import { PageContainer } from '../components/Containers';
import { ImageWithCaption } from '../components/Images';
import { zigZagGridColumns } from '../utils/zigZagGridColumns';
import { HeadingField, Paragraph } from '../components/Text';
import { GridArea } from '../StyledComponents/helpers';
import Divider from '../components/Divider';
import { ButtonField } from '../components/Widgets';
interface Props {
    data: Strapi;
}
export default (props: Props): JSX.Element => {
    const {
        data: {
            strapi: { offering },
        },
    } = props;
    return (
        <PageContainer>
            <Heading level={1}>{offering.title}</Heading>
            {offering.preview && (
                <ImageWithCaption data={offering.preview.image} />
            )}
            {offering.services && offering.services.length > 0 && (
                <Grid containerType="section">
                    {offering.services.map((service, idx) => {
                        const zigZagColumLayout = zigZagGridColumns(idx);

                        // Mutating button data to append offering's url
                        const buttonData: StrapiComponentWidgetButton = {
                            action: `${offering.fullUrlPath}${service.slug}`,
                            buttonText: service.preview.button.buttonText,
                            variant: service.preview.button.variant,
                        };
                        return (
                            <Grid
                                key={idx}
                                containerType="article"
                                columns={zigZagColumLayout}
                                rows={{
                                    xlarge: `[content] 1fr [divider] 0.01fr`,
                                }}
                                styling={{
                                    margin: `2em 0em`,
                                    gap: `1em 0`,
                                }}
                            >
                                {service.preview && service.preview.image && (
                                    <GridArea column="image" row="content">
                                        <ImageWithCaption
                                            data={service.preview.image}
                                        />
                                    </GridArea>
                                )}

                                <GridArea column="text" row="content">
                                    <HeadingField
                                        data={service.preview.heading}
                                    />

                                    <Paragraph data={service.preview.text} />

                                    <ButtonField data={buttonData} />
                                </GridArea>

                                <GridArea column="full" row="divider">
                                    <Divider type="standard" />
                                </GridArea>
                            </Grid>
                        );
                    })}
                </Grid>
            )}
        </PageContainer>
    );
};

export const query = graphql`
    query GET_OFFERING_PAGE($id: ID!) {
        strapi {
            offering(id: $id) {
                ...StrapiOffering
            }
        }
    }
`;

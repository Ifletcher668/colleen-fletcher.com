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
import SEO from '../components/SEO';
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
        <>
            <SEO
                title={offering.title}
                description={offering.meta_description}
            />
            <PageContainer>
                <Heading
                    level={1}
                    justifyHeading="center"
                    alignHeading="center"
                >
                    {offering.title}
                </Heading>
                {offering.preview && (
                    <ImageWithCaption
                        data={offering.preview.image}
                        styling={{
                            margin: `auto`,
                        }}
                    />
                )}

                {offering.services && offering.services.length > 0 && (
                    <Grid containerType="section">
                        {offering.services.map((service, idx) => {
                            const zigZagColumnLayout = zigZagGridColumns(idx);

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
                                    columns={zigZagColumnLayout} // col names === 'image' and 'content'
                                    rows={{
                                        large: `[content-start] 1fr [content-middle] auto [content-end] 0.02fr`,
                                        medium: `[content-start] auto [content-middle] auto [content-end] auto`,
                                    }}
                                    styling={{
                                        margin: `2em 0em`,
                                        gap: `1em 0`,
                                    }}
                                >
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
                                        <ImageWithCaption
                                            data={service.preview.image}
                                        />
                                    </GridArea>

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
                                        <Grid>
                                            <HeadingField
                                                data={service.preview.heading}
                                            />

                                            <Paragraph
                                                data={service.preview.text}
                                            />

                                            <ButtonField data={buttonData} />
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
                )}
            </PageContainer>
        </>
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

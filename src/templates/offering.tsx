// Named "Work With Me on the page"
import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import Heading from '../components/Heading';
import { Grid } from '../components/Containers';
import { PageContainer } from '../components/Containers';
import PaintDripLink from '../components/TransitionLink';
import { ImageWithCaption } from '../components/Images';
import { zigZagGridColumns } from '../utils/zigZagGridColumns';
import { Paragraph } from '../components/Text';
import { GridArea } from '../StyledComponents/helpers';
import Divider from '../components/Divider';
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
            <Heading level={1} center>
                {offering.title}
            </Heading>
            {offering.preview && (
                <ImageWithCaption imageComponent={offering.preview.image} />
            )}
            {offering.services && offering.services.length > 0 && (
                <Grid containerType="section">
                    {offering.services.map((service, idx) => {
                        const zigZag = zigZagGridColumns(idx);
                        return (
                            <Grid
                                key={idx}
                                containerType="article"
                                columns={zigZag}
                                rows={{
                                    xlarge: `[content] 1fr [divider] 0.001fr`,
                                }}
                                styling={{
                                    margin: `2em 0em`,
                                    gap: `1em 0`,
                                }}
                            >
                                {service.preview && service.preview.image && (
                                    <GridArea column="image" row="content">
                                        <Image
                                            alt={
                                                service.preview.image.file
                                                    .alternativeText
                                            }
                                            title={
                                                service.preview.image.file
                                                    .caption
                                            }
                                            fluid={
                                                service.preview.image.file
                                                    .imageFile.childImageSharp
                                                    .fluid
                                            }
                                        />
                                    </GridArea>
                                )}
                                <GridArea column="text" row="content">
                                    <Heading level={3}>
                                        <PaintDripLink
                                            to={`${offering.fullUrlPath}${service.slug}`}
                                        >
                                            {service.title}
                                        </PaintDripLink>
                                    </Heading>
                                    <Paragraph data={service.preview.text} />
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
// Here is where I map all this offering's services

export const query = graphql`
    query GET_OFFERING_PAGE($id: ID!) {
        strapi {
            offering(id: $id) {
                ...StrapiOffering
            }
        }
    }
`;

// Named "Work With Me on the page"
import React from 'react';
import {graphql} from 'gatsby';
import Image from 'gatsby-image';
import Heading from '../components/Heading';
import {Grid} from '../components/Container';
import {ContentWrapper} from '../components/Container/';
import {Card, CardHeader, CardBody, CardFooter} from '../components/Card';
import MarkdownField from 'react-markdown';
import PaintDripLink from '../components/TransitionLink';
import {ImageWithCaption} from '../components/Images';
interface Props {
    data: Strapi;
}
export default (props: Props): JSX.Element => {
    const {
        data: {
            strapi: {offering},
        },
    } = props;
    return (
        <ContentWrapper>
            <Heading level={1} center>
                {offering.title}
            </Heading>
            {offering.preview && (
                <ImageWithCaption imageComponent={offering.preview.image} />
            )}
            {offering.services && offering.services.length > 0 && (
                <Grid className="services" containerType="section">
                    {offering.services.map((service, idx) => {
                        const zigZagColumns =
                            idx % 2 === 0
                                ? {
                                      xlarge: `[image] 1fr [spacer] 0.05fr [text] 2fr`,
                                      small: `1fr`,
                                  }
                                : {
                                      xlarge: `[text] 2fr [spacer] 0.05fr [image] 1fr`,
                                      small: `1fr`,
                                  };
                        return (
                            <Grid
                                key={idx}
                                columns={zigZagColumns}
                                rows={{xlarge: `[content] 1fr [spacer] 0.2fr`}}
                            >
                                <Image
                                    alt={
                                        service.preview.image.file
                                            .alternativeText
                                    }
                                    title={service.preview.image.file.caption}
                                    fluid={
                                        service.preview.image.file.imageFile
                                            .childImageSharp.fluid
                                    }
                                    style={{
                                        gridColumn: `image`,
                                        gridRow: 'content',
                                    }}
                                />
                                <Card
                                    style={{
                                        gridColumn: `text`,
                                        gridRow: 'content / span spacer',
                                    }}
                                >
                                    <CardHeader>
                                        <Heading level={3}>
                                            <PaintDripLink
                                                to={`${offering.fullUrlPath}${service.slug}`}
                                            >
                                                {service.title}
                                            </PaintDripLink>
                                        </Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <MarkdownField
                                            source={service.preview.text.body}
                                            className="paragraph"
                                            allowDangerousHtml
                                        />
                                    </CardBody>
                                    {/* //TODO: is there a date? */}
                                    {/* <CardFooter>
                                    <Heading level={6} >
                                    {service.}
                                    </Heading>
                                </CardFooter> */}
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            )}
        </ContentWrapper>
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

import React, {useContext} from 'react';
import {graphql} from 'gatsby';
import Image from 'gatsby-image';
import Heading from '../components/Heading';
import {Flexbox, Grid} from '../components/Container';
import {Card, CardHeader, CardBody, CardFooter} from '../components/Card';
import ALink from 'gatsby-plugin-transition-link/AniLink';
import {LayoutContext} from '../components/Layout';
import MarkdownField from 'react-markdown';
interface Props {
    data: Strapi;
}
export default (props: Props) => {
    const {
        data: {
            strapi: {offering},
        },
    } = props;
    const {TRANSITION_PROPS} = useContext(LayoutContext);

    return (
        <Grid containerType="main-content" gap={`2em 0`}>
            <Heading level={1} center>
                {offering.title}
            </Heading>
            <Flexbox containerType="section" vertical>
                <Image
                    alt={offering.image.file.alternativeText}
                    title={offering.image.file.caption}
                    fluid={offering.image.file.imageFile.childImageSharp.fluid}
                />
                <figcaption>{offering.image.file.caption}</figcaption>
            </Flexbox>
            {offering.services && offering.services.length > 0 && (
                <Grid className="services" containerType="section">
                    {offering.services.map((service, idx) => {
                        const zigZagColumns: Grid['columns'] =
                            idx % 2 === 0
                                ? [`[image] 1fr [spacer] 0.05fr [text] 2fr`]
                                : [`[text] 2fr [spacer] 0.05fr [image] 1fr `];
                        return (
                            <Grid
                                key={idx}
                                columns={zigZagColumns}
                                rows={[`[content] 1fr [spacer] 0.2fr`]}
                            >
                                <Image
                                    alt={
                                        service.preview_image.file
                                            .alternativeText
                                    }
                                    title={service.preview_image.file.caption}
                                    fluid={
                                        service.preview_image.file.imageFile
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
                                            <ALink
                                                to={`${offering.fullUrlPath}${service.slug}`}
                                                {...TRANSITION_PROPS}
                                            >
                                                {service.title}
                                            </ALink>
                                        </Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <MarkdownField
                                            source={service.preview}
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
        </Grid>
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

import React, {useContext} from 'react';
import {graphql} from 'gatsby';
import Heading from '../components/Heading';
import {Grid} from '../components/Container';
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
        <Grid>
            <Heading level={1} center>
                {offering.title}
            </Heading>
            {offering.services && offering.services.length > 0 && (
                <Grid>
                    {offering.services.map((service, idx) => {
                        return (
                            <Card>
                                <CardHeader>
                                    <ALink
                                        to={service.fullUrlPath}
                                        {...TRANSITION_PROPS}
                                    >
                                        <Heading level={3}>
                                            {service.title}
                                        </Heading>
                                    </ALink>
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

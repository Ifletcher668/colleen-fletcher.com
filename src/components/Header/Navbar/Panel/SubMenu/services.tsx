import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PaintDripLink from '../../../../PaintDripLink';

interface Props extends DefaultProps {
    offering: {
        title: string;
        url: string;
    };
}

const data = graphql`
    query {
        strapi {
            services {
                title
                slug
                offerings {
                    title
                    slug
                }
            }
        }
    }
`;
const Services: React.FC<Props> = (props: Props) => {
    const query: Strapi = useStaticQuery(data);
    return (
        <>
            {query.strapi.services
                .filter(service => {
                    const offering = service.offerings.find(
                        offering => offering.title === props.offering.title,
                    );
                    if (offering) {
                        return offering.title === props.offering.title
                            ? service
                            : '';
                    }
                })
                .map((service, idx) => {
                    return (
                        <li key={idx}>
                            <PaintDripLink
                                to={`${props.offering.url}${service.slug}`}
                            >
                                {service.title}
                            </PaintDripLink>
                        </li>
                    );
                })}
        </>
    );
};
export default Services;

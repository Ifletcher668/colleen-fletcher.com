import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from '../../Atoms';

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
const Services = (props: Props): JSX.Element => {
  const query: Strapi.Strapi = useStaticQuery(data);
  return (
    <>
      {query.strapi.services
        .filter(service => {
          const offering = service.offerings.find(
            offering => offering.title === props.offering.title,
          );
          return offering
            ? offering.title === props.offering.title
              ? service
              : ''
            : false;
        })
        .map((service, idx) => {
          return (
            <li key={idx}>
              <Link to={`${props.offering.url}${service.slug}`}>
                {service.title}
              </Link>
            </li>
          );
        })}
    </>
  );
};
export default Services;

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from '../../../Elements';

const data = graphql`
  query {
    strapi {
      offerings(sort: "title") {
        title
        slug
      }
    }
  }
`;
const Offerings = (): JSX.Element => {
  const query: Strapi.Strapi = useStaticQuery(data);
  return (
    <>
      {query.strapi.services.map((offering, idx) => {
        return (
          <li key={idx}>
            <Link to={`${offering.slug}`}>{offering.title}</Link>
          </li>
        );
      })}
    </>
  );
};
export default Offerings;

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from '../../Atoms';

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
const Offerings: React.FC = (): JSX.Element => {
  const query: Strapi = useStaticQuery(data);
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

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PaintDripLink from '../../PaintDripLink';

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
                        <PaintDripLink to={`${offering.slug}`}>
                            {offering.title}
                        </PaintDripLink>
                    </li>
                );
            })}
        </>
    );
};
export default Offerings;

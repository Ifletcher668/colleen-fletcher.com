import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

interface Props {
    data: Strapi;
    location: Location;
}
export default (props: Props) => {
    // TODO: Paginate Blog Posts
    const {
        data: {
            strapi: { category },
        },
    } = props;
    console.log(category);

    return (
        <Layout location={props.location}>
            {/*  */}
            {/*  */}
        </Layout>
    );
};

export const query = graphql`
    query GET_STRAPI_CATEGORY($id: ID!) {
        strapi {
            category(id: $id) {
                ...StrapiCategory
            }
        }
    }
`;

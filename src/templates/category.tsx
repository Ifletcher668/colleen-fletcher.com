import React from 'react';
import {graphql} from 'gatsby';

interface Props {
    data: Strapi;
}
export default (props: Props) => {
    // TODO: Paginate Blog Posts
    const {
        data: {
            strapi: {category},
        },
    } = props;
    console.log(category);

    return (
        <>
            {/*  */}
            {/*  */}
        </>
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

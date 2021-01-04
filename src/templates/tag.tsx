import React from 'react';
import {graphql} from 'gatsby';

interface Props {
    data: Strapi;
}
export default (props: Props) => {
    // TODO: Paginate blog posts!
    const {
        data: {
            strapi: {tag},
        },
    } = props;
    console.log(tag);

    return (
        <>
            {/*  */}
            {/*  */}
        </>
    );
};

export const query = graphql`
    query GET_STRAPI_TAG($id: ID!) {
        strapi {
            tag(id: $id) {
                ...StrapiTag
            }
        }
    }
`;

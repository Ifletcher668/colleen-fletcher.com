import React from 'react';
import {graphql} from 'gatsby';
interface Props {
    data: Strapi;
}

export default (props: Props) => {
    const {
        data: {
            strapi: {blog},
        },
    } = props;
    console.log(blog);

    return (
        <>
            {/*  */}
            {/*  */}
        </>
    );
};

export const query = graphql`
    query GET_BLOG_PAGE($id: ID!) {
        strapi {
            blog(id: $id) {
                name
            }
        }
    }
`;

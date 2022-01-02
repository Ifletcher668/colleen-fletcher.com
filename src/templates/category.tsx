import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import { TemplateProps } from './types';

export default (props: TemplateProps): JSX.Element => {
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

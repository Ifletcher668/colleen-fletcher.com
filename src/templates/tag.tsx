import { graphql } from 'gatsby';
import React from 'react';
import Strapi from '../typings/strapi';
import Layout from '../components/Layout';

interface Props {
  data: Strapi.Strapi;
  location: Location;
}
export default (props: Props): JSX.Element => {
  // TODO: Paginate blog posts!
  const {
    data: {
      strapi: { tag },
    },
  } = props;
  console.log(tag);

  return (
    <Layout location={props.location}>
      {/*  */}
      {/*  */}
    </Layout>
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

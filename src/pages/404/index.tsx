import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../../components/Layout';

export default (props: PageProps): JSX.Element => {
  return (
    <Layout location={props.location}>
      404
      {/*  */}
    </Layout>
  );
};

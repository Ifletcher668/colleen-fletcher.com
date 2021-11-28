import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../../components/Layout';
import { Heading } from '../../components/Text/Heading';
import { Paragraph } from '../../components/Elements';

export default ({ location }: PageProps): JSX.Element => {
  return (
    <Layout location={location}>
      <Heading level="one">We're sorry!</Heading>

      <Paragraph>We couldn't find what you were looking for.</Paragraph>
    </Layout>
  );
};

import React from 'react';
import { PageProps } from 'gatsby';
import { useStrapiData } from '../../graphql/queries/useStrapiData';
import Layout from '../../components/Layout';

export default (props: PageProps) => {
    const {
        strapi: { tags },
    } = useStrapiData();
    console.log(tags);

    return (
        <Layout location={props.location}>
            All Tags
            {/*  */}
        </Layout>
    );
};

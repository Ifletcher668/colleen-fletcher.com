import React from 'react';
import { useStrapiData } from '../../graphql/queries/useStrapiData';
import { PageProps } from 'gatsby';
import Layout from '../../components/Layout';

export default (props: PageProps) => {
    const {
        strapi: { categories },
    } = useStrapiData();
    console.log(categories);

    return (
        <Layout location={props.location}>
            All Categories
            {/*  */}
        </Layout>
    );
};

import React from 'react';
import {useStrapiData} from '../../graphql/queries/useStrapiData';

export default () => {
    const {
        strapi: {categories},
    } = useStrapiData();
    console.log(categories);

    return (
        <>
            All Categories
            {/*  */}
        </>
    );
};

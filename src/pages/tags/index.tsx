import React from 'react';
import {useStrapiData} from '../../utils/graphql/queries/useStrapiData';

export default () => {
    const {
        strapi: {tags},
    } = useStrapiData();
    console.log(tags);

    return (
        <>
            All Tags
            {/*  */}
        </>
    );
};

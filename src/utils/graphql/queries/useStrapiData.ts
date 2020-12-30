import {graphql, useStaticQuery} from 'gatsby';

export const useStrapiData: () => Strapi = () =>
    useStaticQuery(graphql`
        query GET_STRAPI_CONTENT {
            strapi {
                menuItems(sort: "order") {
                    id
                    text
                    slug
                    is_external_link
                    order
                    page {
                        blogs(sort: "title") {
                            slug
                            title
                        }
                        offerings(sort: "title") {
                            title
                            slug
                            services {
                                title
                                slug
                            }
                        }
                    }
                }
            }
        }
    `);

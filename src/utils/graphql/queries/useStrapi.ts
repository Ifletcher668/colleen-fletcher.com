import {graphql, useStaticQuery} from 'gatsby';

export const useStrapiData: () => Strapi = () =>
    useStaticQuery(graphql`
        query GET_STRAPI_CONTENT {
            strapi {
                menuItems(sort: "order") {
                    title
                    slug
                    is_link_external
                    offerings(sort: "title") {
                        title
                        slug
                        services(sort: "title") {
                            title
                            slug
                        }
                    }
                    blogs(sort: "title") {
                        title
                        slug
                    }
                }
            }
        }
    `);

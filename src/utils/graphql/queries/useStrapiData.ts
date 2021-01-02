import {graphql, useStaticQuery} from 'gatsby';

export const useStrapiData: () => Strapi = () =>
    useStaticQuery(graphql`
        query GET_STRAPI_CONTENT {
            strapi {
                homepage: menuItem(id: "1") {
                    ...StrapiMenuItem
                }
                allOtherMenuItems: menuItems(
                    sort: "text"
                    where: {id_ne: "1"}
                ) {
                    ...StrapiMenuItem
                    page {
                        title
                        slug
                        blogs {
                            name
                            slug
                            fullUrlPath
                            blog_posts {
                                ...AllStrapiBlogPostDataForFullUrlPath
                            }
                        }
                        offerings {
                            title
                            slug
                            fullUrlPath
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

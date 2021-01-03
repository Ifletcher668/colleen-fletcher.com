import {graphql, useStaticQuery} from 'gatsby';

export const useStrapiData: () => Strapi = () =>
    // TODO: homepage still hardcoded in query
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
                            ...StrapiBlog
                            blog_posts {
                                ...StrapiBlogPost
                            }
                        }
                        offerings {
                            ...StrapiOffering
                        }
                    }
                }
                blogs {
                    ...StrapiBlog
                }
                blogPosts {
                    ...StrapiBlogPost
                }
                offerings {
                    ...StrapiOffering
                }
            }
        }
    `);

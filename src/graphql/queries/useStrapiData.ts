import {graphql, useStaticQuery} from 'gatsby';

export const useStrapiData: () => Strapi = () =>
    // TODO: homepage still hardcoded in query
    useStaticQuery(graphql`
        query GET_STRAPI_CONTENT {
            strapi {
                blogs {
                    ...StrapiBlog
                }
                blogPosts {
                    ...StrapiBlogPost
                }
                recentBlogPosts: blogPosts(sort: "published", limit: 5) {
                    ...StrapiBlogPost
                }
                offerings {
                    ...StrapiOffering
                }
                tags {
                    ...StrapiTag
                }
                categories {
                    ...StrapiCategory
                }
            }
        }
    `);

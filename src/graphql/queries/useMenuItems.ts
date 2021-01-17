import {graphql, useStaticQuery} from 'gatsby';

export const useMenuItems: () => Strapi = () =>
    useStaticQuery(graphql`
        query GET_STRAPI_MENU_ITEMS {
            strapi {
                menuItems(sort: "order") {
                    ...StrapiMenuItem
                }
            }
        }
    `);

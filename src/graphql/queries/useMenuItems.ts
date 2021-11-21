import { graphql, useStaticQuery } from 'gatsby';
import { Strapi } from '../../typings/strapi';

export const useMenuItems: () => Strapi = () =>
  useStaticQuery(graphql`
    query GET_STRAPI_MENU_ITEMS {
      strapi {
        menuItems(sort: "order:asc") {
          ...StrapiMenuItem
        }
      }
    }
  `);

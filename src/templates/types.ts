import { PageProps } from 'gatsby';
import { Strapi } from '../typings/strapi';

export type TemplateProps = PageProps & {
  data: Strapi;
};

import { PageProps } from 'gatsby';

export type TemplateProps = PageProps & {
  data: Strapi;
};

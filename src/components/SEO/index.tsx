import React from 'react';
import { UploadFile } from '../../typings/strapi';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

// TODO: Refactor to use eventual typescript type (strapi)
export interface Props {
  title: string;
  description: string;
  image?: UploadFile;
  lang?: string;
  meta?: any[];
}

const SEO = ({ title, description, image, lang, meta }: Props) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author {
            name
            bio
          }
        }
      }
    }
  `);
  // image?.imageFile.childImageSharp.gatsbyImageData.
  const metaDescription = description || site.siteMetadata.description;

  const imageData = image?.imageFile.childImageSharp.gatsbyImageData;

  return (
    <Helmet
      htmlAttributes={{
        lang: lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'lang',
          content: 'en',
        },
        {
          name: 'viewport',
          content:
            '<meta name="viewport" content="width=device-width, initial-scale=1">',
        },
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: image?.url,
        },
        {
          property: 'og:image:width',
          content:
            imageData !== undefined && imageData.width < 768
              ? imageData.width
              : 768,
        },
        {
          property: 'og:image:height',
          content:
            imageData !== undefined && imageData.width < 768
              ? imageData.height
              : 768,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author.name,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta || [])}
    />
  );
};

export default SEO;

import React from 'react';
import { UploadFile } from '../../typings/strapi';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export interface Props {
  title?: string;
  description?: string;
  image?: UploadFile;
  lang?: string;
  meta?: any[];
}

type SiteAuthor = {
  name: string;
  bio: string;
};

type SiteMetaData = {
  title: string;
  description: string;
  author: SiteAuthor;
};

type SiteDataQuery = {
  site: {
    siteMetadata: SiteMetaData;
  };
};

const siteDataQuery = graphql`
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
`;

const SEO = ({ title, description, image, lang, meta }: Props): JSX.Element => {
  const { site } = useStaticQuery<SiteDataQuery>(siteDataQuery);

  const metaDescription = description || site.siteMetadata.description;
  const imageData = image?.imageFile.childImageSharp.gatsbyImageData;

  return (
    <Helmet
      htmlAttributes={{
        lang: lang,
      }}
      title={title}
      titleTemplate="%s"
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
            imageData && imageData.width < 1200
              ? String(imageData.width)
              : '1200',
        },
        {
          property: 'og:image:height',
          content:
            imageData && imageData.width < 628
              ? String(imageData.height)
              : '628',
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

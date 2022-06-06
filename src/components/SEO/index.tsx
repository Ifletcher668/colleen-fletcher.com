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
  const GOOGLE_ANALYTICS_ID = 'UA-62542419-2';

  return (
    <Helmet
      htmlAttributes={{
        lang: lang ?? 'EN-US',
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
        // Pinterest
        {
          name: 'p:domain_verify',
          content: '020ab54be8116b72fb0c44495108d961',
        },
      ].concat(meta || [])}
    >
      {/* Global site tag (gtag.js) - Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
      />
      <script>
        {`
        window.dataLayer = window.dataLayer || [];
        
        function gtag(){
          window.dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', "${GOOGLE_ANALYTICS_ID}");
  `}
      </script>
    </Helmet>
  );
};

export default SEO;

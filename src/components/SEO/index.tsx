import React from 'react';
import Helmet from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';

export interface Props {
    description: string;
    lang: string;
    meta: any[];
    title: string;
}

const SEO = (props: Props) => {
    const {site} = useStaticQuery(graphql`
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

    const metaDescription = props.description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{
                lang: props.lang,
            }}
            title={props.title}
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
                    content: props.title,
                },
                {
                    property: 'og:description',
                    content: metaDescription,
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
                {
                    name: 'twitter:card',
                    content: 'summary',
                },
                {
                    name: 'twitter:creator',
                    content: site.siteMetadata.author.name,
                },
                {
                    name: 'twitter:title',
                    content: props.title,
                },
                {
                    name: 'twitter:description',
                    content: metaDescription,
                },
            ].concat(props.meta)}
        />
    );
};

SEO.defaultProps = {
    lang: 'en',
    meta: [],
    description: '',
};

export default SEO;

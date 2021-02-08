const config = require('./config/metaData.js');
const path = require('path');

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        siteUrl: config.siteURl,
        title: config.siteTitle,
        description: config.siteDescription,
        author: config.author,
    },

    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-postcss`,
        `gatsby-plugin-catch-links`,
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: `${__dirname}/src/assets/images/svg`,
                },
            },
        },

        {
            resolve: `gatsby-plugin-transition-link`,
            options: {
                layout: require.resolve(
                    `${__dirname}/src/components/Layout/index.tsx`,
                ),
                injectPageProps: false,
            },
        },

        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'colleen-fletcher.com',
                short_name: 'Colleen Fletcher',
                start_url: '/',
                icon: `${__dirname}/static/blue-flower-colleen-fletcher.png`,
            },
        },

        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/assets/images`,
            },
        },

        {
            resolve: 'gatsby-source-graphql',
            options: {
                typeName: 'STRAPI',
                fieldName: 'strapi',
                url: `${
                    process.env.NODE_ENV === 'development'
                        ? process.env.LOCAL_GRAPHQL_ENDPOINT
                        : process.env.HEROKU_GRAPHQL_ENDPOINT
                }`,
            },
        },
    ],
};

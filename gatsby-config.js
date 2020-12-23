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
        `gatsby-plugin-sass`,
        `gatsby-plugin-postcss`,
        // {
        //     resolve: `gatsby-plugin-postcss`,
        //     options: {
        //         postCssPlugins: [require('autoprefixer')()],
        //     },
        // },
        // `gatsby-plugin-transition-link`,
        {
            resolve: `gatsby-plugin-transition-link`,
            options: {
                layout: require.resolve(
                    `${__dirname}/src/components/Layout/index.tsx`,
                ),
            },
        },
        // {
        //     resolve: `gatsby-plugin-manifest`,
        //     options: {
        //         name: 'isiahfletcher.com',
        //         short_name: 'Isiah Fletcher',
        //         start_url: '/',
        //         icon: './static/images/isiah-fletcher-logo.png',
        //     },
        // },
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
                // TODO
                // url: `${
                //     process.env.NODE_ENV === 'development'
                //         ? 'http://localhost:1337/graphql'
                //         : 'https://isiahfletcheradmin.herokuapp.com/graphql'
                // }`,
                url: `http://localhost:1337/graphql`,
                // refetchInterval: process.env.NODE_ENV === 'development' && 50, // refetches Strapi data every 5 minutes
            },
        },
    ],
};

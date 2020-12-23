const {createRemoteFileNode} = require('gatsby-source-filesystem');
const {formatDateOnSlug} = require('./src/utils/formatDate');

const path = require('path');
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

exports.createPages = async ({actions, graphql, reporter}) => {
    const {createPage} = actions;

    const {error, data} = await graphql(`
        query {
            strapi {
                blogPosts {
                    id
                    slug
                    published
                    blog {
                        title
                    }
                    category {
                        title
                    }
                }
            }
        }
    `);

    if (error) {
        return reporter.panicOnBuild(`Error while running GraphQL query!`);
    }

    const blogs = data.strapi.blogPosts;
    blogs.forEach(({slug, id, published, category, blog}) => {
        const pageSlug = category
            ? `blogs/${blog.title}/${category.title}/${formatDateOnSlug(
                  published,
              )}/${slug}`
            : `blogs/${blog.title}/${formatDateOnSlug(published)}/${slug}`;
        createPage({
            path: pageSlug,
            component: path.resolve(`./src/templates/blog-post.tsx`),
            context: {
                id,
            },
        });
    });
};

exports.createResolvers = async ({
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
}) => {
    const {createNode} = actions;
    await createResolvers({
        STRAPI_UploadFile: {
            imageFile: {
                type: 'File',
                resolve(source) {
                    return createRemoteFileNode({
                        url: source.url,
                        store,
                        cache,
                        createNode,
                        createNodeId,
                        reporter,
                    });
                },
            },
        },
    });
};

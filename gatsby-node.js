const {createRemoteFileNode} = require('gatsby-source-filesystem');
const {formatDateOnSlug} = require('./src/utils/formatDate');

const path = require('path');
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

exports.createPages = async ({actions, graphql, reporter}) => {
    const {createPage} = actions;

    await graphql(`
        query {
            strapi {
                generalSetting {
                    blogs_page {
                        id
                        title
                        slug
                    }
                    home_page {
                        id
                        title
                        slug
                    }
                }
                blogPosts {
                    id
                    slug
                    published
                    blog {
                        name
                        slug
                    }
                    category {
                        name
                        slug
                    }
                }
                pages {
                    id
                    slug
                }
                offerings {
                    id
                    slug
                }
                services {
                    id
                    slug
                    offerings {
                        id
                        slug
                    }
                }
            }
        }
    `).then(({error, data}) => {
        if (error) {
            return reporter.panicOnBuild(`Error while running GraphQL query!`);
        }

        const pageSettings = data.strapi.generalSetting;

        // Create Pages
        data.strapi.pages.forEach(({id, slug}) => {
            const pagePath = slug === pageSettings.home_page.slug ? '/' : slug;
            const context = {
                id,
            };
            if (id === pageSettings.blogs_page.id) {
                context.blogsPageId = pageSettings.blogs_page.id;
            }
            createPage({
                path: pagePath,
                component: path.resolve(`${__dirname}/src/templates/page.tsx`),
                context,
            });
        });

        // Create Blog Posts
        data.strapi.blogPosts.forEach(blogPost => {
            const {blog, category} = blogPost;
            const pageSlug = category
                ? `blogs/${blog.slug}/${category.slug}/${formatDateOnSlug(
                      blogPost.published,
                  )}/${blogPost.slug}`
                : `blogs/${blog.slug}/${formatDateOnSlug(blogPost.published)}/${
                      blogPost.slug
                  }`;

            createPage({
                path: pageSlug,
                component: path.resolve(
                    `${__dirname}/src/templates/blog-post.tsx`,
                ),
                context: {
                    id: blogPost.id,
                },
            });
        });

        // Create Offerings
        data.strapi.offerings.forEach(({id, slug}) => {
            const pageSlug = `/work-with-me/${slug}/`;
            createPage({
                path: pageSlug,
                component: path.resolve(
                    `${__dirname}/src/templates/offering.tsx`,
                ),
                context: {
                    id,
                },
            });
        });

        // Create Services, a different page
        //  for each offering under which the service is listed
        data.strapi.services.forEach(service => {
            const {offerings} = service;
            return offerings.forEach(offering => {
                const pageSlug = `/work-with-me/${offering.slug}/${service.slug}`;
                createPage({
                    path: pageSlug,
                    component: path.resolve(
                        `${__dirname}/src/templates/service.tsx`,
                    ),
                    context: {
                        id: service.id,
                    },
                });
            });
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

    const resolvers = {
        STRAPI_UploadFile: {
            imageFile: {
                type: `File`,
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
        STRAPI_Blog: {
            // possibly a better way to do this in the future
            // but for now, ensure that, whenever calling new field 'fullUrlPath',
            // all other fields necessary (category name,  blog slug, published, and slug) are present
            fullUrlPath: {
                type: `String`,
                resolve(source) {
                    return `/blogs/${source.slug}/`;
                },
            },
        },
        STRAPI_BlogPost: {
            fullUrlPath: {
                type: `String`,
                resolve(source) {
                    return source.category
                        ? `/blogs/${source.blog.slug}/${
                              source.category.slug
                          }/${formatDateOnSlug(source.published)}/${
                              source.slug
                          }`
                        : `/blogs/${source.blog.slug}/${formatDateOnSlug(
                              source.published,
                          )}/${source.slug}`;
                },
            },
        },
        STRAPI_Offering: {
            fullUrlPath: {
                // hardcoded to accept work-with-me as the 'offerings' page
                type: `String`,
                resolve(source) {
                    return `/work-with-me/${source.slug}/`;
                },
            },
        },
    };
    createResolvers(resolvers);
};

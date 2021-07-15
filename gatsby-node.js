const { createRemoteFileNode } = require('gatsby-source-filesystem');
const { formatDateOnSlug } = require('./src/utils/format-date');

const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  await graphql(`
    query {
      strapi {
        blogs {
          id
          slug
          name
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
        tags {
          id
          slug
        }
        categories {
          id
          slug
        }
      }
    }
  `).then(({ error, data }) => {
    if (error) {
      return reporter.panicOnBuild(`Error while running GraphQL query!`);
    }

    // Create Pages
    data.strapi.pages.forEach(({ id, slug }) => {
      const pagePath = slug.toLowerCase() === 'home' ? '/' : slug;
      const context = {
        id,
      };
      createPage({
        path: pagePath,
        component: path.resolve(`${__dirname}/src/templates/page.tsx`),
        context,
      });
    });

    // Create Blog Pages
    data.strapi.blogs.forEach(blog => {
      createPage({
        path: `/blogs/${blog.slug}`,
        component: path.resolve(`${__dirname}/src/templates/blog.tsx`),
        context: {
          id: blog.id,
        },
      });
    });

    // Create Blog Posts
    data.strapi.blogPosts.forEach(blogPost => {
      const { blog, category } = blogPost;
      const pageSlug = category
        ? `blogs/${blog.slug}/${category.slug}/${formatDateOnSlug(
            blogPost.published,
          )}/${blogPost.slug}`
        : `blogs/${blog.slug}/${formatDateOnSlug(blogPost.published)}/${
            blogPost.slug
          }`;

      createPage({
        path: pageSlug,
        component: path.resolve(`${__dirname}/src/templates/blog-post.tsx`),
        context: {
          id: blogPost.id,
        },
      });
    });

    // Create Offerings
    data.strapi.offerings.forEach(({ id, slug }) => {
      const pageSlug = `/work-with-me/${slug}/`;
      createPage({
        path: pageSlug,
        component: path.resolve(`${__dirname}/src/templates/offering.tsx`),
        context: {
          id,
        },
      });
    });

    // Create Services, a different page
    //  for each offering under which the service is listed
    data.strapi.services.forEach(service => {
      const { offerings } = service;
      return offerings.forEach(offering => {
        const pageSlug = `/work-with-me/${offering.slug}/${service.slug}`;
        createPage({
          path: pageSlug,
          component: path.resolve(`${__dirname}/src/templates/service.tsx`),
          context: {
            id: service.id,
          },
        });
      });
    });

    data.strapi.tags.forEach(({ id, slug }) => {
      createPage({
        path: `tags/${slug}`,
        component: path.resolve(`${__dirname}/src/templates/tag.tsx`),
        context: {
          id,
        },
      });
    });
    data.strapi.categories.forEach(({ id, slug }) => {
      createPage({
        path: `categories/${slug}`,
        component: path.resolve(`${__dirname}/src/templates/category.tsx`),
        context: {
          id,
        },
      });
    });
  });
};

// TODO: Find out how to grab strapi page settings to clean up resolver urlPaths
exports.createResolvers = async ({
  actions,
  cache,
  getCache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions;

  const resolvers = {
    STRAPI_UploadFile: {
      imageFile: {
        type: `File`,
        resolve(source) {
          return createRemoteFileNode({
            url: source.url,
            store,
            cache,
            getCache,
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
              }/${formatDateOnSlug(source.published)}/${source.slug}`
            : `/blogs/${source.blog.slug}/${formatDateOnSlug(
                source.published,
              )}/${source.slug}`;
        },
      },
    },
    STRAPI_Offering: {
      fullUrlPath: {
        // TODO: hardcoded to accept work-with-me as the 'offerings' page
        type: `String`,
        resolve(source) {
          return `/work-with-me/${source.slug}/`;
        },
      },
    },
    // STRAPI_Service: {
    //     // TODO: Find a way to get offering slug from a service
    //     // fullUrlPath: {
    //     //     // TODO: hardcoded to accept work-with-me as the 'offerings' page
    //     //     type: `String`,
    //     //     resolve(source) {
    //     //         return `/work-with-me/${source.offerings.filter(o => {
    //     //             const s = o.services.filter(
    //     //                 s => s.id === source.id,
    //     //             );

    //     //             return offering.slug;
    //     //         })}/${source.slug}/`;
    //     //     },

    // },
  };
  createResolvers(resolvers);
};

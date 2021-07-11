import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from '../../Atoms';

const data = graphql`
  query {
    strapi {
      blogs {
        name
        slug
        blog_posts {
          title
          slug
        }
      }
    }
  }
`;

const Blogs: React.FC = (): JSX.Element => {
  const query: Strapi.Strapi = useStaticQuery(data);
  return (
    <>
      {query.strapi.blogs.map((blog, idx) => {
        return (
          <li key={idx}>
            <Link to={`/${blog.slug}`}>{blog.name}</Link>
          </li>
        );
      })}
    </>
  );
};
export default Blogs;

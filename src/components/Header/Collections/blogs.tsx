import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PaintDripLink from '../../PaintDripLink';

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
    const query: Strapi = useStaticQuery(data);
    return (
        <>
            {query.strapi.blogs.map((blog, idx) => {
                return (
                    <li key={idx}>
                        <PaintDripLink to={`/${blog.slug}`}>
                            {blog.name}
                        </PaintDripLink>
                    </li>
                );
            })}
        </>
    );
};
export default Blogs;

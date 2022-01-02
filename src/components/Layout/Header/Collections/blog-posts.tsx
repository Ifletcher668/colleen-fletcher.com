import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from '../../../Elements';
import { BlogPost, Strapi } from '../../../../typings/strapi';

interface Props extends DefaultProps {
  blog: string;
}

const data = graphql`
  query {
    strapi {
      blogPosts(sort: "title") {
        title
        ...StrapiBlogPostFullUrlPath
        blog {
          name
        }
      }
    }
  }
`;

const BlogPosts = (props: Props): JSX.Element => {
  const query: Strapi = useStaticQuery(data);

  // TODO: A better way to handle limit?
  const fivePosts: BlogPost[] = [];
  const filteredPosts: BlogPost[] = query.strapi.blogPosts.filter(post =>
    post.blog ? post.blog.name === props.blog : '',
  );
  for (let i = 0; i < filteredPosts.length; i++) {
    if (i >= 5) break;
    fivePosts.push(filteredPosts[i]);
  }
  return (
    <>
      {fivePosts.map((post, idx) => {
        return (
          <li key={idx}>
            <Link color="coffee" to={`${post.fullUrlPath}`}>
              {post.title}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default BlogPosts;

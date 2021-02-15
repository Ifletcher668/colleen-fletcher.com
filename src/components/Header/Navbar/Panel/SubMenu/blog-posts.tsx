import React, { useContext } from 'react';
import { NavbarContext } from '../../index';
import { graphql, useStaticQuery } from 'gatsby';
import PaintDripLink from '../../../../PaintDripLink';

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

const BlogPosts: React.FC<Props> = (props: Props) => {
    const query: Strapi = useStaticQuery(data);

    // TODO: A better way to handle limit?
    const fivePosts: StrapiBlogPost[] = [];
    const filteredPosts: StrapiBlogPost[] = query.strapi.blogPosts.filter(
        post => (post.blog ? post.blog.name === props.blog : ''),
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
                        <PaintDripLink to={`${post.fullUrlPath}`}>
                            {post.title}
                        </PaintDripLink>
                    </li>
                );
            })}
        </>
    );
};

export default BlogPosts;

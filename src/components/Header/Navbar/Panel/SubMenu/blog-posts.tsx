import React, {useContext} from 'react';
import {NavbarContext} from '../../index';
import {graphql, useStaticQuery} from 'gatsby';
import PaintDripLink from '../../../../TransitionLink';

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
    const {TRANSITION_PROPS} = useContext(NavbarContext);
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
                    <li>
                        <PaintDripLink
                            key={idx}
                            to={`${post.fullUrlPath}`}
                            {...TRANSITION_PROPS}
                        >
                            {post.title}
                        </PaintDripLink>
                    </li>
                );
            })}
        </>
    );
};

export default BlogPosts;

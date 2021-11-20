import React from 'react';
import { BlogPost } from '../../../typings/strapi';
// TODO: Build out this file

export interface Props {
  data: BlogPost[];
}
const BlogPostsField = ({ data }: Props): JSX.Element => {
  console.log(data);

  return (
    <>
      {/* <MarkdownField source={data} allowDangerousHtml className="paragraph" /> */}
    </>
  );
};

export default BlogPostsField;

import React from 'react';
import { BlogPost } from '../../../typings/strapi';
// TODO:

export interface Props {
  data: BlogPost[];
}
const BlogPostsField: React.FC<Props> = ({ data }: Props) => {
  return (
    <>
      {/* <MarkdownField source={data} allowDangerousHtml className="paragraph" /> */}
    </>
  );
};

export default BlogPostsField;

import React from 'react';
// TODO:

export interface Props {
  data: StrapiBlogPost[];
}
const BlogPostsField: React.FC<Props> = ({ data }: Props) => {
  return (
    <>
      {/* <MarkdownField source={data} allowDangerousHtml className="paragraph" /> */}
    </>
  );
};

export default BlogPostsField;

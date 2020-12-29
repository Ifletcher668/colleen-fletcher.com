import React from 'react';
import MarkdownField from 'react-markdown';

export interface Props {
    data: StrapiBodyContent;
}

const TextField: React.FC<Props> = ({data: {body}}: Props) => {
    return <MarkdownField source={body} />;
};

export default TextField;

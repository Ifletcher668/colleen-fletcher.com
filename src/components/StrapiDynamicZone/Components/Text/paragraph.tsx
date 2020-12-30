import React from 'react';
import MarkdownField from 'react-markdown';

export interface Props {
    data: string;
}

const TextField: React.FC<Props> = ({data}: Props) => {
    return <MarkdownField source={data} allowDangerousHtml />;
};

export default TextField;

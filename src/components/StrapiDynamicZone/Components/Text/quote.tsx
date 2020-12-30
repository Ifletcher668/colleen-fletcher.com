import React from 'react';
import MarkdownField from 'react-markdown';

export interface Props {
    data: StrapiComponentTextParagraph;
}

const QuoteField: React.FC<Props> = ({data: {body}}: Props) => {
    // TODO add the quote
    return (
        <>
            "
            <MarkdownField source={body} allowDangerousHtml />"
        </>
    );
};

export default QuoteField;

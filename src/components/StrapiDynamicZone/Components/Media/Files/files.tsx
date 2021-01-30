import React from 'react';
import MarkdownField from 'react-markdown';

export interface Props {
    data: StrapiBodyContent;
}

const TextWithImageField: React.FC<Props> = ({
    data: {header, rich_text, image_right_side},
}: Props) => {
    return <>{/* todo */}</>;
};

export default TextWithImageField;

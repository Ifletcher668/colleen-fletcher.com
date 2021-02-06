import React from 'react';
import MarkdownField from 'react-markdown';

export interface Props {
    data: StrapiService[];
}

const ServicesField: React.FC<Props> = ({data}: Props) => {
    return (
        <>
            {/* <MarkdownField source={data} allowDangerousHtml className="paragraph" /> */}
        </>
    );
};

export default ServicesField;

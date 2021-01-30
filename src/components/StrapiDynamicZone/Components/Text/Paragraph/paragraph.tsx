import React from 'react';
import MarkdownField from 'react-markdown/with-html';

export interface Props {
    data: string;
}

const TextField: React.FC<Props> = ({data}: Props) => {
    return (
        <MarkdownField
            children={data}
            allowDangerousHtml
            className="paragraph"
            renderers={{
                link: ({href, title}) => {
                    return (
                        <a href={href} target="__blank">
                            {title}
                        </a>
                    );
                },
            }}
        />
    );
};

export default TextField;

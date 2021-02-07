import React from 'react';
import MarkdownField from 'react-markdown/with-html';
import styled from 'styled-components';

export interface Props {
    data: StrapiComponentTextParagraph;
}

const Paragraph: React.FC<Props> = ({ data }: Props) => {
    const { body, alignParagraph, justifyParagraph } = data;

    return (
        <TextWrapper
            alignParagraph={alignParagraph}
            justifyParagraph={justifyParagraph}
            children={body}
            allowDangerousHtml
            className="paragraph"
            renderers={{
                link: ({ href, title }) => {
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

export default Paragraph;

interface WrapperProps {
    alignParagraph: AlignValues;
    justifyParagraph: JustifyValues;
}

const TextWrapper = styled(MarkdownField)<WrapperProps>`
    align-self: ${props => {
        switch (props.alignParagraph) {
            case 'top':
                return 'start';
            case 'center':
                return 'center';
            default:
                // end
                return 'end';
        }
    }};
    justify-self: ${props => {
        switch (props.justifyParagraph) {
            case 'left':
                return 'start';
            case 'center':
                return 'center';
            default:
                // right
                return 'end';
        }
    }};
`;

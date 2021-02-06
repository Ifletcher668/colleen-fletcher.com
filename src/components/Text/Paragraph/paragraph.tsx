import React from 'react';
import MarkdownField from 'react-markdown/with-html';
import styled from 'styled-components';

export interface Props {
    data: StrapiComponentTextParagraph;
}

const Paragraph: React.FC<Props> = ({data}: Props) => {
    const {body, alignParagraph, justifyParagraph} = data;

    return (
        <TextWrapper
            alignParagraph={alignParagraph}
            justifyParagraph={justifyParagraph}
            children={body}
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

export default Paragraph;

interface WrapperProps {
    alignParagraph: AlignValues;
    justifyParagraph: JustifyValues;
}
// left == start | center == center | right == end
//
const TextWrapper = styled(MarkdownField)<WrapperProps>`
    display: grid;
    justify-content: ${props => props.justifyParagraph};

    align-items: ${props => props.alignParagraph};
`;

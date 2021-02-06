import React from 'react';
import MarkdownField from 'react-markdown';
import YangQuotes from '../../../assets/images/svg/yang-quotation.svg';
import YinQuotes from '../../../assets/images/svg/yin-quotation.svg';
import Flexbox from '../../Containers/Flexbox/';
export interface Props {
    data: StrapiComponentTextParagraph;
}

const QuoteField: React.FC<Props> = ({data: {body}}: Props) => {
    // TODO add the quote
    return (
        <Flexbox containerType="section" vertical>
            <YangQuotes
                width={40}
                height={100}
                style={{alignSelf: `flex-start`}}
            />
            <MarkdownField source={body} allowDangerousHtml />
            <YinQuotes
                width={40}
                height={100}
                style={{alignSelf: `flex-end`}}
            />
        </Flexbox>
    );
};

export default QuoteField;

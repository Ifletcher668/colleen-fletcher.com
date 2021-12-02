import React from 'react';
import { Paragraph } from '..';
import YangQuotes from '../../../assets/images/svg/yang-quotation.svg';
import YinQuotes from '../../../assets/images/svg/yin-quotation.svg';
import { ComponentTextParagraph } from '../../../typings/strapi';
import { QuoteFieldWrapper } from '../styles';
export interface Props {
  data: ComponentTextParagraph;
}
// This component renders only when the strapi Widget "quote" is used. Not when a blockquote is defined inside react-quill
const QuoteField = ({ data: body }: Props): JSX.Element => {
  return (
    <QuoteFieldWrapper>
      <YangQuotes width={40} height={100} style={{ alignSelf: 'flex-start' }} />
      <Paragraph data={body} />
      <YinQuotes width={40} height={100} style={{ alignSelf: 'flex-end' }} />
    </QuoteFieldWrapper>
  );
};

export default QuoteField;

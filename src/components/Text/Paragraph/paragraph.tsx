import React from 'react';
import { Link, Span } from '../../Atoms';
import YangQuotes from '../../../assets/images/svg/yang-quotation.svg';
import YinQuotes from '../../../assets/images/svg/yin-quotation.svg';
import { TextWrapper, H1, H2, H3 } from './styles';
import { Grid } from '../../Containers';
import parse, { domToReact, HTMLReactParserOptions } from 'html-react-parser';
import { Element } from 'domhandler/lib/node';
import { ComponentTextParagraph } from '../../../typings/strapi';

export interface Props {
  data: ComponentTextParagraph;
  className?: Array<string> | string;
}

const Paragraph: React.FC<Props> = ({ data, className }: Props) => {
  const { body, alignParagraph, justifyParagraph } = data;

  // TODO: Add images to parser
  const options: HTMLReactParserOptions = {
    replace: domNode => {
      if (!(domNode instanceof Element)) return null;
      const { name, children, attribs } = domNode;

      if (name === 'a') {
        // add font-weight: ${font('weight', 'heading')};
        return (
          <strong>
            <Link to={attribs.href}>{domToReact(children, options)}</Link>
          </strong>
        );
      }

      if (name === 'h1') {
        return (
          <TextWrapper
            as={H1}
            alignParagraph={alignParagraph}
            justifyParagraph={justifyParagraph}
          >
            {domToReact(children, options)}
          </TextWrapper>
        );
      }

      if (name === 'h2')
        return (
          <TextWrapper
            as={H2}
            alignParagraph={alignParagraph}
            justifyParagraph={justifyParagraph}
          >
            {domToReact(children, options)}
          </TextWrapper>
        );

      if (name === 'h3')
        return (
          <TextWrapper
            as={H3}
            alignParagraph={alignParagraph}
            justifyParagraph={justifyParagraph}
          >
            {domToReact(children, options)}
          </TextWrapper>
        );

      if (name === 'p')
        return (
          <TextWrapper
            alignParagraph={alignParagraph}
            justifyParagraph={justifyParagraph}
          >
            {domToReact(children, options)}
          </TextWrapper>
        );
      if (name === 'ul')
        return (
          <TextWrapper
            as="ul"
            alignParagraph={alignParagraph}
            justifyParagraph={justifyParagraph}
          >
            {domToReact(children, options)}
          </TextWrapper>
        );
      if (name === 'ol')
        return (
          <TextWrapper
            as="ol"
            alignParagraph={alignParagraph}
            justifyParagraph={justifyParagraph}
          >
            {domToReact(children, options)}
          </TextWrapper>
        );
      if (name === 'blockquote')
        return (
          <TextWrapper
            as="blockquote"
            alignParagraph={alignParagraph}
            justifyParagraph={justifyParagraph}
          >
            <YangQuotes width={40} height={100} style={{ alignSelf: 'flex-start' }} />
            {domToReact(children, options)}
            <YinQuotes width={40} height={100} style={{ alignSelf: 'flex-end' }} />
          </TextWrapper>
        );

      if (attribs.class === 'ql-size-huge')
        return <Span size="huge">{domToReact(children, options)}</Span>;

      if (attribs.class === 'ql-size-large')
        return <Span size="large">{domToReact(children, options)}</Span>;

      if (attribs.class === 'ql-size-small')
        return <Span size="small">{domToReact(children, options)}</Span>;
    },
  };

  return (
    <Grid
      containerType="section"
      className={Array.isArray(className) ? className.join(' ') : className}
      styling={{ height: '100%', width: '100%' }}
    >
      {parse(body, options)}
    </Grid>
  );
};

export default Paragraph;

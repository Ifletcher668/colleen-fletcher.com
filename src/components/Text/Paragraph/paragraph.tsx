import { Element } from 'domhandler/lib/node';
import parse, { domToReact, HTMLReactParserOptions } from 'html-react-parser';
import React from 'react';
import YangQuotes from '../../../assets/images/svg/yang-quotation.svg';
import YinQuotes from '../../../assets/images/svg/yin-quotation.svg';
import { ComponentTextParagraph } from '../../../typings/strapi';
import { Grid } from '../../Containers';
import { H1, H2, H3, H4, H5, H6, Link, Span, Strong } from '../../Elements';
import { TextWrapper } from './styles';

export interface Props {
  data: ComponentTextParagraph;
  className?: Array<string> | string;
}

const Paragraph = ({ data, className }: Props): JSX.Element => {
  const { body, alignParagraph, justifyParagraph } = data;

  // TODO: Add images to parser
  const options: HTMLReactParserOptions = {
    replace: domNode => {
      if (!(domNode instanceof Element)) return null;
      const { name, children, attribs } = domNode;

      if (name === 'a') {
        return (
          <Strong>
            <Link to={attribs.href}>{domToReact(children, options)}</Link>
          </Strong>
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

      if (name === 'h4')
        return (
          <TextWrapper
            as={H4}
            alignParagraph={alignParagraph}
            justifyParagraph={justifyParagraph}
          >
            {domToReact(children, options)}
          </TextWrapper>
        );

      if (name === 'h5')
        return (
          <TextWrapper
            as={H5}
            alignParagraph={alignParagraph}
            justifyParagraph={justifyParagraph}
          >
            {domToReact(children, options)}
          </TextWrapper>
        );

      if (name === 'h6')
        return (
          <TextWrapper
            as={H6}
            alignParagraph={alignParagraph}
            justifyParagraph={justifyParagraph}
          >
            {domToReact(children, options)}
          </TextWrapper>
        );

      if (name === 'strong')
        return (
          <TextWrapper
            alignParagraph={alignParagraph}
            justifyParagraph={justifyParagraph}
            as={Strong}
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
            style={{ display: 'flex', alignItems: 'center', minHeight: '50px' }}
            alignParagraph={alignParagraph}
            justifyParagraph={justifyParagraph}
          >
            <YangQuotes
              width={20}
              height={20}
              style={{ alignSelf: 'flex-start' }}
            />
            {/* Arbitrary div to group any html that may split up 'children' */}
            <div>{domToReact(children, options)}</div>
            <YinQuotes
              width={20}
              height={20}
              style={{ alignSelf: 'flex-end' }}
            />
          </TextWrapper>
        );

      if (attribs.class === 'ql-size-huge')
        return <Span size="huge">{domToReact(children, options)}</Span>;

      if (attribs.class === 'ql-size-large')
        return <Span size="large">{domToReact(children, options)}</Span>;

      if (attribs.class === 'ql-size-small')
        return <Span size="small">{domToReact(children, options)}</Span>;

      if (attribs.class === 'ql-tilt-up')
        return <Span tilt="up">{domToReact(children, options)}</Span>;

      if (attribs.class === 'ql-tilt-down')
        return <Span tilt="down">{domToReact(children, options)}</Span>;

      return null;
    },
  };

  return (
    <Grid
      className={Array.isArray(className) ? className.join(' ') : className}
      styling={{ height: '100%', width: '100%' }}
    >
      {parse(body, options)}
    </Grid>
  );
};

export default Paragraph;

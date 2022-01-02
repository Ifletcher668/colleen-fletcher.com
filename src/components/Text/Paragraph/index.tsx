import { Element } from 'domhandler/lib/node';
import parse, { domToReact, HTMLReactParserOptions } from 'html-react-parser';
import React from 'react';
import YangQuotes from '../../../assets/images/svg/yang-quotation.svg';
import YinQuotes from '../../../assets/images/svg/yin-quotation.svg';
import { ComponentTextParagraph } from '../../../typings/strapi';
import { Grid } from '../../Containers';
import Divider from '../../Divider';
import { H1, H2, H3, H4, H5, H6, Link, Span, Strong } from '../../Elements';
import { TextWrapper } from './styles';

export interface Props {
  data: ComponentTextParagraph | null;
  className?: Array<string> | string;
}

const handleJustifyCases = (alignValue: string): JustifyValues => {
  switch (alignValue) {
    case 'ql-align-center':
      return 'center';
    case 'ql-align-right':
      return 'right';
    default:
      // ql-align-left, ql-align-justify
      return 'left';
  }
};

const Paragraph = ({ data, className }: Props): JSX.Element | null => {
  if (data === null) return null;

  const { body, alignParagraph } = data;
  const options: HTMLReactParserOptions = {
    replace: domNode => {
      if (!(domNode instanceof Element)) return null;
      const { name, children, attribs } = domNode;
      switch (name) {
        case 'a':
          return (
            <Strong>
              <Link to={attribs.href}>{domToReact(children, options)}</Link>
            </Strong>
          );

        case 'h1':
          return (
            <TextWrapper
              as={H1}
              alignParagraph={alignParagraph}
              justifyParagraph={handleJustifyCases(attribs.class)}
            >
              {domToReact(children, options)}
            </TextWrapper>
          );

        case 'h2':
          return (
            <TextWrapper
              as={H2}
              alignParagraph={alignParagraph}
              justifyParagraph={handleJustifyCases(attribs.class)}
            >
              {domToReact(children, options)}
            </TextWrapper>
          );

        case 'h3':
          return (
            <TextWrapper
              as={H3}
              alignParagraph={alignParagraph}
              justifyParagraph={handleJustifyCases(attribs.class)}
            >
              {domToReact(children, options)}
            </TextWrapper>
          );

        case 'h4':
          return (
            <TextWrapper
              as={H4}
              alignParagraph={alignParagraph}
              justifyParagraph={handleJustifyCases(attribs.class)}
            >
              {domToReact(children, options)}
            </TextWrapper>
          );

        case 'h5':
          return (
            <TextWrapper
              as={H5}
              alignParagraph={alignParagraph}
              justifyParagraph={handleJustifyCases(attribs.class)}
            >
              {domToReact(children, options)}
            </TextWrapper>
          );

        case 'h6':
          return (
            <TextWrapper
              as={H6}
              alignParagraph={alignParagraph}
              justifyParagraph={handleJustifyCases(attribs.class)}
            >
              {domToReact(children, options)}
            </TextWrapper>
          );

        case 'strong':
          return (
            <TextWrapper
              as={Strong}
              alignParagraph={alignParagraph}
              justifyParagraph={handleJustifyCases(attribs.class)}
            >
              {domToReact(children, options)}
            </TextWrapper>
          );

        case 'p':
          return (
            <TextWrapper
              alignParagraph={alignParagraph}
              justifyParagraph={handleJustifyCases(attribs.class)}
            >
              {domToReact(children, options)}
            </TextWrapper>
          );

        case 'ul':
          return (
            <TextWrapper
              as="ul"
              alignParagraph={alignParagraph}
              justifyParagraph={handleJustifyCases(attribs.class)}
            >
              {domToReact(children, options)}
            </TextWrapper>
          );
        case 'ol':
          return (
            <TextWrapper
              as="ol"
              alignParagraph={alignParagraph}
              justifyParagraph={handleJustifyCases(attribs.class)}
            >
              {domToReact(children, options)}
            </TextWrapper>
          );

        case 'blockquote':
          return (
            <TextWrapper
              as="blockquote"
              style={{
                display: 'flex',
                alignItems: 'center',
                minHeight: '50px',
              }}
              alignParagraph={alignParagraph}
              justifyParagraph={handleJustifyCases(attribs.class)}
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
      }

      if (attribs.class === 'ql-divider-standard')
        return <Divider type="standard" />;

      if (attribs.class === 'ql-divider-fancy') return <Divider type="fancy" />;

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

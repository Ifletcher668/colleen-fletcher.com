import React from 'react';
import styled from 'styled-components';
import { Anchor, Link, Heading, Paragraph as P, Span } from '../../Atoms';
import parse, { domToReact, HTMLReactParserOptions } from 'html-react-parser';
import { Element } from 'domhandler/lib/node';
import { Grid } from '../../Containers';

export interface Props {
  data: StrapiComponentTextParagraph;
}

interface WrapperProps {
  alignParagraph: AlignValues;
  justifyParagraph: JustifyValues;
}

const TextWrapper = styled(P)<WrapperProps>`
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

  text-align: ${props => {
    switch (props.justifyParagraph) {
      case 'left':
        return 'left';
      case 'center':
        return 'center';
      default:
        // right
        return 'right';
    }
  }};

  justify-self: ${props => {
    switch (props.justifyParagraph) {
      case 'right':
        return 'end';
      case 'center':
        return 'center';
      default:
        // left
        return 'start';
    }
  }};
`;

const H1 = styled(Heading).attrs({ as: 'h1' })``;

const H2 = styled(Heading).attrs({ as: 'h2' })``;

const H3 = styled(Heading).attrs({ as: 'h3' })``;

const Paragraph: React.FC<Props> = ({ data }: Props) => {
  const { body, alignParagraph, justifyParagraph } = data;

  // TODO: Add images to parser
  const options: HTMLReactParserOptions = {
    replace: domNode => {
      if (!(domNode instanceof Element)) return null;

      const { name, children, attribs } = domNode;

      if (name === 'a') {
        // TODO: Every link in production starts with https... Fix
        const isExternalLink = attribs.href.match('^(http|https)://');
        return isExternalLink ? (
          <Anchor
            color={'earth'}
            href={attribs.href}
            target={attribs.target}
            rel={attribs.rel}
          >
            {domToReact(children, options)}
          </Anchor>
        ) : (
          <Link to={attribs.href}>{domToReact(children, options)}</Link>
        );
      }

      if (name === 'h1')
        return (
          <TextWrapper
            as={H1}
            alignParagraph={alignParagraph}
            justifyParagraph={justifyParagraph}
          >
            {domToReact(children, options)}
          </TextWrapper>
        );

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
            {domToReact(children, options)}
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
    <Grid containerType="section" styling={{ height: '100%', width: '100%' }}>
      {parse(body, options)}
    </Grid>
  );
};

export default Paragraph;

import React from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { color, time } from '../../../styled-components/_mixins';

type Props = {
  color?: keyof DefaultTheme['color'];
};

const sharedAnchorStyles = css<Props>`
  text-decoration: none;
  transition: ${time('medium')} ease-out;
  color: ${props =>
    props.color ? color(props.color) : color('lightSlateGray')};

  &:hover {
    border-bottom: 1px solid
      ${props => (props.color ? color(props.color) : color('lightSlateGray'))};
  }
`;

// External Link
const Anchor = styled.a<Props>`
  ${sharedAnchorStyles}
`;

// Internal Link
const InternalLink = styled(GatsbyLink)`
  ${sharedAnchorStyles}
`;

const Link = ({
  children,
  className,
  to,
  activeClassName,
  partiallyActive,
  color,
  ...other
}: any): JSX.Element => {
  const isInternalLink = /^\/(?!\/)/.test(to);

  // Use Gatsby Link for internal links, and <a> for others
  if (isInternalLink) {
    return (
      <InternalLink
        to={to}
        color={color}
        className={className}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </InternalLink>
    );
  }
  return (
    <Anchor className={className} href={to} color={color} {...other}>
      {children}
    </Anchor>
  );
};

export default styled(Link)``;

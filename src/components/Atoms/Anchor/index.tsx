import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { color, time, font } from '../../../StyledComponents/_mixins';

type Props = {
  color?: keyof DefaultTheme['color'];
};

// External Link
export const Anchor = styled.a<Props>`
  color: ${props => (props.color ? color(props.color) : color('aterrima'))};
  text-decoration: none;

  &:hover {
    transition: ${time('fast')} ease-out;
    border-bottom: ${color('lilac')} solid 2px;
    color: ${color('dark-blue')};
  }
`;

// Internal Link
export const InternalLink = styled(GatsbyLink)`
  color: ${color('aterrima')};
  text-decoration: none;

  &:hover {
    transition: ${props => props.theme.time.fast} ease-out;
    border-bottom: ${color('lilac')} solid 2px;
    color: ${color('dark-blue')};
  }
`;

export const Link = ({
  children,
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
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </InternalLink>
    );
  }
  return (
    <Anchor href={to} color={color} {...other}>
      {children}
    </Anchor>
  );
};

import React from 'react';
import styled from 'styled-components';
import { font, size } from '../../styled-components/_mixins';
import { Button as ButtonWrapper } from '../Elements';

type V = 'primary' | 'secondary' | 'tertiary';
type T = 'submit' | 'reset' | 'button';
type Props = {
  children: React.ReactNode;
  variant: V;
  type?: T;
  center?: boolean;
  onClick?: () => void;
  className?: string;
};

const Button = ({
  children,
  className,
  variant = 'primary',
  type,
  // center = false,
  onClick,
}: Props): JSX.Element => {
  return (
    <ButtonWrapper
      type={type ?? 'submit'}
      variant={variant}
      onClick={onClick}
      className={className}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;

export const MobileMenuToggleButton = styled(ButtonWrapper)`
  font-size: ${font('size', 'large')};
  padding: ${size('padding', 'xsmall')};
`;

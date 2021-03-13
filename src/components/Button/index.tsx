import React from 'react';
import styled from 'styled-components';
import { size } from '../../StyledComponents/_mixins';
import { Button as ButtonWrapper } from '../Atoms';

type V = 'primary' | 'secondary' | 'tertiary';
type T = 'submit' | 'reset' | 'button';
interface Props extends Pick<DefaultProps, 'className'> {
    children: React.ReactNode;
    variant: V;
    type?: T;
    center?: boolean;
    onClick?: () => void;
}

const Button: React.FC<Props> = ({
    children,
    className,
    variant = 'primary',
    type,
    onClick,
    center = false,
}: Props) => {
    return (
        <ButtonWrapper
            variant={variant}
            type={type ?? 'submit'}
            onClick={onClick}
        >
            {children}
        </ButtonWrapper>
    );
};

export default Button;

export const MobileMenuToggleButton = styled(ButtonWrapper)`
    color: var(--color-primary-blue);
    font-size: var(--size-text-large);
    transition: var(--time-medium);
    padding: ${size('padding', 'xsmall')};
`;

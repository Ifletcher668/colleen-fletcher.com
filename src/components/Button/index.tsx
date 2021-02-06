import React from 'react';
import styled from 'styled-components';
import { Button as ButtonWrapper } from '../Atoms';

type V = 'primary' | 'secondary' | 'tertiary' | '';
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
    variant = '',
    type,
    onClick,
    center = false,
}: Props) => {
    return (
        <ButtonWrapper
            className={`btn${variant ? ' ' + variant : ''}${
                center ? ' center' : ''
            }${className ? ' ' + className : ''}`}
            type={type}
            onClick={onClick}
        >
            {children}
        </ButtonWrapper>
    );
};

export default Button;

export const MobileMenuToggleButton = styled(Button)`
    color: var(--color-primary-blue);
    font-size: var(--size-text-large);
    transition: var(--time-medium);
`;

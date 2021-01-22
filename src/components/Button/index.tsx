import React from 'react';

type V = 'primary' | 'secondary' | 'tertiary';
type T = 'submit' | 'reset' | 'button';
interface Props {
    children: React.ReactNode;
    variant: V;
    type?: T;
    center?: boolean;
    onClick?: () => void;
}

const Button: React.FC<Props> = ({
    children,
    variant = 'primary',
    type,
    onClick,
    center = false,
}: Props) => {
    return (
        <button
            className={`btn${variant ? ' ' + variant : ''}${
                center ? ' center' : ''
            }`}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;

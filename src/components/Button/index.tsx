import React from 'react';

interface Props {
    children: React.ReactNode;
    variant: 'primary' | 'secondary' | 'tertiary';
    type?: 'submit' | 'reset' | 'button';
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

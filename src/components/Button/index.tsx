import React from 'react';

interface Props {
    children: React.ReactNode;
    variant: 'primary' | 'secondary';
    type?: 'submit' | 'reset' | 'button';
    onClick?: () => void;
}

const Button: React.FC<Props> = ({children, variant, type, onClick}: Props) => {
    return (
        <button className={`btn ${variant}`} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;

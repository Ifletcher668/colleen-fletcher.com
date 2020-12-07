import React from 'react';

interface Props {
    // color: string;
    children: React.ReactNode;
    variant: 'primary' | 'secondary';
    type?: 'submit' | 'reset' | 'button';
    onClick: () => void;
}

const Button: React.FC<Props> = ({
    // color,
    children,
    variant,
    type,
    onClick,
}: Props) => {
    return (
        <button className={`btn btn-${variant}`} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;

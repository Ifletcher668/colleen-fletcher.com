import React from 'react';

const Card: React.FC<DefaultProps> = ({
    className,
    children,
    style,
}: DefaultProps) => {
    return (
        <article
            style={style}
            className={`card ${
                className
                    ? Array.isArray(className)
                        ? className.join('')
                        : className
                    : ''
            }`}
        >
            {children}
        </article>
    );
};

export default Card;

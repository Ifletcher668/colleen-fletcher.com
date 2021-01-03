import React from 'react';

const Card: React.FC<DefaultProps> = ({classNames, children}: DefaultProps) => {
    return (
        <article className={`card ${classNames ? classNames.join('') : ''}`}>
            {children}
        </article>
    );
};

export default Card;

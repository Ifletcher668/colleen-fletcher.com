import React from 'react';

const Body: React.FC<DefaultProps> = ({classNames, children}: DefaultProps) => {
    return (
        <>
            <div
                className={`card-body ${classNames ? classNames.join('') : ''}`}
            >
                {children}
            </div>
        </>
    );
};

export default Body;

import React from 'react';

const Header: React.FC<DefaultProps> = ({
    classNames,
    children,
}: DefaultProps) => {
    return (
        <>
            <div
                className={`card-header ${
                    classNames ? classNames.join('') : ''
                }`}
            >
                {children}
            </div>
        </>
    );
};

export default Header;

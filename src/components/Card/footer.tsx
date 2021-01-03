import React from 'react';

const Footer: React.FC<DefaultProps> = ({
    classNames,
    children,
}: DefaultProps) => {
    return (
        <>
            <div
                className={`card-footer ${
                    classNames ? classNames.join('') : ''
                }`}
            >
                {children}
            </div>
        </>
    );
};

export default Footer;

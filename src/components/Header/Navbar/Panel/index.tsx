import React from 'react';

interface Props {
    children: React.ReactNode;
    onMouseOut: () => void;
}

const Panel: React.FC<Props> = ({children, onMouseOut}: Props) => {
    return (
        <div className={`navbar-panel`} onMouseOut={onMouseOut}>
            {children}
        </div>
    );
};

export default Panel;

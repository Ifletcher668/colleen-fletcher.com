import React from 'react';

const Main: React.FC<DefaultProps> = ({children}: DefaultProps) => {
    return (
        <main role="main" className="site-main">
            {children}
        </main>
    );
};
export default Main;

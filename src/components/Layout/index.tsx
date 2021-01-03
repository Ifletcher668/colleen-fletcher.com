import React, {createContext, useEffect, useState} from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';

type TransitionProps = {
    paintDrip: boolean;
    hex: string;
    duration: number;
};

type LayoutCtx = {
    TRANSITION_PROPS: TransitionProps;
};

export const LayoutContext = createContext<LayoutCtx | {[key: string]: any}>(
    {},
);

const Layout: React.FC<PageProps> = ({children, location}: PageProps) => {
    const [documentIsAtTop, setDocumentIsAtTop] = useState<boolean>(true);

    const handleScroll = () =>
        window.scrollY < 200
            ? setDocumentIsAtTop(true)
            : setDocumentIsAtTop(false);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return document.addEventListener('scroll', handleScroll);
    }, [documentIsAtTop]);

    const headerClassNames = ['site-header'];
    if (documentIsAtTop) {
        headerClassNames.push('at-top');
    }

    const TRANSITION_PROPS: TransitionProps = {
        paintDrip: true,
        hex: '#CBEDFC',
        duration: 0.7,
    };

    const ctx = {
        TRANSITION_PROPS,
    };

    const handleHeaderBehavior = () =>
        // hides header at top of homepage
        documentIsAtTop && location.pathname === '/' ? (
            ''
        ) : (
            <Header className={headerClassNames} />
        );

    return (
        <LayoutContext.Provider value={ctx}>
            {handleHeaderBehavior()}
            <Main>{children}</Main>
            <Footer />
        </LayoutContext.Provider>
    );
};

export default Layout;

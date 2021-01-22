import React, {useEffect, useState} from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';
import {ThemeProvider} from 'styled-components';
import {DefaultTheme} from 'styled-components';

import {useBreakpoints} from '../../utils/Breakpoints/useBreakpoints';

const Layout: React.FC<PageProps> = ({children, location}: PageProps) => {
    const [documentIsAtTop, setDocumentIsAtTop] = useState<boolean>(true);
    const handleScrollY = () =>
        window.scrollY < 200
            ? setDocumentIsAtTop(true)
            : setDocumentIsAtTop(false);

    useEffect(() => {
        document.addEventListener('scroll', handleScrollY);
        return document.addEventListener('scroll', handleScrollY);
    }, [documentIsAtTop]);

    const theme: DefaultTheme = {
        // Semantic helper functions to add media queries
    };

    const breakpoints = useBreakpoints();
    // TODO: Horribly brute-forced...
    breakpoints.forEach((breakpoint, idx) => {
        if (idx === 0) theme['bp-xl'] = breakpoint as number;
        else if (idx === 1) theme['bp-lg'] = breakpoint as number;
        else if (idx === 2) theme['bp-md'] = breakpoint as number;
        else if (idx === 3) theme['bp-sm'] = breakpoint as number;
        else if (idx === 4) theme['bp-xs'] = breakpoint as number;
    });

    const headerClassNames = ['site-header'];
    if (documentIsAtTop) {
        headerClassNames.push('at-top');
    }

    const handleHeaderBehavior = () =>
        // hides header at top of homepage
        documentIsAtTop && location.pathname === '/' ? (
            ''
        ) : (
            <Header className={headerClassNames} />
        );

    return (
        <ThemeProvider theme={theme}>
            {handleHeaderBehavior()}
            <Main>{children}</Main>
            <Footer />
        </ThemeProvider>
    );
};

export default Layout;

import React, {useEffect, useState} from 'react';
import {TransitionPortal} from 'gatsby-plugin-transition-link';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';

interface Props extends DefaultProps {
    location: Location;
}

const Layout: React.FC<Props> = ({children, location}: Props) => {
    const [documentIsAtTop, setDocumentIsAtTop] = useState<boolean>(true);

    const handleScroll = () => {
        if (window.scrollY === 0) {
            setDocumentIsAtTop(true);
        } else {
            setDocumentIsAtTop(false);
        }
    };

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return document.addEventListener('scroll', handleScroll);
    }, [documentIsAtTop]);

    const headerClassNames = ['site-header'];

    if (location.pathname === '/') {
        headerClassNames.push('home-page');
    } else {
        const pn = location.pathname.slice(1);
        headerClassNames.push(pn);
    }
    if (documentIsAtTop) {
        headerClassNames.push('at-top');
    }

    const addHeader = () => {
        if (documentIsAtTop && location.pathname === '/') {
            return '';
        } else if (documentIsAtTop) {
            return <Header classes={headerClassNames} />;
        } else {
            // if scrolling
            return (
                <TransitionPortal>
                    <Header classes={headerClassNames} />
                </TransitionPortal>
            );
        }
    };

    return (
        <>
            {addHeader()}
            <Main>{children}</Main>
            <Footer />
        </>
    );
};

export default Layout;

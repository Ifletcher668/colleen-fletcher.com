import React, {useEffect, useState} from 'react';
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
    }, []);

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

    return (
        <>
            {documentIsAtTop && location.pathname === '/' ? (
                ''
            ) : (
                <Header classes={headerClassNames} />
            )}
            <Main>{children}</Main>
            <Footer />
        </>
    );
};

export default Layout;

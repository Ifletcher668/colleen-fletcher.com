import React, {useEffect, useState} from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';

interface Props extends DefaultProps {
    location: Location;
}

const Layout: React.FC<Props> = ({children, location}: Props) => {
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

    const handleHeaderBehavior = () =>
        // hides header at top of homepage
        documentIsAtTop && location.pathname === '/' ? (
            ''
        ) : (
            <Header classes={headerClassNames} />
        );

    return (
        <>
            {handleHeaderBehavior()}
            <Main>{children}</Main>
            <Footer />
        </>
    );
};

export default Layout;

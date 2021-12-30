import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styled-components/defaultTheme';
import GlobalStylesheet from '../../styled-components/globalStyles';

const Layout = ({ children, location }: PageProps): JSX.Element => {
  const [documentIsAtTop, setDocumentIsAtTop] = useState<boolean>(true);
  const handleScrollY = (): void =>
    window.scrollY < 200 ? setDocumentIsAtTop(true) : setDocumentIsAtTop(false);

  useEffect(() => {
    document.addEventListener('scroll', handleScrollY);
    return () => document.removeEventListener('scroll', handleScrollY);
  }, [documentIsAtTop]);

  const headerClassNames = ['site-header'];
  if (documentIsAtTop) {
    headerClassNames.push('at-top');
  }

  const handleHeaderBehavior = (): JSX.Element =>
    // hides header at top of homepage
    documentIsAtTop && location.pathname === '/' ? (
      <></>
    ) : (
      <Header className={headerClassNames} />
    );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStylesheet />
      {handleHeaderBehavior()}
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;

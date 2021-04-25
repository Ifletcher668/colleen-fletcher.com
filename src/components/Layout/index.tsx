import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../StyledComponents/defaultTheme';

const Layout: React.FC<PageProps> = ({ children, location }: PageProps) => {
  const [documentIsAtTop, setDocumentIsAtTop] = useState<boolean>(true);
  const handleScrollY = () =>
    window.scrollY < 200 ? setDocumentIsAtTop(true) : setDocumentIsAtTop(false);

  useEffect(() => {
    document.addEventListener('scroll', handleScrollY);
    return () => document.removeEventListener('scroll', handleScrollY);
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

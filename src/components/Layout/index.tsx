import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';

interface Props extends DefaultProps {
    location: Location;
}

const Layout: React.FC<Props> = (props: Props) => {
    console.log(props.location);

    return (
        <>
            <Header />
            <Main>{props.children}</Main>
            <Footer />
        </>
    );
};

export default Layout;

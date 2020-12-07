import React, {useState} from 'react';
import Image from 'gatsby-image';
import {useImage} from '../../utils/graphql/queries/useImage';
import Navbar from './Navbar';

const Header: React.FC = () => {
    const {frangipaniImg} = useImage();

    return (
        <header role="header" className="site-header">
            <Image
                fluid={frangipaniImg.childImageSharp.fluid}
                style={{width: '100px', height: '100px'}}
            />
            {/* <Navbar /> */}
            <Navbar />

            <Image
                fluid={frangipaniImg.childImageSharp.fluid}
                style={{width: '100px', height: '100px'}}
            />
        </header>
    );
};

export default Header;

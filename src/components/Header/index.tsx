import React from 'react';
import Image from 'gatsby-image';
import {useImage} from '../../utils/graphql/queries/useImage';
import Navbar from './Navbar';

const Header: React.FC<DefaultProps> = ({className}: DefaultProps) => {
    const {frangipaniImg} = useImage();

    return (
        <header
            role="header"
            className={
                className
                    ? Array.isArray(className)
                        ? className.join(' ')
                        : className
                    : ''
            }
        >
            {/* // TODO add correct image*/}
            <Image
                className="frangipani"
                fluid={frangipaniImg.childImageSharp.fluid}
                style={{maxWidth: '100px', maxHeight: '100px'}}
            />
            <Navbar className="navbar" />
            <Image
                className="frangipani"
                fluid={frangipaniImg.childImageSharp.fluid}
                style={{maxWidth: '100px', maxHeight: '100px'}}
            />
        </header>
    );
};

export default Header;

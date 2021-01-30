import React from 'react';
import {useImage} from '../../graphql/queries/useImage';
import Navbar from './Navbar';
import BlueFrangipani from '../../assets/images/svg/blue-frangipani.svg';

const Header: React.FC<DefaultProps> = ({className}: DefaultProps) => {
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
            {/* <Image
                className="frangipani"
                fluid={frangipaniImg.childImageSharp.fluid}
                style={{maxWidth: '100px', maxHeight: '100px'}}
            /> */}
            <BlueFrangipani width={100} height={100} />
            <Navbar className="navbar" />
            <BlueFrangipani width={100} height={100} />
            {/* <Image
                className="frangipani"
                fluid={frangipaniImg.childImageSharp.fluid}
                style={{maxWidth: '100px', maxHeight: '100px'}}
            /> */}
        </header>
    );
};

export default Header;

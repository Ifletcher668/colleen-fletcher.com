import React from 'react';
import Image from 'gatsby-image';
import {useImage} from '../../utils/graphql/queries/useImage';
import Navbar from './Navbar';

const Header: React.FC<DefaultProps> = (props: DefaultProps) => {
    const {frangipaniImg} = useImage();

    return (
        <header
            role="header"
            className={
                props.classes ? props.classes.join(' ') : props.className
            }
        >
            <Image
                className="frangipani"
                fluid={frangipaniImg.childImageSharp.fluid}
                style={{width: '100px', height: '100px'}}
            />
            <Navbar className="nav-tabs" />
            <Image
                className="frangipani"
                fluid={frangipaniImg.childImageSharp.fluid}
                style={{width: '100px', height: '100px'}}
            />
        </header>
    );
};

export default Header;

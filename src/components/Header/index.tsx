import React from 'react';
import Navbar from './Navbar';
import BlueFrangipani from '../../assets/images/svg/wholistic-blue-frangipani.svg';

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
            <BlueFrangipani width={100} height={100} />
            <Navbar className="navbar" />
            <BlueFrangipani width={100} height={100} />
        </header>
    );
};

export default Header;

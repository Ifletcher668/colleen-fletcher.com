import React, {createContext, createRef, RefObject, useState} from 'react';
import Navbar from './Navbar';
import BlueFrangipani from '../../assets/images/svg/wholistic-blue-frangipani.svg';
import MobileMenu from './MobileNav';

type Ctx = {
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
};

export const MobileMenuContext = createContext<Ctx | {[key: string]: any}>({});

const Header: React.FC<DefaultProps> = ({className}: DefaultProps) => {
    const target: RefObject<HTMLDivElement> = createRef();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

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
            ref={target}
        >
            <BlueFrangipani width={100} height={100} />
            <MobileMenuContext.Provider
                value={{
                    isMobileMenuOpen,
                    toggleMobileMenu,
                }}
            >
                <Navbar className="navbar" />
                <MobileMenu />
            </MobileMenuContext.Provider>
            <BlueFrangipani width={100} height={100} />
        </header>
    );
};

export default Header;

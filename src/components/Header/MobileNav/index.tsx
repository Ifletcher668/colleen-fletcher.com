import React, {Fragment, useContext, useEffect, useState} from 'react';
import {FaTimes} from 'react-icons/fa';

import styled from 'styled-components';
import {useMenuItems} from '../../../graphql/queries/useMenuItems';
import {MobileMenuContext} from '../index';
import {NavbarContext} from '../Navbar';
import MenuItem from './MenuItem';

const MobileMenu: React.FC<DefaultProps> = (props: DefaultProps) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const {isMobileMenuOpen, toggleMobileMenu} = useContext(MobileMenuContext);

    // useEffect(() => {
    //     setIsLoading(!isLoading);
    //     return setIsLoading(true);
    // }, [isSubMenuOpen]);

    const {
        strapi: {menuItems},
    } = useMenuItems();

    return isMobileMenuOpen ? (
        <MobileNav>
            <MobileNavHeader className="mobile-menu-header">
                <button
                    type="button"
                    className="close-btn"
                    onClick={() => toggleMobileMenu()}
                >
                    <FaTimes />
                </button>
            </MobileNavHeader>
            <MobileNavLinks className="mobile-menu-links">
                {menuItems.map((menuItem, idx) => {
                    if (menuItem.content.length > 0) {
                        return <MenuItem key={idx} {...menuItem} />;
                    } else {
                        // no data to show
                        return <MenuItem key={idx} {...menuItem} />;
                    }
                })}
            </MobileNavLinks>
        </MobileNav>
    ) : (
        <></>
    );
};

export default MobileMenu;

interface Props {
    isMobileMenuOpen: boolean;
}

const MobileNav = styled.nav<Props>`
    display: grid;
    grid-template-columns: [spacer]0.5fr [content]2fr;
    background: var(--color-primary-blue);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    transition: ${props => (props.isMobileMenuOpen ? 'var(--time-slow)' : '0')};
    transform: ${props =>
        props.isMobileMenuOpen ? 'translateX(-100%)' : 'translateX(0)'};
`;

const MobileNavHeader = styled.div`
    position: absolute;
    top: 0;
    right: 15px;
`;

const MobileNavLinks = styled.ul`
    display: flex;
    flex-flow: column nowrap;
    gap: var(--size-mg-large);
    grid-column: content;
    grid-row: links;
`;

const MobileNavLink = styled.li`
    padding-left: 5px;
    svg {
        color: var(--color-lilac);
    }
    &:hover {
        box-shadow: -2px 0 0 0 var(--color-lilac);
    }
`;

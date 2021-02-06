import React, {forwardRef, useContext} from 'react';
import {FaTimes} from 'react-icons/fa';

import styled from 'styled-components';

import {MobileMenuContext} from '../index';
import MenuItem from './MenuItem';

interface Props extends DefaultProps {
    items: any[];
}

const MobileMenu: React.FC<Props> = forwardRef(({items}: Props, ref) => {
    const {isMobileMenuOpen, toggleMobileMenu} = useContext(MobileMenuContext);

    return isMobileMenuOpen ? (
        // TODO: How to pass props to styled-components without actually adding the prop
        <MobileNav isMobileMenuOpen ref={ref}>
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
                {items.map((item, idx) => {
                    return <MenuItem key={idx} {...item} />;
                })}
            </MobileNavLinks>
        </MobileNav>
    ) : (
        <></>
    );
});

export default MobileMenu;

interface StyledProps {
    isMobileMenuOpen: boolean;
}

const MobileNav = styled.nav<StyledProps>`
    display: grid;
    grid-template-columns: [spacer]0.5fr [content]2fr;
    background: var(--color-primary-blue);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
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

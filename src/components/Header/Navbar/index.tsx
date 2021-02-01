import React, {createContext, useContext, useEffect, useState} from 'react';
import {useMenuItems} from '../../../graphql/queries/useMenuItems';
import SearchContainer from '../../SearchContainer';
import MenuItem from './MenuItem';
import {FaAlignJustify} from 'react-icons/fa';
import {MobileMenuToggleButton} from '../../Button';
import Heading from '../../Heading';
import {useBreakpoints} from '../../../utils/Breakpoints/useBreakpoints';
import {MobileMenuContext} from '../index';

type NavCtx = {
    isActivePanel: boolean;
    setIsActivePanel: React.Dispatch<React.SetStateAction<boolean>>;
    activePanelName: string;
    setActivePanelName: React.Dispatch<React.SetStateAction<string>>;
};

export const NavbarContext = createContext<NavCtx | {[key: string]: any}>({});

const Navbar: React.FC<DefaultProps> = (props: DefaultProps) => {
    const {className} = props;

    const [isActivePanel, setIsActivePanel] = useState<boolean>(false);
    const [activePanelName, setActivePanelName] = useState<string>('');
    const [isFullMenu, setIsFullMenu] = useState<boolean>(true);
    const ctx = {
        isActivePanel,
        setIsActivePanel,
        activePanelName,
        setActivePanelName,
    };

    const {toggleMobileMenu} = useContext(MobileMenuContext);

    const {
        strapi: {menuItems},
    } = useMenuItems();

    const [xlarge, large, medium, small, xsmall] = useBreakpoints();

    const innerWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
    const changeMenuListener = () => {
        window.innerWidth >= small ? setIsFullMenu(true) : setIsFullMenu(false);
    };

    // verify which menu to use on first render
    useEffect(() => {
        changeMenuListener();
    }, []);

    useEffect(() => {
        window.addEventListener('resize', changeMenuListener);
        return window.addEventListener('resize', changeMenuListener);
    }, [window.innerWidth]);

    return (
        <nav
            className={
                className
                    ? Array.isArray(className)
                        ? className.join(' ')
                        : className
                    : ''
            }
        >
            <NavbarContext.Provider value={ctx}>
                <ul className="nav-list">
                    {isFullMenu ? (
                        menuItems.map((menuItem, idx) => {
                            if (menuItem.content.length > 0) {
                                // show active panel
                                let cn = '';
                                if (menuItem.text === activePanelName) {
                                    cn += 'active';
                                }
                                return (
                                    <MenuItem
                                        key={idx}
                                        className={cn}
                                        {...menuItem}
                                    />
                                );
                            } else {
                                // no data to show
                                return <MenuItem key={idx} {...menuItem} />;
                            }
                        })
                    ) : (
                        <>
                            <Heading level={1}>Colleen Fletcher</Heading>
                            <MobileMenuToggleButton
                                type="button"
                                variant=""
                                className="toggle-menu"
                                onClick={() => toggleMobileMenu()}
                            >
                                <FaAlignJustify />
                            </MobileMenuToggleButton>
                        </>
                    )}
                </ul>
            </NavbarContext.Provider>
            <SearchContainer />
        </nav>
    );
};

export default Navbar;

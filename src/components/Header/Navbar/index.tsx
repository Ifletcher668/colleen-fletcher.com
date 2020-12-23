import React, {createContext, useState} from 'react';
import {useStrapiData} from '../../../utils/graphql/queries/useStrapi';
import MenuItem from './MenuItem';

// Context
type TransitionProps = {
    paintDrip: boolean;
    hex: string;
    duration: number;
};

type NavCtx = {
    isActivePanel: boolean;
    setIsActivePanel: React.Dispatch<React.SetStateAction<boolean>>;
    activePanelName: string;
    setActivePanelName: React.Dispatch<React.SetStateAction<string>>;
    TRANSITION_PROPS: TransitionProps;
};

export const NavbarContext = createContext<NavCtx | {[key: string]: any}>({});

const Navbar: React.FC<DefaultProps> = ({className}: DefaultProps) => {
    const [isActivePanel, setIsActivePanel] = useState<boolean>(false);
    const [activePanelName, setActivePanelName] = useState<string>('');

    const {
        strapi: {menuItems},
    } = useStrapiData();

    const TRANSITION_PROPS: TransitionProps = {
        paintDrip: true,
        hex: '#CBEDFC',
        duration: 0.7,
    };

    const ctx = {
        isActivePanel,
        setIsActivePanel,
        activePanelName,
        setActivePanelName,
        TRANSITION_PROPS,
    };

    return (
        <nav className={className}>
            <NavbarContext.Provider value={ctx}>
                <ul className="nav-list">
                    {menuItems.map((menuItem, idx) => {
                        if (
                            menuItem.blogs.length > 0 ||
                            menuItem.offerings.length > 0
                        ) {
                            // show active panel
                            let className = '';
                            if (menuItem.title === activePanelName) {
                                className += 'active';
                            }
                            return (
                                <MenuItem
                                    key={idx}
                                    className={className}
                                    {...menuItem}
                                />
                            );
                        } else {
                            // no data needing panel
                            return <MenuItem key={idx} {...menuItem} />;
                        }
                    })}
                </ul>
            </NavbarContext.Provider>
        </nav>
    );
};

export default Navbar;

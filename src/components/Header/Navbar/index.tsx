import React, {createContext, useState} from 'react';
import {useMenuItems} from '../../../graphql/queries/useMenuItems';
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

const Navbar: React.FC<DefaultProps> = (props: DefaultProps) => {
    const {className} = props;
    const [isActivePanel, setIsActivePanel] = useState<boolean>(false);
    const [activePanelName, setActivePanelName] = useState<string>('');

    const {
        strapi: {menuItems},
    } = useMenuItems();

    const ctx = {
        isActivePanel,
        setIsActivePanel,
        activePanelName,
        setActivePanelName,
    };

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
                    {menuItems.map((menuItem, idx) => {
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
                    })}
                </ul>
            </NavbarContext.Provider>
        </nav>
    );
};

export default Navbar;

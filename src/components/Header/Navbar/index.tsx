import React, {createContext, useState} from 'react';
import config from '../../../../config/website';
import MenuItem from './MenuItem';

// Context
interface LinkProps {
    paintDrip: boolean;
    hex: string;
    duration: number;
}
type NavCtx = {
    activePanelName: string;
    setActivePanelName: React.Dispatch<React.SetStateAction<string>>;
    LINK_TRANSITION_PROPS: LinkProps;
};

export const NavbarContext = createContext<NavCtx | {[key: string]: any}>({});

const Navbar: React.FC<DefaultProps> = (props: DefaultProps) => {
    const pageLinks = Object.values(config.pageLinks);
    const [activePanelName, setActivePanelName] = useState('');

    const LINK_TRANSITION_PROPS = {
        paintDrip: true,
        hex: '#CBEDFC',
        duration: 0.7,
        // direction: 'right',
        // bg: '#7dd1f7',
    };

    const ctx = {
        activePanelName,
        setActivePanelName,
        LINK_TRANSITION_PROPS,
    };

    return (
        <nav className={props.className}>
            <NavbarContext.Provider value={ctx}>
                <ul className="nav-list">
                    {pageLinks.map((link, idx) => {
                        // if submenu
                        if (link.route.data) {
                            let className = '';
                            if (link.name === activePanelName) {
                                className += 'active';
                            }
                            return (
                                <MenuItem
                                    key={idx}
                                    className={className}
                                    data={link}
                                />
                            );
                        } else {
                            return <MenuItem key={idx} data={link} />;
                        }
                    })}
                </ul>
            </NavbarContext.Provider>
        </nav>
    );
};

export default Navbar;

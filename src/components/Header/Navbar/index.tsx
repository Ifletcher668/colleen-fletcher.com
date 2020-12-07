import React, {useState} from 'react';
import config from '../../../../config/website';
import MenuItem from './MenuItem';

const Navbar: React.FC = () => {
    const routes = Object.values(config.routes);
    const [activeTab, setActiveTab] = useState('');
    return (
        <nav className="nav-tabs">
            <ul className="tab-list">
                {routes.map((route, idx) => {
                    let className = '';
                    if (route.name === activeTab && route.submenu) {
                        className += 'active';
                    }
                    return (
                        <MenuItem
                            key={idx}
                            route={route}
                            className={className}
                            onMouseOver={() => {
                                setActiveTab(route.name);
                            }}
                            onMouseOut={() => {
                                setActiveTab('');
                            }}
                        />
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;

import React, {useState} from 'react';
import config from '../../../../config/website';
import MenuItem from './MenuItem';

const Navbar: React.FC<DefaultProps> = (props: DefaultProps) => {
    const routes = Object.values(config.pages);
    const [activeTab, setActiveTab] = useState('');
    return (
        <nav className={props.className}>
            <ul className="tab-list">
                {routes.map((page, idx) => {
                    let className = '';
                    if (page.name === activeTab && page.route.data) {
                        className += 'active';
                    }
                    return (
                        <MenuItem
                            key={idx}
                            className={className}
                            data={page}
                            onMouseOver={() => {
                                setActiveTab(page.name);
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

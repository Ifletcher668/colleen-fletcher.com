import React, {useContext, useState} from 'react';
import Image from 'gatsby-image';
import ALink from 'gatsby-plugin-transition-link/AniLink';
import {useImage} from '../../../../utils/graphql/queries/useImage';
import {NavbarContext} from '../index';

interface Props {
    data: SubMenu[];
}

const Panel: React.FC<Props> = ({data}: Props) => {
    const {frangipaniImg} = useImage();
    const [subMenuItems, setSubMenuItems] = useState<JSX.Element[]>([]);
    const [activeSubMenuItemName, setActiveSubMenuItemName] = useState('');

    const {setActivePanelName, LINK_TRANSITION_PROPS} = useContext(
        NavbarContext,
    );

    return (
        <nav
            className="panel-navbar"
            onMouseLeave={() => {
                setActivePanelName(''), setSubMenuItems([]);
            }}
        >
            <ul className="submenu">
                {data.map(({path, name, data}) => {
                    const subMenu: JSX.Element[] = [];
                    let className = '';
                    if (data) {
                        if (name === activeSubMenuItemName) {
                            className += 'active';
                        }
                        data.map(menuItem => {
                            subMenu.push(
                                <ALink key={menuItem.name} to={menuItem.path}>
                                    {menuItem.name}
                                </ALink>,
                            );
                        });
                    }
                    return (
                        <li key={name} className={className}>
                            <ALink
                                to={path}
                                onMouseOver={() => {
                                    setSubMenuItems(subMenu),
                                        setActiveSubMenuItemName(name);
                                }}
                                {...LINK_TRANSITION_PROPS}
                            >
                                {name}
                            </ALink>
                        </li>
                    );
                })}
            </ul>
            <section className="content">
                {subMenuItems.length < 1 && (
                    <Image
                        fluid={frangipaniImg.childImageSharp.fluid}
                        style={{width: '200px', height: '200px'}}
                    />
                )}
                <ul>
                    {subMenuItems.map(item => {
                        return <li>{item}</li>;
                    })}
                </ul>
            </section>
        </nav>
    );
};

export default Panel;

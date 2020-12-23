import React, {useContext, useState} from 'react';
import Image from 'gatsby-image';
import ALink from 'gatsby-plugin-transition-link/AniLink';
import {useImage} from '../../../../utils/graphql/queries/useImage';
import {NavbarContext} from '../index';

interface Props {
    blogs?: StrapiBlog[];
    offerings?: StrapiOfferings[];
    baseUrl: string;
}

const Panel: React.FC<Props> = ({blogs, offerings, baseUrl}: Props) => {
    const {frangipaniImg} = useImage();
    const [subMenuItems, setSubMenuItems] = useState<JSX.Element[]>([]);
    const [activeSubMenuItemName, setActiveSubMenuItemName] = useState('');
    const {setIsActivePanel, setActivePanelName, TRANSITION_PROPS} = useContext(
        NavbarContext,
    );

    console.log(subMenuItems);

    return (
        <nav
            className="panel-navbar"
            onMouseLeave={() => {
                setActivePanelName(''),
                    setSubMenuItems([]),
                    setIsActivePanel(false);
            }}
        >
            <ul className="submenu">
                {offerings &&
                    offerings.map(({title, slug, services}) => {
                        const subMenu: JSX.Element[] = [];
                        let className = '';
                        if (services) {
                            if (title === activeSubMenuItemName) {
                                className += 'active';
                            }
                            services.map(({title, slug}, idx) => {
                                subMenu.push(
                                    <ALink key={idx} to={`/${baseUrl}/${slug}`}>
                                        {title}
                                    </ALink>,
                                );
                            });
                        }
                        return (
                            <li key={title} className={className}>
                                <ALink
                                    to={`/${baseUrl}/${slug}`}
                                    onMouseOver={() => {
                                        setSubMenuItems(subMenu),
                                            setActiveSubMenuItemName(title);
                                    }}
                                    {...TRANSITION_PROPS}
                                >
                                    {title}
                                </ALink>
                            </li>
                        );
                    })}
                {blogs &&
                    blogs.map(({title, slug}) => {
                        return (
                            <li key={title}>
                                <ALink
                                    to={slug}
                                    onMouseOver={() => {
                                        setActiveSubMenuItemName(title);
                                    }}
                                    {...TRANSITION_PROPS}
                                >
                                    {title}
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
                    {subMenuItems.map((item, idx) => {
                        return <li key={idx}>{item}</li>;
                    })}
                </ul>
            </section>
        </nav>
    );
};

export default Panel;

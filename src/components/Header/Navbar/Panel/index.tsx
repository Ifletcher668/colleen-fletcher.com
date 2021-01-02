import React, {useContext, useState} from 'react';
import Image from 'gatsby-image';
import ALink from 'gatsby-plugin-transition-link/AniLink';
import {useImage} from '../../../../utils/graphql/queries/useImage';
import {NavbarContext} from '../index';

interface Props {
    blogs?: StrapiBlog[];
    offerings?: StrapiOffering[];
}

const Panel: React.FC<Props> = ({blogs, offerings}: Props) => {
    const {frangipaniImg} = useImage();
    const [subMenuItems, setSubMenuItems] = useState<JSX.Element[]>([]);
    const [activeSubMenuItemName, setActiveSubMenuItemName] = useState('');
    const {setIsActivePanel, setActivePanelName, TRANSITION_PROPS} = useContext(
        NavbarContext,
    );

    const handleOpenOrClosePanel = (
        title: string,
        isActive: boolean,
        items: JSX.Element[],
    ) => {
        setActivePanelName(title),
            setIsActivePanel(isActive),
            setSubMenuItems(items);
    };

    return (
        <nav
            className="panel-navbar"
            onMouseLeave={() => handleOpenOrClosePanel('', false, [])}
        >
            <ul className="submenu">
                {offerings &&
                    offerings.map(offering => {
                        const {services} = offering;
                        let className = '';
                        if (
                            services &&
                            offering.title === activeSubMenuItemName
                        ) {
                            className += 'active';
                        }
                        return (
                            <li key={offering.title} className={className}>
                                <ALink
                                    to={offering.fullUrlPath}
                                    onMouseOver={() => {
                                        if (services) {
                                            setSubMenuItems(() =>
                                                services.map((service, idx) => {
                                                    return (
                                                        <ALink
                                                            key={idx}
                                                            to={`${offering.fullUrlPath}${service.slug}`}
                                                        >
                                                            {service.title}
                                                        </ALink>
                                                    );
                                                }),
                                            );
                                            setActiveSubMenuItemName(
                                                offering.title,
                                            );
                                        }
                                    }}
                                    {...TRANSITION_PROPS}
                                >
                                    {offering.title}
                                </ALink>
                            </li>
                        );
                    })}
                {blogs &&
                    blogs.map((blog, idx) => {
                        const {blog_posts} = blog;
                        let className = '';
                        if (blog_posts && blog.name === activeSubMenuItemName) {
                            className += 'active';
                        }
                        return (
                            <li key={idx} className={className}>
                                <ALink
                                    to={blog.fullUrlPath}
                                    onMouseOver={() => {
                                        if (blog_posts) {
                                            setSubMenuItems(() =>
                                                blog_posts.map(
                                                    (
                                                        {title, fullUrlPath},
                                                        idx,
                                                    ) => {
                                                        return (
                                                            <ALink
                                                                key={idx}
                                                                to={fullUrlPath}
                                                            >
                                                                {title}
                                                            </ALink>
                                                        );
                                                    },
                                                ),
                                            );
                                            setActiveSubMenuItemName(blog.name);
                                        }
                                    }}
                                    {...TRANSITION_PROPS}
                                >
                                    {blog.name}
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

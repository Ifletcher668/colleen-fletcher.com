import React, {useContext} from 'react';
import {NavbarContext} from '../index';
import ALink from 'gatsby-plugin-transition-link/AniLink';
import Panel from '../Panel';

// props matches type StrapiMenuItem
interface Props extends DefaultProps {
    text: string;
    is_external_link: boolean;
    slug: string;
    page?: StrapiPage;
}

// data, className: Props
const MenuItem: React.FC<Props> = ({
    text,
    is_external_link,
    slug,
    page,
    className,
}: Props) => {
    const {
        isActivePanel,
        setIsActivePanel,
        activePanelName,
        setActivePanelName,
        TRANSITION_PROPS,
    } = useContext(NavbarContext);

    const cn = `nav-list-item ${
        className
            ? Array.isArray(className)
                ? className.join(' ')
                : className
            : ''
    }`;

    const handleOpenOrClosePanel = (title: string, isActive: boolean) => {
        setActivePanelName(title);
        setIsActivePanel(isActive);
    };

    return (
        <>
            {is_external_link ? (
                <li
                    className={cn}
                    onMouseOver={() => {
                        handleOpenOrClosePanel('', false);
                    }}
                >
                    <a
                        href={`${
                            slug.match(`^(http|https)://`)
                                ? slug
                                : `https://${slug}`
                        }`}
                    >
                        {text}
                    </a>
                </li>
            ) : (
                <li
                    className={cn}
                    onMouseOver={() => {
                        handleOpenOrClosePanel(text, true);
                    }}
                    // clear on navigation
                    onClick={() => {
                        handleOpenOrClosePanel('', false);
                    }}
                >
                    <ALink
                        to={`/${
                            slug.toLocaleLowerCase() === 'home' ? '' : slug
                        }`}
                        {...TRANSITION_PROPS}
                    >
                        {text}
                    </ALink>
                    {isActivePanel &&
                        page &&
                        page.blogs.length > 0 &&
                        activePanelName === text && (
                            <Panel
                                className="panel-navbar"
                                blogs={page.blogs}
                            />
                        )}
                    {isActivePanel &&
                        page &&
                        page.offerings.length > 0 &&
                        activePanelName === text && (
                            <Panel
                                className="panel-navbar"
                                offerings={page.offerings}
                            />
                        )}
                </li>
            )}
        </>
    );
};

export default MenuItem;

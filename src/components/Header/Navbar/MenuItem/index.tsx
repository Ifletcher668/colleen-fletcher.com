import React, {useContext} from 'react';
import {NavbarContext} from '../index';
import ALink from 'gatsby-plugin-transition-link/AniLink';
import Panel from '../Panel';

// props matches type StrapiMenuItem
interface Props extends DefaultProps {
    title: string;
    is_link_external: boolean;
    slug: string;
    offerings: StrapiOfferings[];
    blogs: StrapiBlog[];
}

// data, className: Props
const MenuItem: React.FC<Props> = ({
    title,
    is_link_external,
    slug,
    offerings,
    blogs,
    className,
}: Props) => {
    const {
        isActivePanel,
        setIsActivePanel,
        activePanelName,
        setActivePanelName,
        TRANSITION_PROPS,
    } = useContext(NavbarContext);

    const cn = `nav-list-item ${className ? className : ''}`;
    return (
        <>
            {is_link_external ? (
                <li className={cn}>
                    <a href={`${slug}`}>{title}</a>
                </li>
            ) : (
                <li
                    className={cn}
                    onMouseOver={() => {
                        setActivePanelName(title), setIsActivePanel(true);
                    }}
                    // clear on navigation
                    onClick={() => {
                        setActivePanelName(''), setIsActivePanel(false);
                    }}
                >
                    <ALink
                        to={`/${
                            slug.toLocaleLowerCase() === 'home' ? '' : slug
                        }`}
                        {...TRANSITION_PROPS}
                    >
                        {title}
                    </ALink>

                    {isActivePanel &&
                        activePanelName === title &&
                        blogs.length > 0 && (
                            <Panel blogs={blogs} baseUrl={slug} />
                        )}
                    {isActivePanel &&
                        activePanelName === title &&
                        offerings.length > 0 && (
                            <Panel offerings={offerings} baseUrl={slug} />
                        )}
                </li>
            )}
        </>
    );
};

export default MenuItem;

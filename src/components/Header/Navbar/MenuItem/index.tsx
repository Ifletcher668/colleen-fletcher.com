import React, {useContext} from 'react';
import {Link} from 'gatsby';
import ALink from 'gatsby-plugin-transition-link/AniLink';

import Panel from '../Panel';
import {NavbarContext} from '../index';

interface Props extends DefaultProps {
    data: PageLink;
}

const MenuItem: React.FC<Props> = ({data, className}: Props) => {
    const linkName = data.name;
    const pageRoute = data.route;
    const subMenus: SubMenu[] = data.route.data as SubMenu[];
    const {setActivePanelName, LINK_TRANSITION_PROPS} = useContext(
        NavbarContext,
    );

    const cn = `nav-list-item ${className ? className : ''}`;

    return (
        <>
            {pageRoute.isExternalLink ? (
                <li className={cn}>
                    <a href={pageRoute.url}>{linkName}</a>
                </li>
            ) : (
                <li
                    className={cn}
                    onMouseOver={() => setActivePanelName(linkName)}
                    onClick={() => {
                        setActivePanelName('');
                    }}
                >
                    <ALink to={pageRoute.url} {...LINK_TRANSITION_PROPS}>
                        {linkName}
                    </ALink>

                    {subMenus && <Panel data={subMenus} />}
                </li>
            )}
        </>
    );
};

export default MenuItem;

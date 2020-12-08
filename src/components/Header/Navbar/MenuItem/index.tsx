import React from 'react';
import {Link} from 'gatsby';
import ALink from 'gatsby-plugin-transition-link/AniLink';
import Panel from '../Panel';

interface Props {
    data: Page;
    className: string;
    onMouseOver: () => void;
    onMouseOut: () => void;
}

const MenuItem: React.FC<Props> = ({
    data,
    className,
    onMouseOver,
    onMouseOut,
}: Props) => {
    const pageName = data.name;
    const pageRoute = data.route;
    const subMenus: SubMenu[] = data.route.data as SubMenu[];

    const cn = `tab-list-item ${className}`;
    const LINK_PROPS = {
        paintDrip: true,
        hex: '#7dd1f7',
        duration: 1,
    };
    return (
        <>
            {pageRoute.isExternalLink ? (
                <a className="tab-list-item" href={pageRoute.url}>
                    {pageName}
                </a>
            ) : (
                <ALink
                    to={pageRoute.url}
                    className={cn}
                    onMouseOver={onMouseOver}
                    {...LINK_PROPS}
                    // exit={{
                    //     trigger: ({node, e, exit, entry}) =>
                    //         console.log(node, e, exit, entry),
                    // }}
                >
                    {pageName}
                    {subMenus && (
                        <Panel
                            data={subMenus}
                            onMouseOut={onMouseOut}
                            {...LINK_PROPS}
                        />
                    )}
                </ALink>
            )}
        </>
    );
};

export default MenuItem;

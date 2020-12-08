import React from 'react';
import {Link} from 'gatsby';
import ALink from 'gatsby-plugin-transition-link/AniLink';
import SubMenu from '../SubMenu';
import Panel from '../Panel';

interface Props {
    route: Route;
    activeTab: string;
    className: string;
    onMouseOver: () => void;
    onMouseOut: () => void;
}

const MenuItem: React.FC<Props> = ({
    route,
    className,
    onMouseOver,
    onMouseOut,
}: Props) => {
    const cn = `tab-list-item ${className}`;
    return (
        <>
            {route.external ? (
                <a href={route.path}>{route.name}</a>
            ) : (
                <ALink
                    // swipe
                    // top="entry"
                    paintDrip
                    // entryOffset={80}
                    hex="#7dd1f7"
                    duration={1}
                    to={route.path}
                    // exit={{
                    //     trigger: ({node, e, exit, entry}) =>
                    //         console.log(node, e, exit, entry),
                    // }}
                    className={cn}
                    onMouseOver={onMouseOver}
                >
                    {route.name}
                    {route.submenu && (
                        <Panel onMouseOut={onMouseOut}>
                            {route.submenu.map(item => {
                                return (
                                    <ALink to={item.path}>{item.name}</ALink>
                                );
                            })}
                        </Panel>
                    )}
                </ALink>
            )}

            {/*
                {route.external ? (
                    <a
                        href={route.path}
                        onMouseOver={
                            route.submenu ? handleShowSubmenu : () => {}
                        }
                        // onMouseLeave={handleShowSubmenu}
                    >
                        {route.name}
                    </a>
                ) : (
                    <Link to={route.path}>{route.name}</Link>
                )}
                {route.submenu && (
                    <div
                        onMouseOver={
                            route.submenu ? () => setShow(true) : () => {}
                        }
                        className={`sub-menu ${show ? ' show' : ''}`}
                        onMouseLeave={() => setShow(false)}
                    >
                        {route.submenu.map(item => {
                            return <span>{item.name}</span>;
                        })}
                    </div>
                )} */}
        </>
    );
};

export default MenuItem;

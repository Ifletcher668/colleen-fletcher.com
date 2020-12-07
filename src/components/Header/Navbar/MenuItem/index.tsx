import React, {useState} from 'react';
import {Link} from 'gatsby';
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
                <Link to={route.path} className={cn} onMouseOver={onMouseOver}>
                    {route.name}
                    {route.submenu && (
                        <Panel onMouseOut={onMouseOut}>
                            {route.submenu.map(item => {
                                return <Link to={item.path}>{item.name}</Link>;
                            })}
                        </Panel>
                    )}
                </Link>
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

import React from 'react';

interface Props {
    show: boolean;
    data: any;
}

const SubMenu: React.FC<Props> = ({show, data}: Props) => {
    return (
        <nav role="navigation" className={`sub-menu${show ? ' show' : ''}`}>
            {data.map((route, idx) => {
                return <li>{route.name}</li>;
            })}
        </nav>
    );
};

export default SubMenu;

import React from 'react';
import Image from 'gatsby-image';
import ALink from 'gatsby-plugin-transition-link/AniLink';
import {useImage} from '../../../../utils/graphql/queries/useImage';

interface Props {
    data: SubMenu[];
    onMouseOut: () => void;
    LINK_PROPS: any;
}

const Panel: React.FC<Props> = ({data, onMouseOut, LINK_PROPS}: Props) => {
    const {frangipaniImg} = useImage();
    return (
        <nav className="navbar-panel">
            <ul className="submenu">
                {data.map(({path, name, data}) => {
                    if (data) {
                        const copy: Copy = data as Copy;
                        return (
                            <>
                                <ALink to={path} {...LINK_PROPS}>
                                    {name}
                                </ALink>
                            </>
                        );
                    } else {
                        console.error('Somethings wrong with the submenu!');
                        return;
                    }
                })}
            </ul>
            <section className="copy">
                {data.map(({data}) => {
                    if (data) {
                        const copy: Copy = data as Copy;
                        return <p>{copy.sentence}</p>;
                    }
                })}
            </section>
            {/* on hover, hide image */}
            {/* <Image
                fluid={frangipaniImg.childImageSharp.fluid}
                style={{width: '100px', height: '100px'}}
            /> */}
        </nav>
    );
};

export default Panel;

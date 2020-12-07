import React from 'react';
import Image from 'gatsby-image';
import {useImage} from '../../../../utils/graphql/queries/useImage';

interface Props {
    children: React.ReactNode;
    onMouseOut: () => void;
}

const Panel: React.FC<Props> = ({children, onMouseOut}: Props) => {
    const {frangipaniImg} = useImage();
    return (
        <div className={`navbar-panel`} onMouseOut={onMouseOut}>
            <nav>{children}</nav>
            <Image
                fluid={frangipaniImg.childImageSharp.fluid}
                style={{width: '100px', height: '100px'}}
            />
        </div>
    );
};

export default Panel;

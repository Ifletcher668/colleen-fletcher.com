import React from 'react';
import ALink from 'gatsby-plugin-transition-link/AniLink';

interface Props extends DefaultProps {
    to: string;
    onMouseOver?: () => void;
    onMouseLeave?: () => void;
}
const PaintDripLink: React.FC<Props> = ({
    to,
    children,
    onMouseOver,
    onMouseLeave,
}: Props) => {
    return (
        <ALink
            to={to}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            paintDrip
            hex="#CBEDFC"
            duration={0.7}
        >
            {children}
        </ALink>
    );
};

export default PaintDripLink;

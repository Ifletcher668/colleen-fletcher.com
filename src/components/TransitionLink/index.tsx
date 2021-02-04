import React from 'react';
import ALink from 'gatsby-plugin-transition-link/AniLink';

interface Props extends DefaultProps {
    to: string;
    onMouseOver?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
    onKeyPress?: () => void;
}
const PaintDripLink: React.FC<Props> = ({
    to,
    children,
    onMouseOver,
    onMouseLeave,
    onClick,
    onKeyPress,
}: Props) => {
    return (
        <ALink
            to={to}
            paintDrip
            hex="#CBEDFC"
            duration={0.7}
            onKeyPress={onKeyPress}
            onClick={onClick}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </ALink>
    );
};

export default PaintDripLink;

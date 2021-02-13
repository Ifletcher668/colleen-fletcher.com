import React from 'react';
import ALink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import { anchor } from '../Atoms/Anchor';

interface Props extends DefaultProps {
    to: string;
    onMouseOver?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
    onKeyPress?: () => void;
}

export const Wrapper = styled(ALink)`
    ${anchor};
`;

const PaintDripLink: React.FC<Props> = ({
    to,
    children,
    onMouseOver,
    onMouseLeave,
    onClick,
    onKeyPress,
}: Props) => {
    return (
        <Wrapper
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
        </Wrapper>
    );
};

export default PaintDripLink;

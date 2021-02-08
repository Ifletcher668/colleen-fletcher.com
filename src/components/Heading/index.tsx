import React from 'react';
import styled from 'styled-components';
import { Heading as HeadingAtom } from '../Atoms';

interface Props extends DefaultProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    tilt?: 'up' | 'even' | 'down';
    alignHeading?: AlignValues;
    justifyHeading?: JustifyValues;
}

const Heading: React.FC<Props> = ({
    level,
    children,
    tilt,
    alignHeading,
    justifyHeading,
}: Props): JSX.Element => {
    return (
        <HeadingWrapper
            tilt={tilt}
            alignHeading={alignHeading}
            justifyHeading={justifyHeading}
            as={`h${level}`}
        >
            {children}
        </HeadingWrapper>
    );
};

export default Heading;

interface WrapperProps
    extends Pick<Props, 'tilt' | 'alignHeading' | 'justifyHeading'> {}

const HeadingWrapper = styled(HeadingAtom)<WrapperProps>`
    transform: ${props => {
        switch (props.tilt) {
            case 'even':
                return 'rotate(0deg)';
            case 'down':
                return 'rotate(-1deg)';
            default:
                // 'up
                return 'rotate(1deg)';
        }
    }};
    align-self: ${props => {
        switch (props.alignHeading) {
            case 'top':
                return 'start';
            case 'bottom':
                return 'end';
            default:
                // end
                return 'center';
        }
    }};
    justify-self: ${props => {
        switch (props.justifyHeading) {
            case 'right':
                return 'end';
            case 'center':
                return 'center';
            default:
                // right
                return 'start';
        }
    }};
`;

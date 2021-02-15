import React from 'react';
import styled from 'styled-components';
import { Heading as HeadingAtom } from '../Atoms';

interface Props extends DefaultProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    tilt?: 'up' | 'even' | 'down';
    alignHeading?: AlignValues;
    justifyHeading?: JustifyValues;
}

interface WrapperProps
    extends Pick<Props, 'tilt' | 'alignHeading' | 'justifyHeading'> {}

const HeadingWrapper = styled(HeadingAtom)<WrapperProps>`
    transform: ${props => {
        switch (props.tilt) {
            case 'up':
                return 'rotate(1deg)';
            case 'down':
                return 'rotate(-1deg)';
            default:
                // even
                return 'rotate(0deg)';
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

    text-align: ${props => {
        switch (props.justifyHeading) {
            case 'right':
                return 'right';
            case 'center':
                return 'center';
            default:
                // right
                return 'left';
        }
    }};
`;

const Heading: React.FC<Props> = ({
    level = 1,
    children,
    tilt = 'even',
    alignHeading,
    justifyHeading,
}: Props): JSX.Element => {
    const titleCaseStringChildren =
        typeof children === 'string'
            ? children.replace(/(^|\s)\S/g, (firstLetter: string) =>
                  firstLetter.toUpperCase(),
              )
            : children;

    return (
        <HeadingWrapper
            tilt={tilt}
            alignHeading={alignHeading}
            justifyHeading={justifyHeading}
            as={`h${level.toString()}`}
        >
            {titleCaseStringChildren}
        </HeadingWrapper>
    );
};

export default Heading;

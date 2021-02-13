import styled from 'styled-components';
import { Anchor } from '..';
import { Wrapper as PaintDripLink } from '../../PaintDripLink';

type Props = {
    variant?: 'primary' | 'secondary' | 'tertiary';
};

export default styled.button<Props>`
    display: inline-flex;
    align-items: center;
    border: none;
    overflow: hidden;
    outline: none;
    box-shadow: none;

    margin: ${props => props.theme.size.margin.xsmall} auto;
    padding: 0 ${props => props.theme.size.padding.small};

    border-radius: ${props => props.theme.radius.smooth};
    letter-spacing: ${props => props.theme.font['letter-spacing'].fancy};

    background: ${props => {
        switch (props.variant) {
            case 'secondary':
                return `radial-gradient(
                            68.84% 68.84% at 50% 50%,
                            ${props.theme.color['primary-blue']} 0%,
                            rgba(255, 255, 255, 0) 70.83%
                        ),
                        ${props.theme.color['primary-blue']}`;

            case 'tertiary':
                return `radial-gradient(
                            68.84% 68.84% at 50% 50%,
                            ${props.theme.color.earth} 0%,
                            rgba(255, 255, 255, 0) 70.83%
                        ),
                        ${props.theme.color.earth}`;

            default:
                return `radial-gradient( 
                            68.84% 68.84% at 50% 50%,
                            ${props.theme.color.lilac} 0%,
                            rgba(255, 255, 255, 0) 70.83%
                        ),
                        ${props.theme.color.lilac}`;
        }
    }};

    &,
    ${Anchor}, ${PaintDripLink} {
        color: ${props =>
            ['tertiary', undefined].includes(props.variant)
                ? props.theme.color['primary-blue']
                : props.theme.color.background};
        &:hover {
            color: ${props => props.theme.color.aterrima};

            border-bottom: none;
        }
    }

    &:hover,
    ${Anchor}:hover, ${PaintDripLink}:hover {
        &,
        > * {
            transition: ${props => props.theme.time.medium} ease-in-out;
            background: ${props => props.theme.color.background};
            color: ${props => {
                switch (props.variant) {
                    case 'secondary':
                        return props.theme.color['primary-blue'];
                    case 'tertiary':
                        return props.theme.color.earth;

                    default:
                        return props.theme.color.lilac;
                }
            }};
            font-weight: ${props => props.theme.font.weight.heading};
        }
    }

    /* Only want to draw a border around the button itself */
    &:hover {
        border: 1px solid
            ${props => {
                switch (props.variant) {
                    case 'secondary':
                        return props.theme.color['primary-blue'];
                    case 'tertiary':
                        return props.theme.color.earth;

                    default:
                        return props.theme.color.lilac;
                }
            }};
    }

    &:active,
    ${Anchor}:active, ${PaintDripLink}:active {
        transition: 0.01s;
        color: ${props =>
            ['tertiary', undefined].includes(props.variant)
                ? props.theme.color['primary-blue']
                : props.theme.color.background};
        background: ${props => {
            switch (props.variant) {
                case 'secondary':
                    return `radial-gradient(
                            68.84% 68.84% at 50% 50%,
                            ${props.theme.color['primary-blue']} 0%,
                            rgba(255, 255, 255, 0) 70.83%
                        ),
                        ${props.theme.color['primary-blue']}`;

                case 'tertiary':
                    return `radial-gradient(
                            68.84% 68.84% at 50% 50%,
                            ${props.theme.color.earth} 0%,
                            rgba(255, 255, 255, 0) 70.83%
                        ),
                        ${props.theme.color.earth}`;

                default:
                    return `radial-gradient( 
                            68.84% 68.84% at 50% 50%,
                            ${props.theme.color.lilac} 0%,
                            rgba(255, 255, 255, 0) 70.83%
                        ),
                        ${props.theme.color.lilac}`;
            }
        }};
    }
`;

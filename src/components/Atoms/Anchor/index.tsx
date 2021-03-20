import styled, { DefaultTheme } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { color, time } from '../../../StyledComponents/_mixins';

type Props = {
    color?: keyof DefaultTheme['color'];
};

// External Link
export const Anchor = styled.a<Props>`
    color: ${props => (props.color ? color(props.color) : color('aterrima'))};
    text-decoration: none;

    &:hover {
        transition: ${time('fast')} ease-out;
        border-bottom: ${color('lilac')} solid 2px;
        color: ${color('dark-blue')};
    }
`;

// Internal Link
export const Link = styled(GatsbyLink)`
    color: ${color('aterrima')};
    text-decoration: none;

    &:hover {
        transition: ${props => props.theme.time.fast} ease-out;
        border-bottom: ${color('lilac')} solid 2px;
        color: ${color('dark-blue')};
    }
`;

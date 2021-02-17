import styled, { css, DefaultTheme } from 'styled-components';

// used in PaintDripLink
export const anchor = css`
    color: ${props => props.theme.color.aterrima};
    text-decoration: none;

    &:hover {
        transition: ${props => props.theme.time.fast} ease-out;
        border-bottom: ${props => props.theme.color.lilac} solid 2px;
        color: ${props => props.theme.color['dark-blue']};
    }
`;

interface Props {
    color?: keyof DefaultTheme['color'];
}

const Anchor = styled.a<Props>`
    ${anchor};
    color: ${props =>
        props.color
            ? props.theme.color[props.color]
            : props.theme.color.aterrima};
`;

export default Anchor;

import styled, { css } from 'styled-components';

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

const Anchor = styled.a`
    ${anchor};
`;

export default Anchor;

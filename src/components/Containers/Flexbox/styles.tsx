import styled, { CSSObject } from 'styled-components';

interface Props extends DefaultProps {
    styling: CSSObject;
}

export const Flexbox = styled.section<Props>`
    ${props => props.styling}
`;

import React from 'react';
import styled, {CSSObject} from 'styled-components';

interface Props extends DefaultProps {
    styling: CSSObject;
}

export const SectionFlexbox = styled.section<Props>`
    ${props => props.styling}
`;

export const ArticleFlexbox = styled.article<Props>`
    ${props => props.styling}
`;
export const AsideFlexbox = styled.aside<Props>`
    ${props => props.styling}
`;
export const Flexbox = styled.div<Props>`
    ${props => props.styling}
`;

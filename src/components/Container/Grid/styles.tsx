import React from 'react';
import styled, {CSSObject} from 'styled-components';

interface Props {
    gap: string;
    gridTemplateRows: string;
    gridTemplateColumns?: string;
}
const defaultProps: CSSObject = {
    display: 'grid',
};

export const SectionGrid = styled.section<Props>`
    ${defaultProps}
    ${props => props.gap}
    ${props => props.gridTemplateColumns}
    ${props => props.gridTemplateRows}
`;

// TODO: Update with variable helper functions
export const MainContentGrid = styled(SectionGrid)`
    grid-template-columns:
        [full-start] minmax(2em, 3em)
        [content-start] minmax(0, 60em) [content-end]
        minmax(2em, 3em) [full-end];
    & > * {
        grid-column: content;
    }
`;

export const ArticleGrid = styled.article<Props>`
    ${defaultProps}
    ${props => props.gap}
    ${props => props.gridTemplateColumns}
    ${props => props.gridTemplateRows}
`;
export const AsideGrid = styled.aside<Props>`
    ${defaultProps}
    ${props => props.gap}
    ${props => props.gridTemplateColumns}
    ${props => props.gridTemplateRows}
`;
export const Grid = styled.div<Props>`
    ${defaultProps}
    ${props => props.gap}
    ${props => props.gridTemplateColumns}
    ${props => props.gridTemplateRows}
`;

// Testing breakpoints
// ${props =>
//     props.theme.below(props.theme['bp-xl'] as number, {
//         'background-color': 'rebeccapurple',
//     })}
// ${props =>
//     props.theme.below(props.theme['bp-lg'] as number, {
//         'background-color': 'tomato',
//     })}
// ${props =>
//     props.theme.below(props.theme['bp-md'] as number, {
//         'background-color': 'mediumseagreen',
//     })}
// ${props =>
//     props.theme.below(props.theme['bp-sm'] as number, {
//         'background-color': 'palevioletred',
//     })}
// ${props =>
//     props.theme.below(props.theme['bp-xs'] as number, {
//         'background-color': 'burleywood',
//     })}

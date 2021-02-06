import styled from 'styled-components';
import BreakpointHandler from '../utils/Breakpoints/breakpoint-handler';

const { above } = new BreakpointHandler();
interface Props {
    /**
     * @param column
     * The grid-column name
     */
    column?: 'text' | 'image' | 'full';
    /**
     * @param row
     * The grid-row name
     */
    row?: 'content' | 'divider';
}
export const GridArea = styled.div<Props>`
    grid-column: ${props =>
        props.column === 'full' ? '1 / span 3' : props.column};
    grid-row: ${props => props.row === 'divider' && props.row};
    ${props =>
        above(props.theme['bp-md'] as number, {
            'grid-row': props.row,
        })};
    ${p => console.log(p.theme)}
`;

// 1 / span 3 makes it full width
export const GridDivider = styled.div<Props>`
    grid-column: 1 / span 3;
    grid-row: divider;
`;

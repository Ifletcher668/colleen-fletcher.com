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
    display: grid; // allows text to move based on props
    grid-column: ${props =>
        props.column === 'full'
            ? '1 / span 3'
            : props.column}; // 1 / span 3 makes it full width
    ${props =>
        above(props.theme.breakpoint.small, {
            'grid-row': props.row,
        })};
`;

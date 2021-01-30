import styled from 'styled-components';
import BreakpointHandler from '../utils/Breakpoints/breakpoint-handler';

const {above} = new BreakpointHandler();
interface Props {
    /**
     * @param column
     * The grid-column name
     */
    column?: string;
    /**
     * @param row
     * The grid-row name
     */
    row?: string;
}
export const GridArea = styled.div<Props>`
    grid-column: ${props => props.column};
    ${props =>
        above(props.theme['bp-md'] as number, {
            'grid-row': 'content',
        })}
`;

// 1 / span 3 makes it full width
export const GridDivider = styled.div<Props>`
    grid-column: 1 / span 3;
    grid-row: divider;
`;

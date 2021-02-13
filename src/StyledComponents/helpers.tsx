import styled from 'styled-components';
import BreakpointHandler from '../utils/Breakpoints/breakpoint-handler';

const { above, below } = new BreakpointHandler();
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
    row?: 'content' | 'image' | 'divider';

    'row-xl'?: string;
    'row-lg'?: string;
    'row-md'?: string;
    'row-sm'?: string;
    'row-xs'?: string;

    'col-xl'?: string;
    'col-lg'?: string;
    'col-md'?: string;
    'col-sm'?: string;
    'col-xs'?: string;
}
export const GridArea = styled.div<Props>`
    grid-column: ${props =>
        props.column === 'full'
            ? '1 / span 3'
            : props.column}; // 1 / span 3 makes it full width

    grid-row: ${props => props['row-xl']};
    grid-column: ${props => props['col-xl']};

    ${props =>
        below(props.theme.breakpoint.large, {
            gridRow: props['row-lg'],
            gridColumn: props['col-lg'],
        })}

    ${props =>
        below(props.theme.breakpoint.medium, {
            gridRow: props['row-md'],
            gridColumn: props['col-md'],
        })}
        
    ${props =>
        below(props.theme.breakpoint.small, {
            gridRow: props['row-sm'],
            gridColumn: props['col-sm'],
        })}
        
    ${props =>
        below(props.theme.breakpoint.xsmall, {
            gridRow: props['row-xs'],
            gridColumn: props['col-xs'],
        })}
`;

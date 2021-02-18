import styled from 'styled-components';
import { below } from '../StyledComponents/_mixins';
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

    ${below.large`
        gridRow: props['row-lg'],
        gridColumn: props['col-lg'],
    `}

    ${below.medium`
        gridRow: props['row-md'],
        gridColumn: props['col-md'],
    `}
        
    ${below.small`
        gridRow: props['row-sm'],
        gridColumn: props['col-sm'],
    `}
        
    ${below.xsmall`
        gridRow: props['row-xs'],
        gridColumn: props['col-xs'],
    `}
`;

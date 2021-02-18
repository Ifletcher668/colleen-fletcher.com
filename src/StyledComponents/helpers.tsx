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
        grid-row: ${props => props['row-lg']};
        grid-column: ${props => props['col-lg']};
    `}

    ${below.medium`
        grid-row: ${props => props['row-md']};
        grid-column: ${props => props['col-md']};
    `}
        
    ${below.small`
        grid-row: ${props => props['row-sm']};
        grid-column: ${props => props['col-sm']};
    `}
        
    ${below.xsmall`
        grid-row: ${props => props['row-xs']};
        grid-column: ${props => props['col-xs']};
    `}
`;

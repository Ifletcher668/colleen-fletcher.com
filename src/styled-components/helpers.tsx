import styled from 'styled-components';
import { below } from './_mixins';
interface Props {
  /**
   * @param column
   * The grid-column name
   */
  column?:
    | 'text'
    | 'text-left'
    | 'text-right'
    | 'image'
    | 'image-left'
    | 'image-right'
    | 'full';
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

  ${props => below.large`
        grid-row: ${props['row-lg']};
        grid-column: ${props['col-lg']};
    `}

  ${props => below.medium`
        grid-row: ${props['row-md']};
        grid-column: ${props['col-md']};
    `}
        
    ${props => below.small`
        grid-row: ${props['row-sm']};
        grid-column: ${props['col-sm']};
    `}
        
    ${props => below.xsmall`
        grid-row: ${props['row-xs']};
        grid-column: ${props['col-xs']};
    `}
`;

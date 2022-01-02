import styled from 'styled-components';
import { below, size } from '../../../styled-components/_mixins';

// TODO: Update with theme variables
const PageContainer = styled.section`
  display: grid;
  gap: 2em 0;
  grid-template-columns:
    [full-start] minmax(4%, 22%)
    [content-start] minmax(0, 56%) [content-end]
    minmax(4%, 22%) [full-end];

  & > * {
    grid-column: content;
  }

  ${below.small`
    place-items: center;
    grid-template-columns: 
      [full-start] 4%
      [content-start] 92%
      [content-end] 4%
      [full-end];

      & > * {
          grid-column: content;
      }
  `};

  margin: ${size('margin', 'large')} 0;
`;
export default PageContainer;

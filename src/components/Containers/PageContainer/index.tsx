import styled from 'styled-components';
import { below, size } from '../../../styled-components/_mixins';

// TODO: Update with theme variables
const PageContainer = styled.section`
  display: grid;
  gap: 4em 0;
  grid-template-columns:
    [full-start] minmax(2em, 3em)
    [content-start] minmax(0, 60em) [content-end]
    minmax(2em, 3em) [full-end];

  & > * {
    grid-column: content;
  }

  ${below.small`
    place-items:center;
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

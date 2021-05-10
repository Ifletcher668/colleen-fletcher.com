import styled from 'styled-components';
import { color, font } from '../../../StyledComponents/_mixins';

export default styled.h1`
  color: ${color('aterrima')};
  font-weight: ${font('weight', 'heading')};
  letter-spacing: ${font('letter-spacing', 'important')};
  margin: 0;

  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 0;
  }
`;

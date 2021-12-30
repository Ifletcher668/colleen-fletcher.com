import styled from 'styled-components';
import { color, font } from '../../../styled-components/_mixins';

const Strong = styled.strong`
  font-weight: ${font('weight', 'bolder')};
  color: ${color('darkLava')};
  &::first-letter {
    font-family: 'MA Sexy';
  }
`;

export default Strong;

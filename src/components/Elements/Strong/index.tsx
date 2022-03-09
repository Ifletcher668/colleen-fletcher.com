import styled from 'styled-components';
import {
  color,
  getFancyFirstLetterStyles,
  font,
} from '../../../styled-components/_mixins';

const Strong = styled.strong`
  font-weight: ${font('weight', 'bolder')};
  color: ${color('darkLava')};
  ${getFancyFirstLetterStyles()};
`;

export default Strong;

import styled from 'styled-components';
import { color, radius, size } from '../../styled-components/_mixins';
import { DividerColorOptions } from '.';
import { Flexbox } from '../Containers';

interface Props {
  lineColor?: DividerColorOptions;
}

export const StandardDivider = styled.hr<Props>`
  width: 100%;
  border: 0;
  border-top: solid 1px
    ${props => (props.lineColor ? color(props.lineColor) : color('coffee'))};
  margin: 0 0 ${size('margin', 'large')} 0;

  &:before {
    display: block;
    content: '';
    border-bottom: solid 1px
      ${props => (props.lineColor ? color(props.lineColor) : color('coffee'))};
    height: 24px;
    margin-top: -20px;
  }
`;

export const FancyDivider = styled(Flexbox)`
  margin: 0 0 ${size('margin', 'large')} 0;
  gap: 2em;
  background: linear-gradient(
    90deg,
    ${color('darkLava', 0.5)} 0%,
    ${color('darkLava', 1)} 50%,
    ${color('darkLava', 0.5)} 100%
  );
  border-radius: ${radius('smooth')};
`;

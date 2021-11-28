import styled from 'styled-components';
import { color, size } from '../../styled-components/_mixins';
import { DividerColorOptions } from '.';

interface Props {
  lineColor?: DividerColorOptions;
}

export const StandardDivider = styled.hr<Props>`
  width: 100%;
  border: 0;
  border-bottom: solid 1px
    ${props => (props.lineColor ? color(props.lineColor) : color('earth'))};
  margin: 0 0 ${size('margin', 'large')} 0;
  height: 30px;
  border-style: solid;
  border-color: ${props =>
    props.lineColor ? color(props.lineColor) : color('earth')};
  border-width: 1px 0 0 0;

  &:before {
    display: block;
    content: '';
    height: 28px;
    margin-top: -30px;
    border-style: solid;
    border-color: ${props =>
      props.lineColor ? color(props.lineColor) : color('earth')};
    border-width: 0 0 1px 0;
  }
`;

export const FancyDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import BlueFrangipani from '../../assets/images/svg/wholistic-blue-frangipani.svg';
import { color } from '../../StyledComponents/_mixins';
import { Flexbox } from '../Containers';

type DividerColorOptions = keyof Pick<
  DefaultTheme['color'],
  'aterrima' | 'earth' | 'primary-blue'
>;

interface Props {
  type: DividerStyle;
  color?: DividerColorOptions;
}

const Divider = ({ type, color = 'earth' }: Props): JSX.Element =>
  type === 'standard' ? (
    <StandardDivider color={color} />
  ) : (
    <Flexbox
      center
      middle
      styling={{
        gap: '2em',
      }}
    >
      <BlueFrangipani width={60} height={60} />
      <BlueFrangipani width={60} height={60} />
      <BlueFrangipani width={60} height={60} />
    </Flexbox>
  );

export default Divider;

const StandardDivider = styled.hr<Pick<Props, 'color'>>`
  width: 100%;
  border: 0;
  border-bottom: solid 1px
    ${props => (props.color ? color(props.color) : 'earth')};
  margin: 0 0 size(mg-large) 0;
  height: 30px;
  border-style: solid;
  border-color: ${props => (props.color ? color(props.color) : 'earth')};
  border-width: 1px 0 0 0;
  border-radius: 7px;

  &:before {
    display: block;
    content: '';
    height: 30px;
    margin-top: -31px;
    border-style: solid;
    border-color: ${props => (props.color ? color(props.color) : 'earth')};
    border-width: 0 0 1px 0;
    border-radius: 7px;
  }
`;

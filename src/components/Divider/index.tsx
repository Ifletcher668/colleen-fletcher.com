import React from 'react';
import { DefaultTheme } from 'styled-components';
import BlueFrangipani from '../../assets/images/svg/wholistic-blue-frangipani.svg';
import { Flexbox } from '../Containers';
import { StandardDivider } from './styles';

export type DividerColorOptions = keyof Pick<
  DefaultTheme['color'],
  'aterrima' | 'coffee' | 'primary-blue'
>;

interface Props {
  type: DividerStyle;
  lineColor?: DividerColorOptions;
}

const Divider = ({ type, lineColor = 'coffee' }: Props): JSX.Element =>
  type === 'standard' ? (
    <StandardDivider lineColor={lineColor} />
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

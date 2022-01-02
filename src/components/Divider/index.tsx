import React from 'react';
import { DefaultTheme } from 'styled-components';
import BlueFrangipani from '../../assets/images/svg/wholistic-blue-frangipani.svg';
import { FancyDivider, StandardDivider } from './styles';

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
    <FancyDivider center middle>
      <BlueFrangipani width={100} height={100} />
      <BlueFrangipani width={100} height={100} />
      <BlueFrangipani width={100} height={100} />
    </FancyDivider>
  );

export default Divider;

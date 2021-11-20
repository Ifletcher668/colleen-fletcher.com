import React from 'react';
import Divider from '../../Divider';

export interface Props {
  data: {
    style: DividerStyle;
  };
}

const DividerField = ({ data }: Props): JSX.Element => {
  return <Divider type={data.style} />;
};

export default DividerField;

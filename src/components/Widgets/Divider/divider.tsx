import React from 'react';
import Divider from '../../Divider';

export interface Props {
  data: {
    style: DividerStyle;
  };
}

const DividerField: React.FC<Props> = ({ data }: Props) => {
  return <Divider type={data.style} />;
};

export default DividerField;

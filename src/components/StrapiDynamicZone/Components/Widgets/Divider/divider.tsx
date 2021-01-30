import React from 'react';
import Divider from '../../../../Divider';

export interface Props {
    data: 'standard' | 'fancy'; // strapi 'style' column
}

const DividerField: React.FC<Props> = ({data}: Props) => {
    return <Divider type={data} />;
};

export default DividerField;

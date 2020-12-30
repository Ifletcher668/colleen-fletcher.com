import React from 'react';

export interface Props {
    data: 'standard' | 'fancy'; // strapi 'style' column
}

const DividerField: React.FC<Props> = ({data}: Props) => {
    return <hr className={data} />;
};

export default DividerField;

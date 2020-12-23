import React from 'react';

interface Props extends DefaultProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading: React.FC<Props> = ({level, children}: Props) => {
    switch (level) {
        case 1:
            return <h1>{children}</h1>;
        case 2:
            return <h2>{children}</h2>;
        case 3:
            return <h3>{children}</h3>;
        case 4:
            return <h4>{children}</h4>;
        case 5:
            return <h5>{children}</h5>;

        default:
            return <h6>{children}</h6>;
    }
};

export default Heading;

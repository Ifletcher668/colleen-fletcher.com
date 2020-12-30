import React from 'react';

interface Props extends DefaultProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    tilt: 'up' | 'even' | 'down';
}

const Heading: React.FC<Props> = ({level, children, tilt}: Props) => {
    switch (level) {
        case 1:
            return (
                <h1 className={`${tilt === 'even' ? '' : `tilt-${tilt}`}`}>
                    {children}
                </h1>
            );
        case 2:
            return (
                <h2 className={`${tilt === 'even' ? '' : `tilt-${tilt}`}`}>
                    {children}
                </h2>
            );
        case 3:
            return (
                <h3 className={`${tilt === 'even' ? '' : `tilt-${tilt}`}`}>
                    {children}
                </h3>
            );
        case 4:
            return (
                <h4 className={`${tilt === 'even' ? '' : `tilt-${tilt}`}`}>
                    {children}
                </h4>
            );
        case 5:
            return (
                <h5 className={`${tilt === 'even' ? '' : `tilt-${tilt}`}`}>
                    {children}
                </h5>
            );
        default:
            return (
                <h6 className={`${tilt === 'even' ? '' : `tilt-${tilt}`}`}>
                    {children}
                </h6>
            );
    }
};

export default Heading;

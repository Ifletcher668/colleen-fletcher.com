import React from 'react';

interface Props extends DefaultProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    tilt?: 'up' | 'even' | 'down';
    center?: boolean;
}

const Heading: React.FC<Props> = ({
    level,
    children,
    style,
    tilt,
    center,
}: Props) => {
    const cn = `${
        tilt === 'even' || tilt === undefined ? '' : `tilt-${tilt}`
    } ${center ? 'center' : ''}`;
    switch (level) {
        case 1:
            return (
                <h1 style={style} className={cn}>
                    {children}
                </h1>
            );
        case 2:
            return (
                <h2 style={style} className={cn}>
                    {children}
                </h2>
            );
        case 3:
            return (
                <h3 style={style} className={cn}>
                    {children}
                </h3>
            );
        case 4:
            return (
                <h4 style={style} className={cn}>
                    {children}
                </h4>
            );
        case 5:
            return (
                <h5 style={style} className={cn}>
                    {children}
                </h5>
            );
        default:
            return (
                <h6 style={style} className={cn}>
                    {children}
                </h6>
            );
    }
};

export default Heading;

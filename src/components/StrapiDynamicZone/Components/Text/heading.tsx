import React from 'react';
import Heading from '../../../Heading';

export interface Props {
    data: StrapiComponentTextHeading;
}

const HeadingField: React.FC<Props> = ({
    data: {headingText, level, tilt},
}: Props) => {
    // string value enum type in database
    // looks better on client-end
    //
    let levelAsNum: 1 | 2 | 3 | 4 | 5 | 6;
    switch (
        level // to number
    ) {
        case 'one':
            levelAsNum = 1;
            break;
        case 'two':
            levelAsNum = 2;
            break;
        case 'three':
            levelAsNum = 3;
            break;
        case 'four':
            levelAsNum = 4;
            break;
        case 'five':
            levelAsNum = 5;
            break;
        default:
            levelAsNum = 6;
    }

    return (
        <Heading level={levelAsNum} tilt={tilt}>
            {headingText}
        </Heading>
    );
};

export default HeadingField;

import React from 'react';
import styled from 'styled-components';
import BlueFrangipani from '../../assets/images/svg/blue-frangipani.svg';
import {Flexbox} from '../Container/';

interface Props {
    type: 'standard' | 'fancy';
}

const Divider = ({type}: Props): JSX.Element =>
    type === 'standard' ? (
        <StandardDivider />
    ) : (
        <Flexbox
            center
            styling={{
                gap: `2em`,
            }}
        >
            <BlueFrangipani width={60} height={60} />
            <BlueFrangipani width={60} height={60} />
            <BlueFrangipani width={60} height={60} />
        </Flexbox>
    );

export default Divider;

const StandardDivider = styled.hr`
    width: 100%;
    height: 1px;
    border: 0;
    border-bottom: solid 1px color(earth);
    margin: 0 0 size(mg-large) 0;
`;

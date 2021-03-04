import React from 'react';
import styled from 'styled-components';
import BlueFrangipani from '../../assets/images/svg/wholistic-blue-frangipani.svg';
import { Flexbox } from '../Containers';

interface Props {
    type: DividerStyle;
}

const Divider = ({ type }: Props): JSX.Element =>
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
    border: 0;
    border-bottom: solid 1px color(earth);
    margin: 0 0 size(mg-large) 0;
    height: 30px;
    border-style: solid;
    border-color: var(--color-earth);
    border-width: 1px 0 0 0;
    border-radius: 7px;
    &:before {
        display: block;
        content: '';
        height: 30px;
        margin-top: -31px;
        border-style: solid;
        border-color: var(--color-earth);
        border-width: 0 0 1px 0;
        border-radius: 7px;
    }
`;

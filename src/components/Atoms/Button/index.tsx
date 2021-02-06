import styled from 'styled-components';

export default styled.button`
    display: flex;
    align-items: center;
    border: none;
    overflow: hidden;
    outline: none;
    box-shadow: none;
    padding: 0 var(--size-pad-small);
    border-radius: var(--size-radius);
    letter-spacing: var(--size-letter-spacing-fancy);
    margin: var(size-mg-xsmall);
    color: var(color-background);
    &:hover {
        transition: var(--time-medium) ease-in-out;
        transform: var(--scale-1.01);
    }
`;

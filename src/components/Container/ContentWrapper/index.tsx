import React from 'react';
import styled from 'styled-components';

// TODO: Update with theme variables
const ContentWrapper = styled.section`
    display: grid;
    grid-template-columns:
        [full-start] minmax(2em, 3em)
        [content-start] minmax(0, 60em) [content-end]
        minmax(2em, 3em) [full-end];
    & > * {
        grid-column: content;
    }
`;
export default ContentWrapper;

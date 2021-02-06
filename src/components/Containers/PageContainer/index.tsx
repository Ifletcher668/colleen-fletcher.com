import styled from 'styled-components';

// TODO: Update with theme variables
const PageContainer = styled.section`
    display: grid;
    gap: 4em 0;
    grid-template-columns:
        [full-start] minmax(2em, 3em)
        [content-start] minmax(0, 60em) [content-end]
        minmax(2em, 3em) [full-end];
    & > * {
        grid-column: content;
    }
`;
export default PageContainer;

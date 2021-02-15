import styled from 'styled-components';
import BreakpointHandler from '../../../utils/Breakpoints/breakpoint-handler';

const { below } = new BreakpointHandler();

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

    ${props =>
        below(props.theme.breakpoint.small, {
            gridTemplateColumns: `[full-start] 4% [content-start] 92% [content-end] 4% [full-end]; & > * { grid-column: content;}`,
        })}

    margin: ${props => props.theme.size.margin.large} 0;
`;
export default PageContainer;

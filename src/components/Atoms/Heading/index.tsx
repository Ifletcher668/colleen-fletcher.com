import styled from 'styled-components';

export default styled.h1`
    color: ${props => props.theme.color.aterrima};
    font-weight: ${props => props.theme.font.weight.heading};
    letter-spacing: ${props => props.theme.font['letter-spacing'].important};
    margin: 0 0 ${props => props.theme.size.margin.medium} 0;
    a {
        color: inherit;
        text-decoration: none;
        border-bottom: 0;
    }
`;

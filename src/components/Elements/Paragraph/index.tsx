import styled from 'styled-components';

export default styled.p`
  margin: 0 0 ${props => props.theme.size.margin.small} 0;
  &::first-letter {
    font-family: 'MA Sexy';
  }
`;

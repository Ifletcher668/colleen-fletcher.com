import styled from 'styled-components';

export default styled.p`
  margin: 0 0 ${props => props.theme.size.margin.small} 0;
  &::first-letter {
    @include font-family('MA Sexy');
  }
  hyphens: auto;
  hyphenate-limit-chars: 6 3 3;
  hyphenate-limit-lines: 2;
  hyphenate-limit-last: always;
  hyphenate-limit-zone: 8%;
`;

import styled from 'styled-components';

type Props = {
  size: 'huge' | 'large' | 'normal' | 'small';
};

export default styled.span<Props>`
  font-size: ${props => {
    switch (props.size) {
      case 'huge':
        return props.theme.font.size.xxlarge;

      case 'large':
        return props.theme.font.size.xlarge;

      case 'small':
        return props.theme.font.size.small;

      default:
        return props.theme.font.size.large;
    }
  }};
`;

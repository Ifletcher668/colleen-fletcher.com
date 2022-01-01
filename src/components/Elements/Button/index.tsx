import styled from 'styled-components';
import { Link } from '..';
import { font, radius, size, time } from '../../../styled-components/_mixins';

type Props = {
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export default styled.button<Props>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  outline: none;
  box-shadow: none;
  min-height: 2rem;

  margin: ${size('margin', 'xsmall')};

  /* Reset link styles here */
  ${Link} {
    width: 100%;
    // Apply padding to Link to make a smoother animation
    padding: 0 ${size('padding', 'small')};
    &:hover {
      border-bottom: none;
    }
  }

  letter-spacing: ${font('letter-spacing', 'spaced')};
  border-radius: ${radius('smooth')};
  border: 2px solid
    ${props => {
      switch (props.variant) {
        case 'secondary':
          return props.theme.color['primary-blue'];

        case 'tertiary':
          return props.theme.color.coffee;

        default:
          return props.theme.color.plumWeb;
      }
    }};

  background: ${props => {
    switch (props.variant) {
      case 'secondary':
        return `radial-gradient(
                            68.84% 68.84% at 50% 50%,
                            ${props.theme.color['primary-blue']} 0%,
                            rgba(255, 255, 255, 0) 70.83%
                        ),
                        ${props.theme.color['primary-blue']}`;

      case 'tertiary':
        return `radial-gradient(
                            68.84% 68.84% at 50% 50%,
                            ${props.theme.color.coffee} 0%,
                            rgba(255, 255, 255, 0) 70.83%
                        ),
                        ${props.theme.color.coffee}`;

      default:
        return `radial-gradient( 
                            68.84% 68.84% at 50% 50%,
                            ${props.theme.color.plumWeb} 0%,
                            rgba(255, 255, 255, 0) 70.83%
                        ),
                        ${props.theme.color.plumWeb}`;
    }
  }};

  &,
  ${Link} {
    color: ${props =>
      ['tertiary', undefined].includes(props.variant)
        ? props.theme.color['primary-blue']
        : props.theme.color.background};
  }

  &:hover,
  ${Link}:hover {
    transition: ${time('medium')} ease-out;
    transform: scale(0.98);
    background: ${props => props.theme.color.background};
    color: ${props => {
      switch (props.variant) {
        case 'secondary':
          return props.theme.color['primary-blue'];
        case 'tertiary':
          return props.theme.color.coffee;

        default:
          return props.theme.color.plumWeb;
      }
    }};
    font-weight: ${font('weight', 'bold')};
  }

  &:hover {
    border: 2px solid
      ${props => {
        switch (props.variant) {
          case 'secondary':
            return props.theme.color['primary-blue'];

          case 'tertiary':
            return props.theme.color.coffee;

          default:
            return props.theme.color.plumWeb;
        }
      }};
  }

  &:active,
  ${Link}:active, {
    transition: 0.01s;
    color: ${props =>
      ['tertiary', undefined].includes(props.variant)
        ? props.theme.color['primary-blue']
        : props.theme.color.background};
    background: ${props => {
      switch (props.variant) {
        case 'secondary':
          return `radial-gradient(
                            68.84% 68.84% at 50% 50%,
                            ${props.theme.color['primary-blue']} 0%,
                            rgba(255, 255, 255, 0) 70.83%
                        ),
                        ${props.theme.color['primary-blue']}`;

        case 'tertiary':
          return `radial-gradient(
                            68.84% 68.84% at 50% 50%,
                            ${props.theme.color.coffee} 0%,
                            rgba(255, 255, 255, 0) 70.83%
                        ),
                        ${props.theme.color.coffee}`;

        default:
          return `radial-gradient( 
                            68.84% 68.84% at 50% 50%,
                            ${props.theme.color.plumWeb} 0%,
                            rgba(255, 255, 255, 0) 70.83%
                        ),
                        ${props.theme.color.plumWeb}`;
      }
    }};
  }
`;

import styled from 'styled-components';
import { theme } from '../../styled-components/defaultTheme';
import { color, radius, size } from '../../styled-components/_mixins';
import { Button, Span, Strong } from '../Elements';
import QuillEditor from './QuillEditor';

export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${size('margin', 'small')};
  margin-bottom: ${size('margin', 'large')};

  input,
  textarea,
  ${QuillEditor} {
    background: ${color('light-blue')};
    border-radius: ${radius('edge')};
  }
`;

export const SubmitButton = styled(Button)`
  min-width: 9.375rem;
  border-radius: ${radius('edge')};
  margin: 0;
`;

export const AuthorInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row wrap;

  @media all and (min-width: ${theme.breakpoints.medium}) {
    ${Strong} {
      flex: 1 0 40%;
    }
  }
`;

export const CommentsList = styled.ol`
  padding: 0;
  list-style: none;
  li {
    margin-bottom: ${size('margin', 'xlarge')};
  }
`;

export const ReplyList = styled(CommentsList)`
  margin-left: ${size('margin', 'large')};
`;

export const StyledQuillEditor = styled(QuillEditor)`
  /*  */
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  + label {
    position: relative;
    padding-left: 20px;

    &::before {
      display: inline-block;
      width: 22px;
      height: 22px;
      position: absolute;
      top: 7px;
      left: -16px;
      background-color: ${color('light-blue')};
      border-radius: ${radius('edge')};
      box-sizing: border-box;
      content: '';
      cursor: pointer;
    }
  }
  &:checked {
    + label::after {
      display: inline-block;
      width: 18px;
      height: 10px;
      position: absolute;
      left: -14px;
      top: 11px;
      transform: rotate(-50deg);
      border-radius: ${radius('edge')};
      border-left: 3px solid ${color('primary-blue')};
      border-bottom: 3px solid ${color('primary-blue')};
      box-sizing: border-box;
      content: '';
      cursor: pointer;
    }
  }
  &:focus {
    + label::before {
      box-shadow: 0 0 0 2px ${color('background')},
        0 0 0 4px ${color('primary-blue')};
    }
  }
`;

export const ValidationErrorMessage = styled(Span).attrs({ size: 'small' })`
  color: ${color('validationErrorRed')};
`;

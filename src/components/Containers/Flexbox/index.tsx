import React, { forwardRef } from 'react';
import styled, { CSSObject } from 'styled-components';

type Props = FlexboxProps & {
  styling?: CSSObject;
};

const getFlexboxProps = ({
  top,
  middle,
  bottom,
  left,
  center,
  right,
  between,
  around,
  vertical,
  gap,
}: Props) => {
  let x = 'initial';
  let y = 'initial';
  let gridGap: string | number = 'none';

  if (left || center || right || between || around) {
    if (left) {
      x = 'flex-start';
    } else if (center) {
      x = 'center';
    } else if (right) {
      x = 'flex-end';
    } else if (between) {
      x = 'space-between';
    } else if (around) {
      x = 'space-around';
    }
  }

  if (top || middle || bottom) {
    if (top) {
      y = 'flex-start';
    } else if (middle) {
      y = 'center';
    } else if (bottom) {
      y = 'flex-end';
    }
  }

  if (vertical) {
    if (left || center || right) {
      if (left) {
        y = 'flex-start';
      } else if (center) {
        y = 'center';
      } else if (right) {
        y = 'flex-end';
      }
    }

    if (top || middle || bottom || between || around) {
      if (top) {
        x = 'flex-start';
      } else if (middle) {
        x = 'center';
      } else if (bottom) {
        x = 'flex-end';
      } else if (between) {
        x = 'space-between';
      } else if (around) {
        x = 'space-around';
      }
    }
  }

  if (gap) {
    if (gap) {
      gridGap = 2;
    } else {
      gridGap = gap;
    }
  }

  return {
    'justify-content': x,
    'align-items': y,
    '& > * + *': {
      'margin-left': gap && !vertical && gridGap,
      'margin-top': gap && vertical && gridGap,
    } as any,
  };
};

const Wrapper = styled.div<Props>`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
  flex: ${({ flex }) => (flex ? flex : '1 1 auto')};
  ${props => getFlexboxProps(props)};
  ${props => props.styling};
`;
const Flexbox: React.FC<Props> = forwardRef((props: Props, ref) => {
  const {
    className,
    onClick,
    inline,
    vertical,
    wrap,
    flex,
    styling,
    containerType = 'div',
  } = props;

  const cn = className
    ? Array.isArray(className)
      ? className.join(' ')
      : className
    : '';

  return (
    <Wrapper
      as={containerType}
      wrap={wrap}
      flex={flex}
      inline={inline}
      onClick={onClick}
      styling={styling}
      vertical={vertical}
      className={cn}
      ref={ref}
    >
      {props.children}
    </Wrapper>
  );
});

export default Flexbox;

import React from 'react';
import { CSSObject } from 'styled-components';
import { Flexbox as FlexboxWrapper } from './styles';

interface Props extends FlexboxProps {
    styling?: CSSObject;
}

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

const Flexbox: React.FC<Props> = (props: Props) => {
    const {
        className,
        onClick,
        inline,
        vertical,
        wrap,
        noGrow,
        styling,
        style,
        containerType = 'div',
    } = props;

    const styles: CSSObject = {
        display: inline ? 'inline-flex' : 'flex',
        flexDirection: vertical ? 'column' : 'row',
        flexWrap: wrap ? 'wrap' : 'nowrap',
        flex: noGrow ? `0 0 auto` : `1 1 auto`,
        ...getFlexboxProps(props),
        ...styling,
        ...style,
    };

    const cn = className
        ? Array.isArray(className)
            ? className.join(' ')
            : className
        : '';

    return (
        <FlexboxWrapper
            as={containerType}
            styling={styles}
            className={cn}
            onClick={onClick}
        >
            {props.children}
        </FlexboxWrapper>
    );
    {
    }
};

export default Flexbox;

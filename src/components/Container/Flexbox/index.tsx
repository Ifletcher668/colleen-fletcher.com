import React from 'react';
import {CSSObject} from 'styled-components';
import {
    SectionFlexbox,
    ArticleFlexbox,
    AsideFlexbox,
    Flexbox as DivFlexbox,
} from './styles';

interface Props extends DefaultProps {
    inline?: boolean;
    vertical?: boolean; // column
    wrap?: boolean;
    noGrow?: boolean; // acts as no-grow and no-shrink
    grow?: number;
    shrink?: number;
    basis?: number | 'auto';
    top?: boolean;
    middle?: boolean;
    bottom?: boolean;
    left?: boolean;
    center?: boolean;
    right?: boolean;
    between?: boolean;
    around?: boolean;
    gap?: boolean | number; // add margin between children similar to grid-gap on grid
    containerType?: Container;
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
        justifyContent: x,
        alignItems: y,
        '& > * + *': {
            marginLeft: gap && !vertical && gridGap,
            marginTop: gap && vertical && gridGap,
        } as any,
    };
};

const Flexbox: React.FC<Props> = (props: Props) => {
    const {className} = props;

    const styles: CSSObject = {
        display: props.inline ? 'inline-flex' : 'flex',
        flexDirection: props.vertical ? 'column' : 'row',
        flexWrap: props.wrap ? 'wrap' : 'nowrap',
        flex: props.noGrow ? `0 0 auto` : `1 1 auto`,
        ...getFlexboxProps(props),
        ...props.style,
    };

    const cn = className
        ? Array.isArray(className)
            ? className.join(' ')
            : className
        : '';

    switch (props.containerType) {
        case 'article':
            return (
                <ArticleFlexbox styling={styles} className={cn}>
                    {props.children}
                </ArticleFlexbox>
            );

        case 'section':
            return (
                <SectionFlexbox styling={styles} className={cn}>
                    {props.children}
                </SectionFlexbox>
            );

        case 'aside':
            return (
                <AsideFlexbox styling={styles} className={cn}>
                    {props.children}
                </AsideFlexbox>
            );

        default:
            return (
                <DivFlexbox styling={styles} className={cn}>
                    {props.children}
                </DivFlexbox>
            );
    }
};

export default Flexbox;

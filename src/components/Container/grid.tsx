import React, {useEffect, useState} from 'react';
import BreakpointHandler from '../../utils/breakpoint-handler';

interface Props extends DefaultProps {
    gap?: string | number; // grid-gap
    /**
     * @param columns
     * Each subsequent index in the array maps to
     * a breakpoint. From left to right,
     * the breakpoints get smaller.
     */
    columns?: [string, string?, string?, string?, string?]; // grid-template-columns
    /**
     * @param rows
     * Each subsequent index in the array maps to
     * a breakpoint. From left to right,
     * the breakpoints get smaller.
     */
    rows?: [string, string?, string?, string?, string?]; // grid-template-rows
    containerType?: 'article' | 'section' | 'main-content' | 'zigzag';
    autoCols?: string;
}

const useBreakpoints = (values: string[]) => {
    const {getBreakpoints, getWidth} = new BreakpointHandler();
    const breakpoints = getBreakpoints();
    if (!Array.isArray(values)) {
        throw new Error(`value passed was not of type Array.`);
    }
    if (values.length > breakpoints.length) {
        throw new Error(
            `Array "[${values}]" is too long! Reduce array length by ${
                values.length - breakpoints.length
            }.`,
        );
    }

    const [width, setWidth] = useState<number | undefined>(undefined);
    useEffect(() => {
        const handleResize = () => {
            setWidth(getWidth());
        };
        // immediately set width
        handleResize();
        window.addEventListener('resize', handleResize);
        return window.addEventListener('resize', handleResize);
    }, []);
    if (width) {
        if (
            values.length === 1 ||
            // or greater than 'large' screen size
            width > breakpoints[0] ||
            (width < breakpoints[0] && width > breakpoints[1])
        ) {
            return values[0];
        } else if (width < breakpoints[1] && width > breakpoints[2]) {
            // between large and medium
            return values[1] ? values[1] : values[values.length - 1];
        } else if (width < breakpoints[2] && width > breakpoints[3]) {
            // between medium and small
            return values[2] ? values[2] : values[values.length - 1];
        } else if (width < breakpoints[3] && width > breakpoints[4]) {
            // between small and extra small
            return values[3] ? values[3] : values[values.length - 1];
        } else if (width < breakpoints[4]) {
            // if extra small
            return values[4] ? values[4] : values[values.length - 1];
        }
    }
};

const Grid: React.FC<Props> = ({
    className,
    children,
    containerType,
    gap = 0,
    columns = ['none'],
    rows = ['none'],
    autoCols = 'none',
}: Props) => {
    const cn = className
        ? Array.isArray(className)
            ? className.join(' ')
            : className
        : '';

    // main-content applies predefined and very specific grid styling
    // Added up here to avoid calculating the useBreakpoints
    if (containerType === 'main-content') {
        return <section className={`main-content ${cn}`}>{children}</section>;
    }

    const styles: React.CSSProperties = {
        display: 'grid',
        gridGap: gap,
        gridTemplateColumns: useBreakpoints(columns as string[]),
        gridTemplateRows: useBreakpoints(rows as string[]),
        gridAutoColumns: autoCols,
    };

    switch (containerType) {
        case 'article':
            return (
                <article className={cn} style={styles}>
                    {children}
                </article>
            );
        case 'section':
            return (
                <section className={cn} style={styles}>
                    {children}
                </section>
            );

        default:
            return (
                <div className={cn} style={styles}>
                    {children}
                </div>
            );
    }
};

export default Grid;

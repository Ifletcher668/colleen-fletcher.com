import React from 'react';
import useBreakpoints from '../../../utils/Breakpoints/useBreakpoints';

interface Props extends DefaultProps {
    /**
     * @param gap
     * Used to add grid-gap to your container.
     * Add a string value for any combination of gap styles
     * or add a number for pixel values.
     */
    gap?: string | number; // grid-gap
    /**
     * @param columns
     * Used to add grid-template-columns to your container.
     * Each subsequent index in the array maps to
     * a breakpoint. From left to right,
     * the breakpoints get smaller.
     */
    columns?: [string, string?, string?, string?, string?];
    /**
     * @param rows
     * Used to add grid-template-rows to your container.
     * Add up to five indexes. Each subsequent index maps to
     * a breakpoint, from widest to skinniest. If you add less
     * than five indexes, the last value will account for the rest
     * of the breakpoints.
     */
    rows?: [string, string?, string?, string?, string?];
    /**
     * @param containerType
     * Changes the default container around which your grid is wrapped.
     */
    containerType?: 'article' | 'section' | 'main-content' | 'aside';
    autoCols?: string;
}

const Grid: React.FC<Props> = ({
    className,
    style,
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
        ...style,
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
        case 'aside':
            return (
                <aside className={cn} style={styles}>
                    {children}
                </aside>
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

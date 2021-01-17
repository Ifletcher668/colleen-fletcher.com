import React from 'react';
import {CSSObject} from 'styled-components';
import {
    Grid as DivGrid,
    MainContentGrid,
    SectionGrid,
    AsideGrid,
    ArticleGrid,
} from './styles';
interface Props extends DefaultProps {
    /**
     * @param gap
     * Used to add grid-gap to your container.
     * Add a string value for any combination of gap styles
     * or add a number for pixel values.
     */
    gap?: string; // grid-gap
    /**
     * @param columns
     * Used to add grid-template-columns to your container.
     * Each subsequent index in the array maps to
     * a breakpoint. From left to right,
     * the breakpoints get smaller.
     */
    columns?: string;
    /**
     * @param rows
     * Used to add grid-template-rows to your container.
     * Add up to five indexes. Each subsequent index maps to
     * a breakpoint, from widest to skinniest. If you add less
     * than five indexes, the last value will account for the rest
     * of the breakpoints.
     */
    rows?: string;
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
    columns = 'none',
    rows = 'none',
    autoCols = 'none',
}: Props) => {
    const cn = className
        ? Array.isArray(className)
            ? className.join(' ')
            : className
        : '';

    // main-content applies predefined and very specific grid styling
    // Added up here to avoid calculating the useBreakpoints
    // if (containerType === 'main-content') {
    //     return <section className={`main-content ${cn}`}>{children}</section>;
    // }

    const theme: CSSObject = {
        gap,
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
    };

    switch (containerType) {
        case 'article':
            return (
                <ArticleGrid
                    gap={gap}
                    gridTemplateColumns={columns}
                    gridTemplateRows={rows}
                >
                    {children}
                </ArticleGrid>
            );
        case 'section':
            return (
                <SectionGrid
                    gap={gap}
                    gridTemplateColumns={columns}
                    gridTemplateRows={rows}
                >
                    {children}
                </SectionGrid>
            );
        case 'main-content':
            return (
                <MainContentGrid gap={gap} gridTemplateRows={rows}>
                    {children}
                </MainContentGrid>
            );

        case 'aside':
            return (
                <AsideGrid
                    gap={gap}
                    gridTemplateColumns={columns}
                    gridTemplateRows={rows}
                >
                    {children}
                </AsideGrid>
            );

        default:
            return (
                <DivGrid
                    gap={gap}
                    gridTemplateColumns={columns}
                    gridTemplateRows={rows}
                >
                    {children}
                </DivGrid>
            );
    }
};

export default Grid;

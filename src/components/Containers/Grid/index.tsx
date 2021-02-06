import React from 'react';
import {CSSObject} from 'styled-components';
import {Grid as DivGrid, SectionGrid, AsideGrid, ArticleGrid} from './styles';
import {useGridBreakpointLogic} from './useGridBreakpoint';

interface Props extends DefaultProps {
    columns?: BreakpointObject;
    rows?: BreakpointObject;
    gap?: string | number;
    styling?: CSSObject;
    containerType?: Container;
    onRenderBehavior?: () => string;
}

const Grid: React.FC<Props> = (props: Props) => {
    const {
        styling,
        className,
        children,
        containerType = 'div',
        columns = {},
        rows = {},
        gap = 0,
    } = props;

    const cn = className
        ? Array.isArray(className)
            ? className.join(' ')
            : className
        : '';

    const theme: CSSObject = {
        gap: `${typeof gap === 'number' ? `${gap.toString()}px` : gap}`,
        gridTemplateColumns: columns[useGridBreakpointLogic(columns)],
        gridTemplateRows: rows[useGridBreakpointLogic(rows)],
        ...styling,
    };

    switch (containerType) {
        case 'article':
            return (
                <ArticleGrid className={cn} styling={theme}>
                    {children}
                </ArticleGrid>
            );

        case 'section':
            return (
                <SectionGrid className={cn} styling={theme}>
                    {children}
                </SectionGrid>
            );

        case 'aside':
            return (
                <AsideGrid className={cn} styling={theme}>
                    {children}
                </AsideGrid>
            );

        default:
            return (
                <DivGrid className={cn} styling={theme}>
                    {children}
                </DivGrid>
            );
    }
};

export default Grid;

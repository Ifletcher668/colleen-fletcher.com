import React from 'react';
import styled, { CSSObject } from 'styled-components';
import { useGridBreakpointLogic } from './useGridBreakpoint';

interface Props extends DefaultProps {
    columns?: BreakpointObject;
    rows?: BreakpointObject;
    gap?: string | number;
    styling?: CSSObject;
    containerType?: ContainerType;
    onRenderBehavior?: () => string;
}

export const Wrapper = styled.div<Props>`
    display: grid;
    ${props => props.styling};
`;

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

    return (
        <Wrapper as={containerType} className={cn} styling={theme}>
            {children}
        </Wrapper>
    );
};

export default Grid;

import React from 'react';
import styled, { CSSObject } from 'styled-components';
import { below } from '../../../StyledComponents/_mixins';
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

    ${({ columns }) =>
        columns &&
        columns['xlarge'] &&
        `grid-template-columns: ${columns['xlarge']};`};

    ${({ columns }) =>
        columns &&
        columns['large'] &&
        below.large`grid-template-columns: ${columns['large']};`};

    ${({ columns }) =>
        columns &&
        columns['medium'] &&
        below.medium`grid-template-columns: ${columns['medium']};`};

    ${({ columns }) =>
        columns &&
        columns['small'] &&
        below.small`grid-template-columns: ${columns['small']};`};

    ${({ columns }) =>
        columns &&
        columns['xsmall'] &&
        below.xsmall`grid-template-columns: ${columns['xsmall']};`};

    ${({ rows }) =>
        rows && rows['xlarge'] && `grid-template-rows: ${rows['xlarge']};`};

    ${({ rows }) =>
        rows &&
        rows['large'] &&
        below.large`grid-template-rows: ${rows['large']};`};

    ${({ rows }) =>
        rows &&
        rows['medium'] &&
        below.medium`grid-template-rows: ${rows['medium']};`};

    ${({ rows }) =>
        rows &&
        rows['small'] &&
        below.small`grid-template-rows: ${rows['small']};`};

    ${({ rows }) =>
        rows &&
        rows['xsmall'] &&
        below.xsmall`grid-template-rows: ${rows['xsmall']};`};

    ${({ styling }) => styling};
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
        ...styling,
    };

    return (
        <Wrapper
            as={containerType}
            className={cn}
            styling={theme}
            columns={columns}
            rows={rows}
        >
            {children}
        </Wrapper>
    );
};

export default Grid;

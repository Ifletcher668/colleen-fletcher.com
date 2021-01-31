import React, {useEffect, useState} from 'react';
import {CSSObject} from 'styled-components';
import {
    useBreakpoints,
    useScreenWidth,
} from '../../../utils/Breakpoints/useBreakpoints';
import {Grid as DivGrid, SectionGrid, AsideGrid, ArticleGrid} from './styles';

const useGridBreakpointLogic = (type: BreakpointObject) => {
    const breakpoints = useBreakpoints();

    const [breakpointName, setBreakpointName] = useState<
        'xlarge' | 'large' | 'medium' | 'small' | 'xsmall'
    >('xlarge'); // setting default to xlarge
    const width = useScreenWidth();

    const typeHasSizeXLarge = type.hasOwnProperty('xlarge');
    const typeHasSizeLarge = type.hasOwnProperty('large');
    const typeHasSizeMedium = type.hasOwnProperty('medium');
    const typeHasSizeSmall = type.hasOwnProperty('small');
    const typeHasSizeXSmall = type.hasOwnProperty('xsmall');
    const breakpointXLarge = breakpoints[0];
    const breakpointLarge = breakpoints[1];
    const breakpointMedium = breakpoints[2];
    const breakpointSmall = breakpoints[3];
    const breakpointXSmall = breakpoints[4];

    useEffect(() => {
        if (width > breakpointXLarge) {
            setBreakpointName('xlarge');
        } else if (width <= breakpointXLarge && width > breakpointLarge) {
            // If with is between xlarge and large
            if (typeHasSizeXLarge) {
                setBreakpointName('xlarge');
            } else {
                if (typeHasSizeLarge) {
                    setBreakpointName('large');
                } else if (typeHasSizeMedium) {
                    setBreakpointName('medium');
                } else if (typeHasSizeSmall) {
                    setBreakpointName('small');
                } else if (typeHasSizeXSmall) {
                    setBreakpointName('xsmall');
                }
            }
        } else if (width <= breakpointLarge && width > breakpointMedium) {
            // If width is between large and medium
            if (typeHasSizeLarge) {
                setBreakpointName('large');
            } else {
                if (typeHasSizeXLarge && !typeHasSizeLarge) {
                    setBreakpointName('xlarge');
                } else if (typeHasSizeMedium) {
                    setBreakpointName('medium');
                } else if (typeHasSizeSmall) {
                    setBreakpointName('small');
                } else if (typeHasSizeXSmall) {
                    setBreakpointName('xsmall');
                }
            }
        } else if (width <= breakpointMedium && width > breakpointSmall) {
            // If width is between medium and small
            if (typeHasSizeMedium) {
                setBreakpointName('medium');
            } else {
                if (typeHasSizeXLarge && !typeHasSizeLarge) {
                    setBreakpointName('xlarge');
                } else if (typeHasSizeLarge) {
                    setBreakpointName('large');
                } else if (typeHasSizeSmall) {
                    setBreakpointName('small');
                } else if (typeHasSizeXSmall) {
                    setBreakpointName('xsmall');
                }
            }
        } else if (width <= breakpointSmall && width > breakpointXSmall) {
            // If width is between small and xsmall
            if (typeHasSizeSmall) {
                setBreakpointName('small');
            } else {
                if (
                    typeHasSizeXLarge &&
                    !typeHasSizeLarge &&
                    !typeHasSizeMedium
                ) {
                    setBreakpointName('xlarge');
                } else if (
                    typeHasSizeLarge &&
                    !typeHasSizeMedium &&
                    !typeHasSizeXSmall
                ) {
                    setBreakpointName('large');
                } else if (typeHasSizeMedium) {
                    setBreakpointName('medium');
                } else if (typeHasSizeXSmall) {
                    setBreakpointName('xsmall');
                }
            }
        } else {
            // set to xsmall
            setBreakpointName('xsmall');
        }
    }, [width]);

    return breakpointName;
};
type BreakpointObject = {
    xlarge?: string;
    large?: string;
    medium?: string;
    small?: string;
    xsmall?: string;
};
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
        ...styling,
        gridTemplateColumns: columns[useGridBreakpointLogic(columns)],
        gridTemplateRows: rows[useGridBreakpointLogic(rows)],
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

import React, {useEffect, useState} from 'react';
import {CSSObject} from 'styled-components';
import {
    useBreakpoints,
    useScreenWidth,
} from '../../../utils/Breakpoints/useBreakpoints';
import {Grid as DivGrid, SectionGrid, AsideGrid, ArticleGrid} from './styles';

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
    } = props;

    const cn = className
        ? Array.isArray(className)
            ? className.join(' ')
            : className
        : '';

    // breakpoints always has 5 indexes
    const breakpoints = useBreakpoints();
    const [breakpointName, setBreakpointName] = useState('');
    const width = useScreenWidth();

    const rowsHasXLarge = rows.hasOwnProperty('xlarge');
    const rowsHasLarge = rows.hasOwnProperty('large');
    const rowsHasMedium = rows.hasOwnProperty('medium');
    const rowsHasSmall = rows.hasOwnProperty('small');
    const rowsHasXSmall = rows.hasOwnProperty('xsmall');
    const colsHasXLarge = columns.hasOwnProperty('xlarge');
    const colsHasLarge = columns.hasOwnProperty('large');
    const colsHasMedium = columns.hasOwnProperty('medium');
    const colsHasSmall = columns.hasOwnProperty('small');
    const colsHasXSmall = columns.hasOwnProperty('xsmall');
    const breakpointXLarge = breakpoints[0];
    const breakpointLarge = breakpoints[1];
    const breakpointMedium = breakpoints[2];
    const breakpointSmall = breakpoints[3];
    const breakpointXSmall = breakpoints[4];

    useEffect(() => {
        if (width >= breakpointXLarge) {
            setBreakpointName('xlarge');
        } else if (width < breakpointXLarge && width > breakpointLarge) {
            if (colsHasLarge) {
                setBreakpointName('large');
            } else {
                if (colsHasXLarge) {
                    setBreakpointName('xlarge');
                } else if (colsHasMedium) {
                    setBreakpointName('medium');
                } else if (colsHasSmall) {
                    setBreakpointName('small');
                } else if (colsHasXSmall) {
                    setBreakpointName('xsmall');
                }
            }
        } else if (width < breakpointLarge && width > breakpointMedium) {
            if (colsHasMedium) {
                setBreakpointName('medium');
            } else {
                if (colsHasXLarge) {
                    setBreakpointName('xlarge');
                } else if (colsHasLarge) {
                    setBreakpointName('large');
                } else if (colsHasSmall) {
                    setBreakpointName('small');
                } else if (colsHasXSmall) {
                    setBreakpointName('xsmall');
                }
            }
        } else if (width < breakpointMedium && width > breakpointSmall) {
            if (colsHasSmall) {
                setBreakpointName('small');
            } else {
                if (colsHasXLarge) {
                    setBreakpointName('xlarge');
                } else if (colsHasLarge) {
                    setBreakpointName('large');
                } else if (colsHasMedium) {
                    setBreakpointName('medium');
                } else if (colsHasXSmall) {
                    setBreakpointName('xsmall');
                }
            }
        } else if (width < breakpointSmall && width > breakpointXSmall) {
            if (colsHasXSmall) {
                setBreakpointName('xsmall');
            } else {
                if (colsHasXLarge) {
                    setBreakpointName('xlarge');
                } else if (colsHasLarge) {
                    setBreakpointName('large');
                } else if (colsHasMedium) {
                    setBreakpointName('medium');
                } else if (colsHasSmall) {
                    setBreakpointName('small');
                }
            }
        }
    }, [width]);

    useEffect(() => {
        if (width >= breakpointXLarge) {
            setBreakpointName('xlarge');
        } else if (width < breakpointXLarge && width > breakpointLarge) {
            if (rowsHasLarge) {
                setBreakpointName('large');
            } else {
                if (rowsHasXLarge) {
                    setBreakpointName('xlarge');
                } else if (rowsHasMedium) {
                    setBreakpointName('medium');
                } else if (rowsHasSmall) {
                    setBreakpointName('small');
                } else if (rowsHasXSmall) {
                    setBreakpointName('xsmall');
                }
            }
        } else if (width < breakpointLarge && width > breakpointMedium) {
            if (rowsHasMedium) {
                setBreakpointName('medium');
            } else {
                if (rowsHasXLarge) {
                    setBreakpointName('xlarge');
                } else if (rowsHasLarge) {
                    setBreakpointName('large');
                } else if (rowsHasSmall) {
                    setBreakpointName('small');
                } else if (rowsHasXSmall) {
                    setBreakpointName('xsmall');
                }
            }
        } else if (width < breakpointMedium && width > breakpointSmall) {
            if (rowsHasSmall) {
                setBreakpointName('small');
            } else {
                if (rowsHasXLarge) {
                    setBreakpointName('xlarge');
                } else if (rowsHasLarge) {
                    setBreakpointName('large');
                } else if (rowsHasMedium) {
                    setBreakpointName('medium');
                } else if (rowsHasXSmall) {
                    setBreakpointName('xsmall');
                }
            }
        } else if (width < breakpointSmall && width > breakpointXSmall) {
            if (rowsHasXSmall) {
                setBreakpointName('xsmall');
            } else {
                if (rowsHasXLarge) {
                    setBreakpointName('xlarge');
                } else if (rowsHasLarge) {
                    setBreakpointName('large');
                } else if (rowsHasMedium) {
                    setBreakpointName('medium');
                } else if (rowsHasSmall) {
                    setBreakpointName('small');
                }
            }
        }
    }, [width]);

    const theme: CSSObject = {
        ...styling,
        gridTemplateColumns: columns[breakpointName],
        gridTemplateRows: rows[breakpointName],
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

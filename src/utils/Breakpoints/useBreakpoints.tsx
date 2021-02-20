import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

type CSSUnit = 'em' | 'rem' | 'px' | '%';

const _isRenderingInBrowser =
    typeof window !== `undefined` || typeof document !== `undefined`;

const _getScreenWidth: () => number = () => {
    return _isRenderingInBrowser
        ? Math.max(
              document.body.scrollWidth,
              document.documentElement.scrollWidth,
              document.body.offsetWidth,
              document.documentElement.offsetWidth,
              document.documentElement.clientWidth,
              window.innerWidth,
          )
        : 0;
};

const _getFontSize: (htmlElement: string) => number = (
    htmlElement = 'html',
) => {
    return _isRenderingInBrowser
        ? parseFloat(
              window.getComputedStyle(
                  document.querySelector(htmlElement) as HTMLElement,
              ).fontSize,
          )
        : 0;
};

const _convertStringToEmValue = (
    numberString: string,
    parentElement = 'body',
): number => {
    return parseFloat(numberString) * _getFontSize(parentElement);
};

/**
 * @param numberString
 * Add a number string to be converted into em value.
 */
const _convertStringToRemValue = (numberString: string): number => {
    return parseFloat(numberString) * _getFontSize('html');
};

/**
 * @param numberString
 * Add a number string to be converted into em value.
 */
const _convertStringToPercentageValue = (numberString: string): number => {
    return _getScreenWidth() * (parseFloat(numberString) / 100);
};

const _convertCSSSizeVariableStringToNumber = (
    breakpoint: string,
): [number, CSSUnit] => {
    if (typeof breakpoint === 'number') return breakpoint;

    let numberString = '';
    let unit = '';

    // TODO: Refactor to use regex?
    for (let i = 0; i < breakpoint.length; i++) {
        if (breakpoint[i] === '%') {
            unit = breakpoint[i];
            break;
        } else if (
            breakpoint[i] + breakpoint[i + 1] === 'em' ||
            breakpoint[i] + breakpoint[i + 1] === 'px'
        ) {
            unit = breakpoint[i] + breakpoint[i + 1];
            break;
        } else if (
            breakpoint[i] + breakpoint[i + 1] + breakpoint[i + 2] ===
            'rem'
        ) {
            unit = breakpoint[i] + breakpoint[i + 1] + breakpoint[i + 2];
            break;
        }

        numberString += breakpoint[i];
    }

    if (unit === '%') {
        return [_convertStringToPercentageValue(numberString), unit];
    } else if (unit === 'em') {
        return [_convertStringToEmValue(numberString), unit];
    } else if (unit === 'rem') {
        return [_convertStringToRemValue(numberString), unit];
    } else {
        // not type safe?
        return [parseFloat(numberString), 'px'];
    }
};

export const useBreakpoints = (): Breakpoints => {
    const [width, setWidth] = useState<number | undefined>(undefined);
    const [fontSize, setFontSize] = useState<number | undefined>(undefined);
    const [breakpoints, setBreakpoints] = useState<Breakpoints>([
        0,
        0,
        0,
        0,
        0,
    ]);

    const { breakpoints: themeBreakpoints } = useTheme();

    useEffect(() => {
        const breakpointNums: Breakpoints | any[] = [];
        for (const breakpoint in themeBreakpoints) {
            if (
                Object.prototype.hasOwnProperty.call(
                    themeBreakpoints,
                    breakpoint,
                )
            ) {
                if (typeof breakpoint === 'number') return breakpoint;

                const [value] = _convertCSSSizeVariableStringToNumber(
                    themeBreakpoints[breakpoint],
                );

                breakpointNums.push(value);
            }
        }
        setBreakpoints(breakpointNums as Breakpoints);
    }, []);

    useEffect(() => {
        setFontSize(_getFontSize('body'));
    }, [width]);

    useEffect(() => {
        const handleResize = () => {
            setWidth(_getScreenWidth());
        };

        // immediately set width
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [fontSize]);

    return breakpoints;
};

export const useScreenWidth = (): number => {
    const [width, setWidth] = useState<number>(0);
    const [fontSize, setFontSize] = useState<number | undefined>(0);

    const _getFontSize: (htmlElement: string) => number = (
        htmlElement = 'html',
    ) => {
        return _isRenderingInBrowser
            ? parseFloat(
                  window.getComputedStyle(
                      document.querySelector(htmlElement) as HTMLElement,
                  ).fontSize,
              )
            : 0;
    };

    useEffect(() => {
        setFontSize(_getFontSize('body'));
    }, [width]);

    useEffect(() => {
        const handleWidthResize = () => {
            setWidth(_getScreenWidth());
        };

        // immediately set width
        handleWidthResize();

        window.addEventListener('resize', handleWidthResize);
        return () => window.removeEventListener('resize', handleWidthResize);
    }, [fontSize]);

    return width;
};

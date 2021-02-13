import { useEffect, useMemo, useState } from 'react';
import BreakpointHandler from './breakpoint-handler';
// TODO: Deprecated
export const useBreakpoints = (): Breakpoints => {
    const {
        getBreakpoints,
        getScreenWidth,
        getFontSize,
    } = new BreakpointHandler();
    const [width, setWidth] = useState<number | undefined>(undefined);
    const [fontSize, setFontSize] = useState<number | undefined>(undefined);
    const [breakpoints, setBreakpoints] = useState<Breakpoints | []>([]);

    useMemo(() => {
        setBreakpoints(
            // TODO: Any way to grab this dynamically?
            getBreakpoints([
                '--size-breakpoint-xlarge',
                '--size-breakpoint-large',
                '--size-breakpoint-medium',
                '--size-breakpoint-small',
                '--size-breakpoint-xsmall',
            ]),
        );
    }, [fontSize]);

    useEffect(() => {
        setFontSize(getFontSize('body'));
    }, [width]);

    useEffect(() => {
        const handleResize = () => {
            setWidth(getScreenWidth());
        };
        // immediately set width
        handleResize();
        window.addEventListener('resize', handleResize);
        return window.addEventListener('resize', handleResize);
    }, [fontSize]);

    return breakpoints;
};

export const useScreenWidth = (): number => {
    const { getScreenWidth, getFontSize } = new BreakpointHandler();
    const [width, setWidth] = useState<number | undefined>(undefined);
    const [fontSize, setFontSize] = useState<number | undefined>(undefined);

    useEffect(() => {
        setFontSize(getFontSize('body'));
    }, [width]);

    useMemo(() => {
        const handleWidthResize = () => {
            setWidth(getScreenWidth());
        };
        // immediately set width
        handleWidthResize();
        if (typeof window !== `undefined`) {
            window.addEventListener('resize', handleWidthResize);
            return window.addEventListener('resize', handleWidthResize);
        }
    }, [fontSize]);

    if (width !== undefined) {
        return width;
    } else return 0;
};

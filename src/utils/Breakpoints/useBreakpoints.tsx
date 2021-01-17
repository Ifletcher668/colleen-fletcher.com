import {useEffect, useMemo, useState} from 'react';
import BreakpointHandler from './breakpoint-handler';
// TODO: Deprecated
export const useBreakpoints: () => number[] = () => {
    const {
        getBreakpoints,
        getScreenWidth,
        getFontSize,
    } = new BreakpointHandler();
    const [width, setWidth] = useState<number | undefined>(undefined);
    const [fontSize, setFontSize] = useState<number | undefined>(undefined);

    // TODO: Any way to grab this dynamically?
    const [breakpoints, setBreakpoints] = useState<number[]>([]);
    useEffect(() => {
        setBreakpoints(
            getBreakpoints([
                '--size-breakpoint-xlarge',
                '--size-breakpoint-large',
                '--size-breakpoint-medium',
                '--size-breakpoint-small',
                '--size-breakpoint-xsmall',
            ]),
        );
        console.log(`changing`);
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
    }, []);

    return breakpoints;
};

export const useScreenWidth = () => {
    const {getScreenWidth} = new BreakpointHandler();
    const [width, setWidth] = useState<number | undefined>(undefined);
    useEffect(() => {
        const handleResize = () => {
            setWidth(getScreenWidth());
        };
        // immediately set width
        handleResize();
        window.addEventListener('resize', handleResize);
        return window.addEventListener('resize', handleResize);
    }, []);
};

import {useEffect, useState} from 'react';
import BreakpointHandler from './breakpoint-handler';

const useBreakpoints = (values: string[]) => {
    const {getBreakpoints, getScreenWidth} = new BreakpointHandler();
    // TODO: Any way to grab this dynamically?
    const breakpoints = getBreakpoints([
        '--size-breakpoint-xlarge',
        '--size-breakpoint-large',
        '--size-breakpoint-medium',
        '--size-breakpoint-small',
        '--size-breakpoint-xsmall',
    ]);
    if (!Array.isArray(values)) {
        throw new Error(`value passed was not of type Array.`);
    }
    if (values.length > breakpoints.length) {
        throw new Error(
            `Array "[${values}]" is too long! Reduce array length by ${
                values.length - breakpoints.length
            }.`,
        );
    }

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
    if (width) {
        if (
            values.length === 1 ||
            // or greater than 'large' screen size
            width > breakpoints[0] ||
            (width < breakpoints[0] && width > breakpoints[1])
        ) {
            return values[0];
        } else if (width < breakpoints[1] && width > breakpoints[2]) {
            // between large and medium
            return values[1] ? values[1] : values[values.length - 1];
        } else if (width < breakpoints[2] && width > breakpoints[3]) {
            // between medium and small
            return values[2] ? values[2] : values[values.length - 1];
        } else if (width < breakpoints[3] && width > breakpoints[4]) {
            // between small and extra small
            return values[3] ? values[3] : values[values.length - 1];
        } else if (width < breakpoints[4]) {
            // if extra small
            return values[4] ? values[4] : values[values.length - 1];
        }
    }
};

export default useBreakpoints;

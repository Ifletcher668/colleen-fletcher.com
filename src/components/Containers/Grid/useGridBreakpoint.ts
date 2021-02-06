import {useEffect, useState} from 'react';
import {
    useBreakpoints,
    useScreenWidth,
} from '../../../utils/Breakpoints/useBreakpoints';

export const useGridBreakpointLogic = (type: BreakpointObject) => {
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

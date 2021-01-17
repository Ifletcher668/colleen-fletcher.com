import {CSSObject} from 'styled-components';
export default class BreakpointHandler {
    private _getCSSVariable(varName: string) {
        return getComputedStyle(document.documentElement).getPropertyValue(
            varName,
        );
    }

    // takes object key:value pair, strips quotes, and converts camelCase to hyphen: ex, camelCase ==> camel-case
    private _stringifyCSSPropertyObject = (object: CSSObject) =>
        JSON.stringify(object)
            .replace(/[A-Z]/g, m => '-' + m.toLowerCase())
            .replace(/"([^"]+)"/g, '$1');

    /**
     * @param numberString
     * Add a number string to be converted into em value.
     * @param parentElement
     * if no second parameter given, parentElement
     * defaults to 'body'.
     */
    private _convertStringToEmValue = (
        numberString: string,
        parentElement = 'body',
    ) => {
        return parseFloat(numberString) * this.getFontSize(parentElement);
    };

    /**
     * @param numberString
     * Add a number string to be converted into em value.
     */
    private _convertStringToRemValue = (numberString: string) => {
        return parseFloat(numberString) * this.getFontSize('html');
    };
    /**
     * @param numberString
     * Add a number string to be converted into em value.
     */
    private _convertStringToPercentageValue = (numberString: string) => {
        return this.getScreenWidth() * (parseFloat(numberString) / 100);
    };

    private _convertCSSSizeVariableStringToNumber: (
        cssVar: string,
    ) => [num: number, unit: string] = (cssVar: string) => {
        let numberString = '';
        let unit = '';
        // TODO: Refactor to use regex?
        for (let i = 0; i < cssVar.length; i++) {
            if (cssVar[i] === '%') {
                unit = cssVar[i];
                break;
            } else if (
                cssVar[i] + cssVar[i + 1] === 'em' ||
                cssVar[i] + cssVar[i + 1] === 'px'
            ) {
                unit = cssVar[i] + cssVar[i + 1];
                break;
            } else if (cssVar[i] + cssVar[i + 1] + cssVar[i + 2] === 'rem') {
                unit = cssVar[i] + cssVar[i + 1] + cssVar[i + 2];
                break;
            }
            numberString += cssVar[i];
        }

        if (unit === '%') {
            return [this._convertStringToPercentageValue(numberString), unit];
        } else if (unit === 'em') {
            return [this._convertStringToEmValue(numberString), unit];
        } else if (unit === 'rem') {
            return [this._convertStringToRemValue(numberString), unit];
        } else {
            // if (unit === 'px')
            return [parseFloat(numberString), unit];
        }
    };

    /**
     *
     * @param htmlElement
     * Parameter to give document.querySelector. If no
     * value is given, the default behavior returns
     * the computed font size given to the 'html' element.
     */
    public getFontSize: (htmlElement: string) => number = (
        htmlElement = 'html',
    ) => {
        return parseFloat(
            getComputedStyle(document.querySelector(htmlElement) as HTMLElement)
                .fontSize,
        );
    };

    public getBreakpoints: (
        breakpoints: [string, string?, string?, string?, string?],
        // TODO: Add parentElement param for 'em' type
    ) => number[] = (
        breakpoints: [string, string?, string?, string?, string?],
    ) => {
        return breakpoints.map(breakpoint => {
            const cssVar = this._getCSSVariable(breakpoint!).trim();
            const [num] = this._convertCSSSizeVariableStringToNumber(cssVar);
            return num;
        });
    };

    /**
     * @function 
     * Returns the largest value of the following 
     * equations: document.body.scrollWith,
     *  document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth,
            and window.innerWidth.
     */
    public getScreenWidth: () => number = () => {
        return Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth,
            window.innerWidth,
        );
    };

    /**
     * @function
     * @param max
     * Provide the value to pass into max-width: breakpoint.
     *
     * @param children
     * An object of CSS properties to pass into the media query.
     */
    // TODO: refactor to allow all value types
    public above: (max: number, children: CSSObject) => string = (
        max: number,
        children: CSSObject,
    ) => {
        return `@media screen and (max-width:${
            (max - 0.01).toString() + 'px'
        }) {
            ${this._stringifyCSSPropertyObject(children)}
        }
        `;
        // Use? JSON.stringify(children, null, 4)
    };

    /**
     * @function
     * @param min
     * Provide the value to pass into min-width: breakpoint.
     *
     * @param children
     * An object of CSS properties to pass into the media query.
     */
    public below: (min: number, children: CSSObject) => string = (
        min: number,
        children: CSSObject,
    ) => {
        return `@media screen and (max-width:${
            (min + 0.01).toString() + 'px'
        }) {
            ${this._stringifyCSSPropertyObject(children)}
        }
        `;
    };

    /**
     * @function
     * @param min
     * Provide the value to pass into min-width: breakpoint.
     *
     * @param max
     * Provide the value to pass into max-width: breakpoint.
     *
     * @param children
     * An object of CSS properties to pass into the media query.
     */
    public between: (
        min: string | number,
        max: string | number,

        children: CSSObject,
    ) => string = (
        min: string | number,
        max: string | number,

        children: CSSObject,
    ) => {
        return `@media screen and (min-width:${
            typeof min === 'number' ? min + 'px' : min
        }) and (max-width:${typeof max === 'number' ? max + 'px' : max}) {
            ${this._stringifyCSSPropertyObject(children)}
        }
        `;
    };
}

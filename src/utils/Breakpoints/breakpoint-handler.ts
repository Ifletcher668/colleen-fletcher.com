export default class BreakpointHandler {
    private _getCSSVariable(varName: string) {
        return getComputedStyle(document.documentElement).getPropertyValue(
            varName,
        );
    }
    private _getFontSize(htmlElement: string) {
        return parseFloat(
            getComputedStyle(document.querySelector(htmlElement) as HTMLElement)
                .fontSize,
        );
    }
    private _stringifyCSSPropertyObject = (object: React.CSSProperties) =>
        JSON.stringify(object)
            .replace(/[A-Z]/g, m => '-' + m.toLowerCase())
            .replace(/"([^"]+)"/g, '$1');

    public getBreakpoints: (
        breakpoints: [string, string?, string?, string?, string?],
        parentElement?: string,
    ) => number[] = (
        breakpoints: [string, string?, string?, string?, string?],
        parentElement = 'body',
    ) => {
        return breakpoints.map(breakpoint => {
            const cssVar = this._getCSSVariable(breakpoint!).trim();
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
                } else if (
                    cssVar[i] + cssVar[i + 1] + cssVar[i + 2] ===
                    'rem'
                ) {
                    unit = cssVar[i] + cssVar[i + 1] + cssVar[i + 2];
                    break;
                }
                numberString += cssVar[i];
            }

            if (unit === '%') {
                return this.getScreenWidth() * (parseFloat(numberString) / 100);
            } else if (unit === 'em') {
                return (
                    parseFloat(numberString) * this._getFontSize(parentElement)
                );
            } else if (unit === 'rem') {
                return parseFloat(numberString) * this._getFontSize('body');
            } else {
                // if (unit === 'px')
                return parseFloat(numberString);
            }
        });
    };

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

    public below: (
        min: string | number,
        children: React.CSSProperties,
    ) => string = (min: string | number, children: React.CSSProperties) => {
        return `@media screen and (max-width:${
            typeof min === 'number' ? min + 'px' : min
        }) {
            ${this._stringifyCSSPropertyObject(children)}
        }
        `;
        // Use? JSON.stringify(children, null, 4)
    };

    public between: (
        min: string | number,
        max: string | number,

        children: React.CSSProperties,
    ) => string = (
        min: string | number,
        max: string | number,

        children: React.CSSProperties,
    ) => {
        return `@media screen and (min-width:${
            typeof min === 'number' ? min + 'px' : min
        }) and (max-width:${typeof max === 'number' ? max + 'px' : max}) {
            ${this._stringifyCSSPropertyObject(children)}
        }
        `;
    };

    public above: (
        max: string | number,
        children: React.CSSProperties,
    ) => string = (max: string | number, children: React.CSSProperties) => {
        return `@media screen and (max-width:${
            typeof max === 'number' ? max + 'px' : max
        }) {
            ${this._stringifyCSSPropertyObject(children)}
        }
        `;
    };
}

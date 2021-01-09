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

    public getBreakpoints: (
        breakpoints: [string, string?, string?, string?, string?],
    ) => number[] = (
        breakpoints: [string, string?, string?, string?, string?],
    ) => {
        return breakpoints.map(breakpoint => {
            const cssVar = this._getCSSVariable(breakpoint!).trim();
            let numberString = '';
            for (let i = 0; i < cssVar.length; i++) {
                const unit = cssVar[i] + cssVar[i + 1];
                if (
                    unit === 'em' ||
                    unit === 'px' ||
                    cssVar[i] === '%' ||
                    unit + cssVar[i + 2] === 'rem'
                ) {
                    break;
                }
                numberString += cssVar[i];
            }
            // TODO: hardcoded to only return em value
            // if unit === 'px' return parseFloat(numberString)
            // if unit === 'rem' return parseFloat(numberString) * this._getFontSize('body');
            // if unit === 'em' return parseFloat(numberString) * this._getFontSize(parentElement);
            return parseFloat(numberString) * this._getFontSize('body');
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

    // make Above function
}

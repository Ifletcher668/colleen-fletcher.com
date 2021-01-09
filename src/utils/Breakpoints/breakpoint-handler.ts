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

    public getBreakpoints: (breakpoints: string[]) => number[] = (
        breakpoints: string[],
    ) => {
        return breakpoints.map(name => {
            const value = this._getCSSVariable(name).trim();
            let numberValue = '';
            for (let i = 0; i < value.length; i++) {
                const unit = value[i] + value[i + 1];
                if (
                    unit === 'em' ||
                    unit === 'px' ||
                    value[i] === '%' ||
                    unit + value[i + 2] === 'rem'
                ) {
                    break;
                }
                numberValue += value[i];
            }
            return parseInt(numberValue) * this._getFontSize('body');
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

    // make Below function

    // make Above function
}

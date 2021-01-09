export default class BreakpointHandler {
    private getCSSVariable(varName: string) {
        return getComputedStyle(document.documentElement).getPropertyValue(
            varName,
        );
    }
    private getFontSize(htmlElement: string) {
        return parseFloat(
            getComputedStyle(document.querySelector(htmlElement) as HTMLElement)
                .fontSize,
        );
    }

    public getBreakpoints = (breakpoints: string[]) => {
        return breakpoints.map(name => {
            const value = this.getCSSVariable(name).trim();
            let numberValue = '';
            for (let i = 0; i < value.length; i++) {
                const unit = value[i] + value[i + 1];
                if (
                    unit === 'em' ||
                    unit === 'rem' ||
                    unit === 'px' ||
                    value[i] === '%'
                ) {
                    break;
                }
                numberValue += value[i];
            }
            return parseInt(numberValue) * this.getFontSize('body');
        });
    };

    public getScreenWidth = () => {
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

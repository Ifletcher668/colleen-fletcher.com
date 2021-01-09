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

    // TODO: allow function to accept a parameter of 'element' to eventually pass into getBreakpoints as a more dynamic approach.

    public getBreakpoints = (breakpoints: string[]) => {
        // TODO: Add param string[] to run param.forEach((bp:string)=>this.getCSSVariable(bp))
        // sizes are taken from whatever is set in 'tokens' sass file

        return breakpoints.map(breakpoint => {
            const value = this.getCSSVariable(breakpoint);
            const trimmed = value.trim();
            let numberValue = '';

            for (let i = 0; i < trimmed.length; i++) {
                const unit = trimmed[i] + trimmed[i + 1];
                if (
                    unit === 'em' ||
                    unit === 'rem' ||
                    unit === 'px' ||
                    trimmed[i] === '%'
                ) {
                    break;
                }
                numberValue += trimmed[i];
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

export default class BreakpointHandler {
    private getCSSVariable(name: string) {
        return getComputedStyle(document.documentElement).getPropertyValue(
            name,
        );
    }

    public getBreakpoints = () => {
        // sizes are taken from whatever is set in 'tokens' sass file
        // ordered from largest to smallest screen size
        const breakpoints = [
            this.getCSSVariable('--size-breakpoint-xlarge'),
            this.getCSSVariable('--size-breakpoint-large'),
            this.getCSSVariable('--size-breakpoint-medium'),
            this.getCSSVariable('--size-breakpoint-small'),
            this.getCSSVariable('--size-breakpoint-xsmall'),
        ];

        return breakpoints.map(breakpoint => {
            const trimmed = breakpoint.trim();
            let valueAsNumberOnly = '';

            for (let i = 0; i < trimmed.length; i++) {
                if (trimmed[i] + trimmed[i + 1] === 'em') {
                    break;
                }
                valueAsNumberOnly += trimmed[i];
            }

            return parseInt(valueAsNumberOnly) * this.getBodyEms();
        });
    };

    public getWidth() {
        return Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth,
            window.innerWidth,
        );
    }

    private getBodyEms() {
        return parseFloat(getComputedStyle(document.body).fontSize);
    }
    // TODO: allow function to accept a parameter of 'element' to eventually pass into getBreakpoints as a more dynamic approach.
}

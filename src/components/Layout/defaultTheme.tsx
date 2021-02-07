import { DefaultTheme } from 'styled-components';
export const theme: DefaultTheme = {
    color: {
        background: '#fff',
        'background-accent': '#e6e6e6',
        'light-blue': '#e5f6fd',
        'med-blue': '#caecfc',
        'primary-blue': '#7bd0f7',
        'dark-blue': '#6fbbde',
        lilac: '#eeb5eb',
        'lilac-darkened': '#be91bc',
        'lilac-lightened': '#f1c4ef',
        aterrima: '#000',
        dark: '#1a1a1a',
        earth: '#664838',
    },

    size: {
        fullWidth: '60em',

        column: {
            xlarge: '16em',
            large: '12em',
            medium: '8em',
            small: '4em',
        },

        margin: {
            xxlarge: '4em',
            xlarge: '4.5em',
            large: '3em',
            medium: '2em',
            small: '1em',
            xsmall: '0.5em',
        },

        padding: {
            xxlarge: '4em',
            xlarge: '4.5em',
            large: '3em',
            medium: '2em',
            small: '1em',
            xsmall: '0.5em',
        },
    },

    font: {
        weight: {
            heading: 700,
            normal: 600,
            light: 500,
        },

        size: {
            xlarge: '2em',
            large: '1.7em',
            medium: '1.4em',
            small: '1.2em',
            xsmall: '1em',
            info: '0.6em',
        },

        'letter-spacing': {
            fancy: '0.2em',
            important: '0.1em',
        },

        // TODO: Deprecate
        h1: '1.6em',
        h2: '1.4em',
        h3: '1.2em',
        h4: '1.1em',
        h5: '0.9em',
        h6: '0.8em',
        'line-height': '1.3',
    },

    radius: {
        edge: '2px',
        circle: '1000px',
    },

    breakpoint: {
        xlarge: '120rem',
        large: '75rem',
        medium: '63.75rem',
        small: '48rem',
        xsmall: '30rem',
    },

    time: {
        fast: '0.2s',
        medium: ' 0.5s',
        slow: ' 1s',
    },
};

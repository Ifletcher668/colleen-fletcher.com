interface DefaultProps extends React.HTMLAttributes<{}> {
    id?: string;
    title?: string;
    className?: string | string[];
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

interface FlexboxProps
    extends DefaultProps,
        React.DOMAttributes<HTMLDivElement> {
    inline?: boolean;
    vertical?: boolean; // column
    wrap?: boolean;
    noGrow?: boolean; // acts as no-grow and no-shrink
    grow?: number;
    shrink?: number;
    basis?: number | 'auto';
    top?: boolean;
    middle?: boolean;
    bottom?: boolean;
    left?: boolean;
    center?: boolean;
    right?: boolean;
    between?: boolean;
    around?: boolean;
    gap?: boolean | number; // add margin between children similar to grid-gap on grid
    containerType?: 'div' | 'nav' | 'section' | 'aside' | 'article';
}

interface PageProps extends DefaultProps {
    location: Location;
}

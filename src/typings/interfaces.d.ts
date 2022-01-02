interface DefaultProps
  extends React.HTMLAttributes<any>,
    React.DOMAttributes<any>,
    React.RefAttributes<any> {
  id?: string;
  title?: string;
  className?: string | string[];
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

interface FlexboxProps extends DefaultProps {
  inline?: boolean;
  vertical?: boolean; // column
  wrap?: boolean;
  flex?: string;
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
  gap?: string | boolean | number;
  containerType?: 'div' | 'nav' | 'section' | 'aside' | 'article' | 'ul' | 'li';
}

interface PageProps extends DefaultProps {
  location: Location;
}

type BreakpointObject = {
  xlarge?: string;
  large?: string;
  medium?: string;
  small?: string;
  xsmall?: string;
};

type ContainerType = 'div' | 'article' | 'section' | 'aside' | 'ul' | 'ol';

type Config = {
  socials: Social;
};

type Social = {
  instagram: string;
  facebook: string;
  discord: string;
  pinterest: string;
};

// Grid Layout

type Grid = {
  gap?: string | number; // grid-gap
  /**
   * @param columns
   * Each subsequent index in the array maps to
   * a breakpoint. From left to right,
   * the breakpoints get smaller.
   */
  columns?: [string, string?, string?, string?, string?]; // grid-template-columns
  /**
   * @param rows
   * Each subsequent index in the array maps to
   * a breakpoint. From left to right,
   * the breakpoints get smaller.
   */
  rows?: [string, string?, string?, string?, string?]; // grid-template-rows
  containerType?: 'article' | 'section' | 'div' | 'aside';
  autoCols?: string;
};

// Random types used by Strapi and others

type JustifyValues = 'left' | 'center' | 'right';
type AlignValues = 'top' | 'center' | 'bottom';

type ImageStyle =
  | 'straight_line'
  | 'stagger'
  | 'triangle'
  | 'inverted_triangle';

type DividerStyle = 'standard' | 'fancy';

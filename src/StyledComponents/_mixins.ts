import { css, DefaultTheme, ThemeProps } from 'styled-components';
import { theme } from './defaultTheme';

type CSSParams = Parameters<typeof css>;

type StyleFnMap = Record<
  keyof DefaultTheme['breakpoints'],
  (...args: CSSParams) => any
>;

const typedKeys = <T extends DefaultTheme['breakpoints']>(
  obj: T,
): Array<keyof T> => Object.keys(obj) as Array<keyof T>;

const { breakpoints } = theme;

export const below = typedKeys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {} as StyleFnMap);

export const above = typedKeys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {} as StyleFnMap);

export const color = (label: keyof DefaultTheme['color']) => (
  props: ThemeProps<DefaultTheme>,
): string => props.theme.color[label];

export const radius = (label: keyof DefaultTheme['radius']) => (
  props: ThemeProps<DefaultTheme>,
): string => props.theme.radius[label];

export const time = (label: keyof DefaultTheme['time']) => (
  props: ThemeProps<DefaultTheme>,
): string => props.theme.time[label];

export const font = <
  Variant extends keyof DefaultTheme['font'],
  Label extends Extract<keyof DefaultTheme['font'][Variant], string | number>
>(
  variant: Variant,
  label: Label,
) => (props: ThemeProps<DefaultTheme>) => props.theme.font[variant][label];

export const size = <
  Variant extends keyof DefaultTheme['size'],
  Label extends Extract<keyof DefaultTheme['size'][Variant], string | number>
>(
  variant: Variant,
  label: Label,
) => (props: ThemeProps<DefaultTheme>) => props.theme.size[variant][label];

export const gridContainer = css`
  display: grid;
`;

export const mobileGridTemplateLayout = css`
  grid-template-columns: 1fr;
  grid-template-rows:
    [content-start] auto
    [content-end] auto;
`;

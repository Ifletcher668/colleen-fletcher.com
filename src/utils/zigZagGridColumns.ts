/**
 * @param idx
 * Pass in the index of an Array.map()
 *
 * Function to create the zig zag effect on Preview sections
 */
export const zigZagGridColumns = (idx: number): BreakpointObject => {
    return idx % 2 === 0
        ? {
              xlarge: `[image] 1fr [spacer] 0.4fr [text] minmax(700px, 2fr)`,
              medium: `[image] 1fr [spacer] 0.4fr [text] minmax(400px, 2fr)`,
              small: `1fr`,
          }
        : {
              xlarge: `[text] minmax(700px, 2fr) [spacer] 0.4fr [image] 1fr`,
              medium: `[text] minmax(400px, 2fr) [spacer] 0.4fr [image] 1fr`,
              small: `1fr`,
          };
};

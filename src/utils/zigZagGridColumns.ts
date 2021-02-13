/**
 * @param idx
 * Pass in the index of an Array.map()
 *
 * Function to create the zig zag effect on Preview sections
 */
export const zigZagGridColumns = (idx: number): BreakpointObject => {
    return idx % 2 === 0
        ? {
              xlarge: `[image] 1fr [spacer] 50px [text] 2fr`,
              large: `[image] 1fr [spacer] 20px [text] 1fr`,
              small: `1fr`,
          }
        : {
              xlarge: `[text] 2fr [spacer] 50px [image] 1fr`,
              large: `[text] 1fr [spacer] 20px [image] 1fr`,
              small: `1fr`,
          };
};

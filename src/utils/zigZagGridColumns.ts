/**
 * @param idx
 * Pass in the index of an Array.map()
 *
 * Function to create the zig zag effect on Preview sections
 */
export const zigZagGridColumns = (idx: number): BreakpointObject => {
  return idx % 2 === 0
    ? {
        xlarge: '[image] minmax(34%, 1fr) [spacer] 2% [text] minmax(64%, 2fr)',
        large: '[image] minmax(36%, 1fr) [spacer] 4% [text] minmax(60%, 1fr)',
        small: '1fr',
      }
    : {
        xlarge: '[text] minmax(64%, 2fr) [spacer] 2% [image] minmax(34%, 1fr)',
        large: '[text] minmax(60%, 1fr) [spacer] 4% [image] minmax(36%, 1fr)',
        small: '1fr',
      };
};

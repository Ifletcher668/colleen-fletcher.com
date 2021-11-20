import styled from 'styled-components';
import { above, gridContainer } from '../../../styled-components/_mixins';

export const TextCenterImageEitherSide = styled.section`
  ${gridContainer};
  grid-template-columns:
    [left] 1fr
    [middle] 0.5rem
    [right] 1fr;
  grid-template-rows:
    [content-start] auto
    [content-middle] auto
    [content-end] auto;

  ${above.small`
    grid-template-columns:
      [image-left] 1.5fr
      [spacer] 0.05fr
      [text] 3fr
      [spacer] 0.05fr
      [image-right] 1.5fr;
  `}
`;

export const GridAreaImageLeft = styled.div`
  grid-area: content-end / left / content-end / left; // reorder image to top on mobile

  ${above.small`
    grid-area: content-start / image-left / content-end / image-left;
  `}
`;

export const GridAreaText = styled.div`
  grid-area: content-start / left / content-start / right-end; // reorder image to top on mobile

  ${above.small`
    grid-area: content-start / text / content-end / text;
  `}
`;

export const GridAreaImageRight = styled.div`
  grid-area: content-end / right / content-end / right;

  ${above.small`
    grid-area: content-start / image-right / content-end / image-right;
  `}
`;

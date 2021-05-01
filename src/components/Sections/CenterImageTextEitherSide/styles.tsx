import styled from 'styled-components';
import { above, gridContainer } from '../../../StyledComponents/_mixins';

export const ImageCenterTextEitherSide = styled.section`
  ${gridContainer};

  grid-template-columns: 1fr;
  grid-template-rows:
    [content-start] auto
    [content-middle] auto
    [content-end] auto;

  ${above.small`
    grid-template-columns:
      [text-left] 1.5fr
      [spacer] 0.05fr
      [image] 1fr
      [spacer] 0.05fr
      [text-right] 1.5fr;
  `}
`;

export const GridAreaTextLeft = styled.div`
  grid-area: content-middle / auto / content-middle / auto; // reorder image to top on mobile

  ${above.small`
    grid-area: content-start / text-left / content-end / text-left;
  `}
`;

export const GridAreaImage = styled.div`
  grid-area: content-start / auto / content-start / auto; // reorder image to top on mobile

  ${above.small`
    grid-area: content-start / image / content-end / image;
  `}
`;

export const GridAreaTextRight = styled.div`
  grid-area: content-end / auto / content-end / auto;

  ${above.small`
    grid-area: content-start / text-right / content-end / text-right;
  `}
`;

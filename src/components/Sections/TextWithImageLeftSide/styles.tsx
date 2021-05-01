import styled from 'styled-components';
import {
  above,
  gridContainer,
  mobileGridTemplateLayout,
} from '../../../StyledComponents/_mixins';

export const TextWithImageLeftSide = styled.section`
  ${gridContainer};
  ${mobileGridTemplateLayout};
  width: 100%;

  ${above.small`
    grid-template-columns: 
      [image] minmax(36%, 1fr)
      [spacer] 4%
      [text] minmax(60%, 1fr);

    grid-template-rows:
      [content-start] 1fr
      [content-end] 1rem;
  `}

  ${above.xlarge`
    grid-template-columns: 
      [image] minmax(34%, 1fr) 
      [spacer] 2% 
      [text] minmax(64%, 2fr);
  `}
`;

export const GridAreaImage = styled.div`
  grid-area: content-start / auto / content-start / auto;

  ${above.small`
    grid-area: content-start / image / content-end / image;
  `}
`;

export const GridAreaText = styled.div`
  grid-area: content-end / auto / content-end / auto;

  ${above.small`
    grid-area: content-start / text / content-end / text;
  `}
`;

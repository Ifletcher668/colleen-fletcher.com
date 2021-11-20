import styled from 'styled-components';
import { above, gridContainer } from '../../../styled-components/_mixins';
import { ComponentGeneralImageConfiguration } from '../../../typings/strapi';
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
type ImageAreaProps = Pick<
  ComponentGeneralImageConfiguration,
  'alignImage' | 'justifyImage'
>;
export const GridAreaImage = styled.div<ImageAreaProps>`
  grid-area: content-start / auto / content-start / auto; // reorder image to top on mobile

  align-self: ${props => {
    switch (props.alignImage) {
      case 'top':
        return 'start';

      case 'bottom':
        return 'end';

      case 'center':
        return 'center';

      default:
        return 'unset';
    }
  }};

  justify-self: ${props => {
    switch (props.justifyImage) {
      case 'right':
        return 'end';

      case 'center':
        return 'center';

      case 'left':
        return 'start';

      default:
        return 'unset';
    }
  }};
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

import styled from 'styled-components';
import { above, size } from '../../../styled-components/_mixins';

export const SiteFooter = styled.footer`
  display: grid;
  grid-template-columns:
    [full-start] 5%
    [footer-start] 90% [footer-end]
    5% [full-end];
  margin-bottom: 1rem;
  place-items: center;
  text-align: center;

  ${above.small`
    grid-template-columns:
    [full-start] minmax(
      ${size('margin', 'large')},
      ${size('margin', 'xxlarge')}
    )
    [footer-start] minmax(0, 60em) [footer-end] minmax(
      ${size('margin', 'large')},
      ${size('margin', 'xxlarge')}
    )
    [full-end];
  `}
`;

export const FooterContent = styled.div`
  grid-column: footer-start / footer-end;
`;

export const FooterNav = styled.nav`
  margin: 0 0 ${size('margin', 'small')} 0;
`;

export const FooterNavbar = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem 0;
  > * {
    margin: 0;
  }
`;

export const SiteDisclaimer = styled.span`
  svg {
    margin-bottom: 4px;
    margin-left: -6px;
  }
`;

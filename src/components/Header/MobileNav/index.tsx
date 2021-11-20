import React, { forwardRef, useContext } from 'react';
import { FaAlignJustify, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { font, size } from '../../../styled-components/_mixins';
import { Nav } from '../../Atoms';
import { MobileMenuToggleButton } from '../../Button';
import { Flexbox } from '../../Containers/';
import Heading from '../../Heading';
import { MobileMenuContext } from '../index';
import MenuItem from './MenuItem';
import { MenuItem as StrapiMenuItem } from '../../../typings/strapi';

interface Props extends DefaultProps {
  items: StrapiMenuItem[];
}

interface StyledProps {
  isMobileMenuOpen: boolean;
}

const MobileNav = styled(Nav)<StyledProps>`
  display: grid;
  grid-template-columns: [spacer] 0.5fr [content] 2fr [padding] 15px;
  background: var(--color-primary-blue);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  overflow: hidden;
`;

const MobileNavHeader = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  padding: 1rem;
`;

export const CloseButton = styled.button`
  font-size: ${font('size', 'xlarge')};
`;

const MobileNavLinks = styled.ul`
  display: flex;
  flex-flow: column nowrap;

  gap: ${size('margin', 'small')};
  grid-column: content;
  grid-row: links;
`;

// const MobileNavLink = styled.li`
//     padding-left: 5px;
//     svg {
//         color: var(--color-lilac);
//     }
//     &:hover {
//         box-shadow: -2px 0 0 0 var(--color-lilac);
//     }
// `;

const MobileMenu = forwardRef(
  ({ items }: Props, ref: React.ForwardedRef<any>) => {
    const { isMobileMenuOpen, toggleMobileMenu } =
      useContext(MobileMenuContext);

    return isMobileMenuOpen ? (
      // TODO: How to pass props to styled-components without actually adding the prop
      <MobileNav isMobileMenuOpen ref={ref}>
        <MobileNavHeader>
          <CloseButton type="button" onClick={() => toggleMobileMenu()}>
            <FaTimes />
          </CloseButton>
        </MobileNavHeader>

        <MobileNavLinks className="mobile-menu-links">
          {items.map((item, idx) => {
            return <MenuItem key={idx} {...item} />;
          })}
        </MobileNavLinks>
      </MobileNav>
    ) : (
      <Flexbox containerType="nav" vertical>
        <Heading level={1}>Colleen Fletcher</Heading>

        <MobileMenuToggleButton
          type="button"
          variant="secondary"
          className="toggle-menu"
          onClick={() => toggleMobileMenu()}
        >
          <FaAlignJustify />
        </MobileMenuToggleButton>
      </Flexbox>
    );
  },
);

export default MobileMenu;

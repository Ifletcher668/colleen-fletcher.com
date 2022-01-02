import React, { forwardRef, useContext } from 'react';
import styled from 'styled-components';
import { color, font, size, time } from '../../../../styled-components/_mixins';
import { MenuItem as StrapiMenuItem } from '../../../../typings/strapi';
import { Nav, Span } from '../../../Elements';
import { MobileMenuContext } from '../index';
import MenuItem from './MenuItem';

interface Props extends DefaultProps {
  items: StrapiMenuItem[];
}

export const MenuLabel = styled.button`
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  text-align: center;
`;

type ClickableProps = {
  isClicked: boolean;
};

export const Icon = styled.span<ClickableProps>`
  display: inline-block;
  background-color: ${({ isClicked }) => (isClicked ? 'transparent' : 'black')};
  width: 3rem;
  height: 2px;
  position: relative;
  transition: all ${time('fast')};

  &::before,
  &::after {
    content: '';
    background-color: ${({ isClicked }) =>
      isClicked ? color('background') : color('aterrima')};
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${({ isClicked }) => (isClicked ? '0' : '-0.8rem')};
    transform: ${({ isClicked }) =>
      isClicked ? 'rotate(135deg)' : 'rotate(0)'};
  }

  &::after {
    top: ${({ isClicked }) => (isClicked ? '0' : '0.8rem')};
    transform: ${({ isClicked }) =>
      isClicked ? 'rotate(-135deg)' : 'rotate(0)'};
  }
`;

export const OverlayMenu = styled(Nav)<ClickableProps>`
  display: grid;
  align-items: baseline;
  justify-content: left;
  overflow: auto;
  grid-template-columns: [spacer] 10% [content] 88% [padding] 2%;
  grid-template-rows: [close-button] 10% [menu-items] 90%;
  gap: 1rem;
  overflow-y: auto;

  background: ${color('primary-blue')};
  color: ${color('background')};
  padding: ${size('padding', 'medium')};

  position: fixed;
  top: 0;
  z-index: 999;
  left: 0;
  width: 100vw;
  height: 100vh;

  transition: ${time('medium')};
  opacity: ${({ isClicked }) => (isClicked ? 1 : 0)};
  transform: ${({ isClicked }) =>
    isClicked ? 'translateY(0%)' : 'translateY(100%)'};
`;

export const CloseButton = styled.button`
  font-size: ${font('size', 'xlarge')};
`;

const MobileNavLinks = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  padding: 0;
  gap: ${size('margin', 'small')};
  grid-column: content;
  grid-row: menu-items;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  padding: ${size('padding', 'small')} 0;
`;

const MobileMenu = forwardRef(
  ({ items }: Props, ref: React.ForwardedRef<any>) => {
    const { isMobileMenuOpen, toggleMobileMenu } =
      useContext(MobileMenuContext);

    return (
      <>
        <Wrapper>
          <Span size="normal">Colleen Fletcher</Span>

          <MenuLabel onClick={() => toggleMobileMenu()}>
            <Icon isClicked={isMobileMenuOpen} />
          </MenuLabel>
        </Wrapper>

        <OverlayMenu isClicked={isMobileMenuOpen} ref={ref}>
          <MenuLabel onClick={() => toggleMobileMenu()}>
            <Icon isClicked={isMobileMenuOpen} />
          </MenuLabel>

          <MobileNavLinks className="mobile-menu-links">
            {items.map((item, idx) => {
              return <MenuItem key={idx} {...item} />;
            })}
          </MobileNavLinks>
        </OverlayMenu>
      </>
    );
  },
);

export default MobileMenu;

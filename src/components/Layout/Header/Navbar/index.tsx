import React, { createContext } from 'react';
import { Nav } from '../../../Elements';
import navbarMachine from '../navbarMachine';
import { useMachine } from '@xstate/react';
// import SearchContainer from '../../SearchContainer';
import MenuItem from './MenuItem';
import { MenuItem as StrapiMenuItem } from '../../../../typings/strapi';

type NavCtx = {
  showPanel: (title: string) => void;
  hidePanel: () => void;
};

export const NavbarContext = createContext<NavCtx>({} as NavCtx);

type NavbarProps = DefaultProps & {
  items: StrapiMenuItem[];
};

const Navbar = ({ className, items }: NavbarProps): JSX.Element => {
  const [current, send] = useMachine(navbarMachine);

  const showPanel = (panelName: string): void => {
    send('SHOW', { panelName, isActive: true });
  };

  const hidePanel = (): void => {
    send('HIDE');
  };

  // TODO: add keyboard nav
  // const handleEscapeKey  =(event:KeyboardEvent) => {
  //   const isEscapeKeyPressed = event.keyCode === 27
  //   if (isEscapeKeyPressed) send('HIDE')
  // }

  const ctx: NavCtx = {
    showPanel,
    hidePanel,
  };

  return (
    <Nav
      className={
        className
          ? Array.isArray(className)
            ? className.join(' ')
            : className
          : ''
      }
    >
      <NavbarContext.Provider value={ctx}>
        <ul className="nav-list">
          {items.map((menuItem, idx) => (
            <MenuItem
              key={`${menuItem.text}-${idx}`}
              isActive={current.context.isActive}
              className={
                menuItem.text === current.context.panelName ? 'active' : ''
              }
              {...menuItem}
            />
          ))}
        </ul>
      </NavbarContext.Provider>
      {/* <SearchContainer /> */}
    </Nav>
  );
};

export default Navbar;

import React, { createContext, useState } from 'react';
import { useMenuItems } from '../../../graphql/queries/useMenuItems';
// import SearchContainer from '../../SearchContainer';
import MenuItem from './MenuItem';
import { Nav } from '../../Atoms';

type NavCtx = {
  isActivePanel: boolean;
  setIsActivePanel: React.Dispatch<React.SetStateAction<boolean>>;
  activePanelName: string;
  setActivePanelName: React.Dispatch<React.SetStateAction<string>>;
};

export const NavbarContext = createContext<NavCtx>({} as NavCtx);

const Navbar: React.FC<DefaultProps> = (props: DefaultProps) => {
  // TODO: Remove
  const { className } = props;

  const [isActivePanel, setIsActivePanel] = useState<boolean>(false);
  const [activePanelName, setActivePanelName] = useState<string>('');

  const ctx = {
    isActivePanel,
    setIsActivePanel,
    activePanelName,
    setActivePanelName,
  };

  const {
    strapi: { menuItems },
  } = useMenuItems();

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
          {menuItems.map((menuItem, idx) => {
            if (menuItem.content.length > 0) {
              // show active panel
              let cn = '';
              if (menuItem.text === activePanelName) {
                cn += 'active';
              }
              return <MenuItem key={idx} className={cn} {...menuItem} />;
            } else {
              // no data to show
              return <MenuItem key={idx} {...menuItem} />;
            }
          })}
        </ul>
      </NavbarContext.Provider>
      {/* <SearchContainer /> */}
    </Nav>
  );
};

export default Navbar;

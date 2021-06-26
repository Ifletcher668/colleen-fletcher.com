import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { useMenuItems } from '../../../graphql/queries/useMenuItems';
import { Nav } from '../../Atoms';
// import SearchContainer from '../../SearchContainer';
import MenuItem from './MenuItem';

type NavCtx = {
  isActivePanel: boolean;
  setIsActivePanel: Dispatch<SetStateAction<boolean>>;
  activePanelName: string;
  setActivePanelName: Dispatch<SetStateAction<string>>;
};

export const NavbarContext = createContext<NavCtx>({} as NavCtx);

const Navbar = (props: DefaultProps): JSX.Element => {
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
            return (
              <MenuItem
                key={idx}
                className={menuItem.text === activePanelName ? 'active' : ''}
                {...menuItem}
              />
            );
          })}
        </ul>
      </NavbarContext.Provider>
      {/* <SearchContainer /> */}
    </Nav>
  );
};

export default Navbar;

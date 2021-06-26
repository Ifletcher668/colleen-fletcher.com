import React, {
  createContext,
  createRef,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Navbar from './Navbar';
import BlueFrangipani from '../../assets/images/svg/wholistic-blue-frangipani.svg';
import MobileNav from './MobileNav';
import { useMenuItems } from '../../graphql/queries/useMenuItems';
import { useBreakpoints } from '../../utils/CustomHooks/useBreakpoints';

type Ctx = {
  toggleIsFullMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
};

export const MobileMenuContext = createContext<Ctx>({} as Ctx);

const Header: React.FC<DefaultProps> = ({ className }: DefaultProps) => {
  const [isFullMenu, toggleIsFullMenu] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const {
    strapi: { menuItems: strapiMenuItems },
  } = useMenuItems();

  const [innerWidth, setInnerWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );

  const {
    current: { small },
  } = useBreakpoints();

  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const changeMenuListener = useCallback(() => {
    innerWidth >= small ? toggleIsFullMenu(true) : toggleIsFullMenu(false);
  }, [innerWidth, small]);

  // verify which menu to use on first render
  useEffect(() => {
    changeMenuListener();
  }, [changeMenuListener]);

  // verify which menu to use on resize
  useEffect(() => {
    window.addEventListener('resize', changeMenuListener);
    return () => window.removeEventListener('resize', changeMenuListener);
  }, [changeMenuListener]);

  const target: RefObject<HTMLDivElement> = createRef();

  const navRef = useRef<HTMLUListElement>(null);

  const getClassNames = (): string => {
    let cn: string = '';

    if (!isFullMenu) cn += 'mobile ';

    if (className)
      Array.isArray(className)
        ? (cn += className.join(' '))
        : (cn += className);

    return cn;
  };

  return (
    <header role="header" className={getClassNames()} ref={target}>
      <BlueFrangipani width={100} height={100} />

      <MobileMenuContext.Provider
        value={{
          toggleIsFullMenu,
          isMobileMenuOpen,
          toggleMobileMenu,
        }}
      >
        {isFullMenu ? (
          <Navbar className="navbar" />
        ) : (
          <MobileNav ref={navRef} items={strapiMenuItems} />
        )}
      </MobileMenuContext.Provider>

      <BlueFrangipani width={100} height={100} />
    </header>
  );
};

export default Header;

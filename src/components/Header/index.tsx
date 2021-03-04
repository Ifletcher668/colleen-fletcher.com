import React, {
    createContext,
    createRef,
    RefObject,
    useEffect,
    useRef,
    useState,
} from 'react';
import gsap from 'gsap';
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

    const {
        strapi: { menuItems },
    } = useMenuItems();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const [innerWidth, setInnerWidth] = useState(
        typeof window !== `undefined` ? window.innerWidth : 0,
    );
    const {
        current: { small },
    } = useBreakpoints();

    const changeMenuListener = () => {
        innerWidth >= small ? toggleIsFullMenu(true) : toggleIsFullMenu(false);
    };

    // verify which menu to use on first render
    useEffect(() => {
        changeMenuListener();
    }, [small]); // initially returns 0 until theme vars are calculated

    useEffect(() => {
        window.addEventListener('resize', changeMenuListener);
        return () => window.removeEventListener('resize', changeMenuListener);
    }, [innerWidth]);

    useEffect(() => {
        const handleResize = () => setInnerWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const target: RefObject<HTMLDivElement> = createRef();

    const navRef = useRef<HTMLUListElement>(null);
    const strapiMenuItems = useRef(
        menuItems.map(item => {
            return { ...item, ref: createRef() };
        }),
    );
    // creates a single timeline that never gets recreated
    // until the component dismounts
    const timeline = useRef(
        gsap.timeline({
            paused: true,
            defaults: { duration: 1, ease: 'expo.out' },
        }),
    );

    useEffect(() => {
        if (navRef.current) {
            const menuItemsRefs = strapiMenuItems.current.map(
                item => item.ref.current,
            );

            timeline.current
                .fromTo(navRef.current, { opacity: 0 }, { opacity: 1 })
                .fromTo(
                    menuItemsRefs,
                    { autoAlpha: 0, y: 48 },
                    { autoAlpha: 1, y: 0, stagger: 0.1 },
                    '-=0.4',
                )
                .reverse();
        }
    }, [isMobileMenuOpen]);

    useEffect(() => {
        timeline.current.reversed(!isMobileMenuOpen);
    }, [isMobileMenuOpen]);

    return (
        <header
            role="header"
            className={
                className
                    ? Array.isArray(className)
                        ? className.join(' ')
                        : className
                    : ''
            }
            ref={target}
        >
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
                    <MobileNav ref={navRef} items={strapiMenuItems.current} />
                )}
            </MobileMenuContext.Provider>
            <BlueFrangipani width={100} height={100} />
        </header>
    );
};

export default Header;

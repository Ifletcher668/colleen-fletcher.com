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
import MobileMenu from './MobileNav';
import { useMenuItems } from '../../graphql/queries/useMenuItems';

type Ctx = {
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
};

export const MobileMenuContext = createContext<Ctx | { [key: string]: any }>(
    {},
);

const Header: React.FC<DefaultProps> = ({ className }: DefaultProps) => {
    const target: RefObject<HTMLDivElement> = createRef();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navRef = useRef();
    const {
        strapi: { menuItems },
    } = useMenuItems();

    const [strapiMenuItems] = useState(
        menuItems.map(item => {
            return { ...item, ref: createRef() };
        }),
    );

    const [timeline] = useState(
        gsap.timeline({
            paused: true,
            defaults: { duration: 1, ease: 'expo.out' },
        }),
    );

    // useEffect(() => {
    //     if (navRef.current) {
    //         const menuItemsRefs = strapiMenuItems.map(item => item.ref.current);
    //         timeline
    //             .fromTo(navRef.current, {opacity: 0}, {opacity: 1})
    //             .fromTo(
    //                 menuItemsRefs,
    //                 {autoAlpha: 0, y: 48},
    //                 {autoAlpha: 1, y: 0, stagger: 0.1},
    //             )
    //             .reverse();
    //     }
    // }, []);

    useEffect(() => {
        timeline.reversed(!isMobileMenuOpen);
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
                    isMobileMenuOpen,
                    toggleMobileMenu,
                }}
            >
                <Navbar className="navbar" />
                <MobileMenu ref={navRef} items={strapiMenuItems} />
            </MobileMenuContext.Provider>
            <BlueFrangipani width={100} height={100} />
        </header>
    );
};

export default Header;

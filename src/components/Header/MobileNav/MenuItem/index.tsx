import React, { Fragment, useContext, useState } from 'react';
import PaintDripLink from '../../../PaintDripLink';
import ChevronDown from '../../../../assets/images/svg/chevron-down.svg';
import ChevronUp from '../../../../assets/images/svg/chevron-up.svg';
import styled from 'styled-components';
import Heading from '../../../Heading';
import Services from '../../Navbar/Panel/SubMenu/services';
import BlogPosts from '../../Navbar/Panel/SubMenu/blog-posts';
import { MobileMenuContext } from '../..';

// props matches type StrapiMenuItem
interface Props extends DefaultProps, StrapiMenuItem {}

// data, className: Props
const MenuItem: React.FC<Props> = ({
    text,
    is_external_link,
    slug,
    content,
    className,
}: Props) => {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [blog, setBlog] = useState('');
    const [offering, setOffering] = useState<{
        title: string;
        url: string;
    }>({ title: '', url: '' });
    const [showBlogPosts, setShowBlogPosts] = useState<boolean>(false);
    const [showServices, setShowServices] = useState<boolean>(false);
    const { isMobileMenuOpen, toggleMobileMenu } = useContext(
        MobileMenuContext,
    );

    const cn = `nav-list-item ${
        className
            ? Array.isArray(className)
                ? className.join(' ')
                : className
            : ''
    }`;

    const handleSubMenuBehavior = (
        content: StrapiDynamicZone[],
    ): JSX.Element => {
        return (
            <ul>
                {content.map((item, idx) => {
                    switch (item.__typename) {
                        case 'STRAPI_ComponentCollectionsBlogs':
                            return (
                                <Fragment key={idx}>
                                    {item.blogs.map((blog, idx) => {
                                        return (
                                            <Fragment key={idx}>
                                                <li>
                                                    {' '}
                                                    <PaintDripLink
                                                        onClick={() =>
                                                            toggleMobileMenu(
                                                                !isMobileMenuOpen,
                                                            )
                                                        }
                                                        onKeyPress={() =>
                                                            toggleMobileMenu(
                                                                !isMobileMenuOpen,
                                                            )
                                                        }
                                                        to={blog.fullUrlPath}
                                                    >
                                                        {' '}
                                                        <Heading level={6}>
                                                            {blog.name}
                                                        </Heading>
                                                    </PaintDripLink>
                                                </li>
                                                <ChevronDown
                                                    onClick={() => {
                                                        setBlog(blog.name);
                                                        setShowBlogPosts(
                                                            !showBlogPosts,
                                                        );
                                                    }}
                                                    onKeyPress={() => {
                                                        setBlog(blog.name);
                                                        setShowBlogPosts(
                                                            !showBlogPosts,
                                                        );
                                                    }}
                                                />
                                            </Fragment>
                                        );
                                    })}
                                </Fragment>
                            );
                        case 'STRAPI_ComponentCollectionsOfferings':
                            return (
                                <Fragment key={idx}>
                                    {item.offerings.map((offering, idx) => {
                                        return (
                                            <>
                                                <li key={idx}>
                                                    {' '}
                                                    <PaintDripLink
                                                        onClick={() =>
                                                            toggleMobileMenu(
                                                                !isMobileMenuOpen,
                                                            )
                                                        }
                                                        onKeyPress={() =>
                                                            toggleMobileMenu(
                                                                !isMobileMenuOpen,
                                                            )
                                                        }
                                                        to={
                                                            offering.fullUrlPath
                                                        }
                                                    >
                                                        {' '}
                                                        <Heading level={6}>
                                                            {offering.title}
                                                        </Heading>
                                                    </PaintDripLink>
                                                </li>
                                                <ChevronDown
                                                    onClick={() => {
                                                        setShowServices(
                                                            !showServices,
                                                        );
                                                        setOffering({
                                                            title:
                                                                offering.title,
                                                            url:
                                                                offering.fullUrlPath,
                                                        });
                                                    }}
                                                    onKeyPress={() => {
                                                        setShowServices(
                                                            !showServices,
                                                        );
                                                        setOffering({
                                                            title:
                                                                offering.title,
                                                            url:
                                                                offering.fullUrlPath,
                                                        });
                                                    }}
                                                />
                                            </>
                                        );
                                    })}
                                </Fragment>
                            );
                        default:
                            return <></>;
                    }
                })}
            </ul>
        );
    };

    return (
        <>
            {/* an external link makes page.id === null */}
            {is_external_link ? (
                <li className={cn}>
                    <a
                        href={`${
                            slug.match(`^(http|https)://`)
                                ? slug
                                : `https://${slug}`
                        }`}
                    >
                        {text}
                    </a>
                </li>
            ) : (
                <>
                    <SubMenuWrapper>
                        <li className={cn}>
                            <PaintDripLink
                                onClick={() =>
                                    toggleMobileMenu(!isMobileMenuOpen)
                                }
                                onKeyPress={() =>
                                    toggleMobileMenu(!isMobileMenuOpen)
                                }
                                to={`/${
                                    // TODO: hardcoding homepage
                                    slug.toLocaleLowerCase() === 'home'
                                        ? ''
                                        : slug
                                }`}
                            >
                                {text}{' '}
                            </PaintDripLink>
                        </li>
                        {content.length > 0 && (
                            <ChevronDown
                                onClick={() => setShowSubMenu(!showSubMenu)}
                            />
                        )}
                    </SubMenuWrapper>
                    {showSubMenu && handleSubMenuBehavior(content)}
                    {(showServices || showBlogPosts) && (
                        <ul>
                            {showServices && <Services offering={offering} />}
                            {showBlogPosts && <BlogPosts blog={blog} />}
                        </ul>
                    )}
                </>
            )}
        </>
    );
};

export default MenuItem;

const SubMenuWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0 0.5em;
`;

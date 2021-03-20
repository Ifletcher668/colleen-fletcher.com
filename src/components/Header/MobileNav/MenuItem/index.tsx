import React, { forwardRef, Fragment, useContext, useState } from 'react';
import ChevronDown from '../../../../assets/images/svg/chevron-down.svg';
// import ChevronUp from '../../../../assets/images/svg/chevron-up.svg';
import { Link } from '../../../Atoms';
import Heading from '../../../Heading';
import Services from '../../Collections/services';
import BlogPosts from '../../Collections/blog-posts';
import { MobileMenuContext } from '../..';
import { Flexbox } from '../../../Containers';

interface Props extends DefaultProps, StrapiMenuItem {
    ref: React.ForwardedRef<any>;
}
type Offering = {
    title: string;
    url: string;
};

// data, className: Props
const MenuItem: React.FC<Props> = forwardRef(
    ({ text, is_external_link, slug, content, className }: Props, ref) => {
        const [showSubMenu, setShowSubMenu] = useState(false);
        const [blog, setBlog] = useState('');
        const [offering, setOffering] = useState<Offering>({} as Offering);
        const [showBlogPosts, setShowBlogPosts] = useState<boolean>(false);
        const [showServices, setShowServices] = useState<boolean>(false);

        const { toggleMobileMenu } = useContext(MobileMenuContext);

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
                <>
                    {content.map((item, idx) => {
                        switch (item.__typename) {
                            case 'STRAPI_ComponentCollectionsBlogs':
                                return (
                                    <Fragment key={idx}>
                                        {item.blogs.map((blog, idx) => {
                                            return (
                                                <Flexbox
                                                    key={idx}
                                                    containerType="li"
                                                >
                                                    {' '}
                                                    <Link
                                                        onClick={() =>
                                                            toggleMobileMenu()
                                                        }
                                                        onKeyPress={() =>
                                                            toggleMobileMenu()
                                                        }
                                                        to={blog.fullUrlPath}
                                                    >
                                                        {' '}
                                                        <Heading level={6}>
                                                            {blog.name}
                                                        </Heading>
                                                    </Link>
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
                                                </Flexbox>
                                            );
                                        })}
                                    </Fragment>
                                );
                            case 'STRAPI_ComponentCollectionsOfferings':
                                return (
                                    <Fragment key={idx}>
                                        {item.offerings.map((offering, idx) => {
                                            return (
                                                <Flexbox
                                                    containerType="li"
                                                    key={idx}
                                                >
                                                    {' '}
                                                    <Link
                                                        onClick={() =>
                                                            toggleMobileMenu()
                                                        }
                                                        onKeyPress={() =>
                                                            toggleMobileMenu()
                                                        }
                                                        to={
                                                            offering.fullUrlPath
                                                        }
                                                    >
                                                        {' '}
                                                        <Heading level={6}>
                                                            {offering.title}
                                                        </Heading>
                                                    </Link>
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
                                                </Flexbox>
                                            );
                                        })}
                                    </Fragment>
                                );
                            default:
                                return <></>;
                        }
                    })}
                </>
            );
        };

        return (
            <>
                {/* an external link makes page.id === null */}
                {is_external_link ? (
                    <li className={cn} ref={ref}>
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
                    <Flexbox ref={ref}>
                        <Flexbox flex="1 1 20%">
                            <li className={cn}>
                                <Link
                                    onClick={() => toggleMobileMenu()}
                                    onKeyPress={() => toggleMobileMenu()}
                                    to={`/${
                                        // TODO: hardcoding homepage
                                        slug.toLocaleLowerCase() === 'home'
                                            ? ''
                                            : slug
                                    }`}
                                >
                                    {text}{' '}
                                </Link>
                            </li>
                            {content.length > 0 && (
                                <ChevronDown
                                    onClick={() => setShowSubMenu(!showSubMenu)}
                                />
                            )}
                        </Flexbox>
                        <Flexbox flex="2 0 80%">
                            <Flexbox containerType="ul">
                                <Flexbox vertical>
                                    {showSubMenu &&
                                        handleSubMenuBehavior(content)}
                                </Flexbox>

                                <Flexbox>
                                    {(showServices || showBlogPosts) && (
                                        <Flexbox containerType="ul" vertical>
                                            {showServices && (
                                                <Services offering={offering} />
                                            )}
                                            {showBlogPosts && (
                                                <BlogPosts blog={blog} />
                                            )}
                                        </Flexbox>
                                    )}
                                </Flexbox>
                            </Flexbox>
                        </Flexbox>
                    </Flexbox>
                )}
            </>
        );
    },
);

export default MenuItem;

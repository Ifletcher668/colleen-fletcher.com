import React, {useContext, useState} from 'react';
import Image from 'gatsby-image';
import {useImage} from '../../../../graphql/queries/useImage';
import {NavbarContext} from '../index';
import Services from './SubMenu/services';
import BlogPosts from './SubMenu/blog-posts';
import PaintDripLink from '../../../TransitionLink';

interface Props extends DefaultProps {
    content: StrapiDynamicZone[];
}

const Panel: React.FC<Props> = ({content, className}: Props) => {
    const {frangipaniImg} = useImage();
    const [activeSubMenuItemName, setActiveSubMenuItemName] = useState('');
    const [blog, setBlog] = useState('');
    const [offering, setOffering] = useState<{
        title: string;
        url: string;
    }>({title: '', url: ''});
    const [showBlogPosts, setShowBlogPosts] = useState<boolean>(false);
    const [showServices, setShowServices] = useState<boolean>(false);
    const {setIsActivePanel, setActivePanelName} = useContext(NavbarContext);

    const handleOpenOrClosePanel = (title: string, isActive: boolean) => {
        setActivePanelName(title), setIsActivePanel(isActive);
    };

    const handleSubMenuContent = () => {
        return content.map((content, idx) => {
            switch (content.__typename) {
                case 'STRAPI_ComponentCollectionsBlogs':
                    // prevents infinite re-render
                    return content.blogs.map(blog => {
                        let cn = '';
                        if (blog.name === activeSubMenuItemName) {
                            cn += 'active';
                        }
                        return (
                            <li key={blog.name} className={cn}>
                                <PaintDripLink
                                    to={blog.fullUrlPath}
                                    onMouseOver={() => {
                                        if (
                                            content.show_blog_posts &&
                                            showBlogPosts === false
                                        )
                                            setShowBlogPosts(true);

                                        setActiveSubMenuItemName(blog.name);
                                        setBlog(blog.name);
                                    }}
                                >
                                    {blog.name}
                                </PaintDripLink>
                            </li>
                        );
                    });

                case 'STRAPI_ComponentCollectionsOfferings':
                    return content.offerings.map(offering => {
                        let cn = '';
                        if (offering.title === activeSubMenuItemName) {
                            cn += 'active';
                        }
                        return (
                            <li key={offering.title} className={cn}>
                                <PaintDripLink
                                    to={offering.fullUrlPath}
                                    onMouseOver={() => {
                                        if (
                                            content.show_services &&
                                            showServices === false
                                        )
                                            setShowServices(true);

                                        setActiveSubMenuItemName(
                                            offering.title,
                                        );
                                        setOffering({
                                            title: offering.title,
                                            url: offering.fullUrlPath,
                                        });
                                    }}
                                >
                                    {offering.title}
                                </PaintDripLink>
                            </li>
                        );
                    });
                default:
                    break;
            }
        });
    };
    return (
        <nav
            className={
                className
                    ? Array.isArray(className)
                        ? className.join(' ')
                        : className
                    : ''
            }
            onMouseLeave={() => handleOpenOrClosePanel('', false)}
        >
            <ul className="submenu">{handleSubMenuContent()}</ul>
            <section className="content">
                {!showServices && !showBlogPosts && (
                    <Image
                        fluid={frangipaniImg.childImageSharp.fluid}
                        style={{width: '200px', height: '200px'}}
                    />
                )}
                <ul>
                    {showServices && <Services offering={offering} />}
                    {showBlogPosts && <BlogPosts blog={blog} />}
                </ul>
            </section>
        </nav>
    );
};

export default Panel;

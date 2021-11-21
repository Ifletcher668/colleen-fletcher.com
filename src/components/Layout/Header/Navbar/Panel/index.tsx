import React, { useContext, useState } from 'react';
import { Grid } from '../../../../Containers/index';
import { NavbarContext } from '../index';
import Services from '../../Collections/services';
import BlogPosts from '../../Collections/blog-posts';
import { Link } from '../../../../Elements';
import BlueInfinitySymbol from '../../../../../assets/images/svg/colleens-blue-infinity.svg';
import { DynamicZone } from '../../../../../typings/strapi';

interface Props extends DefaultProps {
  content: Array<DynamicZone>;
}

const Panel = ({ content, className }: Props): JSX.Element => {
  const [activeSubMenuItemName, setActiveSubMenuItemName] = useState('');
  const [blog, setBlog] = useState('');
  const [offering, setOffering] = useState<{
    title: string;
    url: string;
  }>({ title: '', url: '' });
  const [showBlogPosts, setShowBlogPosts] = useState<boolean>(false);
  const [showServices, setShowServices] = useState<boolean>(false);

  const { hidePanel } = useContext(NavbarContext);

  const handleHidePanel = (): void => hidePanel();

  const handleSubMenuContent = (): JSX.Element => (
    <>
      {content.map((content, idx) => {
        switch (content.__typename) {
          case 'STRAPI_ComponentCollectionsBlogs':
            return content.blogs.map(blog => {
              let cn = '';
              if (blog.name === activeSubMenuItemName) {
                cn += 'active';
              }
              return (
                <li key={`${idx}${blog.name}`} className={cn}>
                  <Link
                    to={blog.fullUrlPath}
                    onMouseOver={() => {
                      if (content.show_blog_posts && showBlogPosts === false)
                        setShowBlogPosts(true);

                      setActiveSubMenuItemName(blog.name);
                      setBlog(blog.name);
                    }}
                  >
                    {blog.name}
                  </Link>
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
                <li key={`${idx}${offering.title}`} className={cn}>
                  <Link
                    to={offering.fullUrlPath}
                    onMouseOver={() => {
                      if (content.show_services && showServices === false)
                        setShowServices(true);

                      setActiveSubMenuItemName(offering.title);
                      setOffering({
                        title: offering.title,
                        url: offering.fullUrlPath,
                      });
                    }}
                  >
                    {offering.title}
                  </Link>
                </li>
              );
            });
          default:
            return <></>;
        }
      })}
    </>
  );
  return (
    <nav
      className={
        className
          ? Array.isArray(className)
            ? className.join(' ')
            : className
          : ''
      }
      onMouseLeave={handleHidePanel}
    >
      <ul className="submenu">{handleSubMenuContent()}</ul>

      <Grid className="content" containerType="section">
        {!showServices && !showBlogPosts && (
          <BlueInfinitySymbol width={200} height={200} />
        )}
        {(showServices || showBlogPosts) && (
          <ul>
            {showServices && <Services offering={offering} />}
            {showBlogPosts && <BlogPosts blog={blog} />}
          </ul>
        )}
      </Grid>
    </nav>
  );
};

export default Panel;

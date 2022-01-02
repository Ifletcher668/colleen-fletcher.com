import React, { Fragment, useContext, useState } from 'react';
import { MobileMenuContext } from '../..';
import {
  DynamicZone,
  MenuItem as StrapiMenuItem,
} from '../../../../../typings/strapi';
import ChevronDown from '../../../../../assets/images/svg/chevron-down.svg';
import { Flexbox } from '../../../../Containers';
import { Link, Span } from '../../../../Elements';
import BlogPosts from '../../Collections/blog-posts';
import Services from '../../Collections/services';
import styled from 'styled-components';
import { font } from '../../../../../styled-components/_mixins';

type ChevronProps = {
  isClicked: boolean;
};

const Chevron = styled(ChevronDown)<ChevronProps>`
  width: ${font('size', 'medium')};
  margin-left: 0.5rem;
  align-self: start;
`;

const NavListItem = styled.li`
  font-size: ${font('size', 'large')};
`;

const SubmenuNav = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  padding-left: 0.5rem;
`;

type Props = Pick<DefaultProps, 'className'> & Omit<StrapiMenuItem, 'page'>;

type Offering = {
  title: string;
  url: string;
};

// data, className: Props
const MenuItem = ({
  text,
  is_external_link,
  slug,
  content,
  className,
}: Props): JSX.Element => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [clickedBlogName, setClickedBlogName] = useState('');
  const [clickedOffering, setClickedOffering] = useState<Offering>(
    {} as Offering,
  );
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

  const hasSubmenuContentToShow = content.length > 0;

  const mapBlogs = (blogs: Array<Strapi.Blog>): JSX.Element => (
    <Fragment>
      {blogs.map((blog, idx) => {
        return (
          <Flexbox key={idx} containerType="li" vertical>
            <Flexbox between middle>
              <Link
                onClick={() => toggleMobileMenu()}
                onKeyPress={() => toggleMobileMenu()}
                color="coffee"
                to={blog.fullUrlPath}
              >
                {' '}
                <Span size="small">{blog.name}</Span>
              </Link>

              <Chevron
                isClicked={showSubMenu}
                onClick={() => {
                  setClickedBlogName(blog.name);
                  setShowBlogPosts(!showBlogPosts);
                }}
                onKeyPress={() => {
                  setClickedBlogName(blog.name);
                  setShowBlogPosts(!showBlogPosts);
                }}
              />
            </Flexbox>

            {showBlogPosts && blog.name === clickedBlogName && (
              <Flexbox
                containerType="ul"
                vertical
                styling={{ fontSize: '1rem' }}
              >
                <BlogPosts blog={clickedBlogName} />
              </Flexbox>
            )}
          </Flexbox>
        );
      })}
    </Fragment>
  );

  const mapOfferings = (offerings: Array<Strapi.Offering>): JSX.Element => (
    <Fragment>
      {offerings.map((offering, idx) => {
        return (
          <Flexbox key={idx} containerType="li" vertical>
            <Flexbox between middle>
              <Link
                onClick={() => toggleMobileMenu()}
                onKeyPress={() => toggleMobileMenu()}
                color="coffee"
                to={offering.fullUrlPath}
              >
                <Span size="small">{offering.title}</Span>
              </Link>
              <Chevron
                onClick={() => {
                  setShowServices(!showServices);
                  setClickedOffering({
                    title: offering.title,
                    url: offering.fullUrlPath,
                  });
                }}
                onKeyPress={() => {
                  setShowServices(!showServices);
                  setClickedOffering({
                    title: offering.title,
                    url: offering.fullUrlPath,
                  });
                }}
              />
            </Flexbox>

            {showServices && offering.title === clickedOffering.title && (
              <Flexbox
                containerType="ul"
                vertical
                styling={{ fontSize: '1rem' }}
              >
                <Services offering={clickedOffering} />
              </Flexbox>
            )}
          </Flexbox>
        );
      })}
    </Fragment>
  );

  const renderSubmenuContent = (content: Array<DynamicZone>): JSX.Element => (
    <>
      {content.map(({ __typename, blogs, offerings }, idx) => {
        switch (__typename) {
          case 'STRAPI_ComponentCollectionsBlogs':
            return <Fragment key={idx}>{mapBlogs(blogs)}</Fragment>;
          case 'STRAPI_ComponentCollectionsOfferings':
            return <Fragment key={idx}>{mapOfferings(offerings)}</Fragment>;
          default:
            return <></>;
        }
      })}
    </>
  );

  return (
    <>
      {/* an external link makes page.id === null */}
      <NavListItem className={cn}>
        {is_external_link ? (
          <Link
            color="coffee"
            href={`${
              slug.match('^(http|https)://') ? slug : `https://${slug}`
            }`}
          >
            {text}
          </Link>
        ) : (
          <Fragment>
            <Link
              onClick={() => toggleMobileMenu()}
              onKeyPress={() => toggleMobileMenu()}
              color="coffee"
              to={`/${
                // TODO: hardcoding homepage
                slug.toLocaleLowerCase() === 'home' ? '' : slug
              }`}
            >
              {text}
            </Link>

            {hasSubmenuContentToShow && (
              <Chevron onClick={() => setShowSubMenu(!showSubMenu)} />
            )}

            {hasSubmenuContentToShow && showSubMenu && (
              <SubmenuNav>{renderSubmenuContent(content)}</SubmenuNav>
            )}
          </Fragment>
        )}
      </NavListItem>
    </>
  );
};

export default MenuItem;

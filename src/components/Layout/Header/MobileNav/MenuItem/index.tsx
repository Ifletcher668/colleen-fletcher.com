import React, { Fragment, useContext, useState } from 'react';
import { MobileMenuContext } from '../..';
import {
  DynamicZone,
  MenuItem as StrapiMenuItem,
} from '../../../../../typings/strapi';
import ChevronDown from '../../../../../assets/images/svg/chevron-down.svg';
import { Flexbox } from '../../../../Containers';
import { Link } from '../../../../Elements';
import { Heading } from '../../../../Text/Heading';
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
  /* transform: ${({ isClicked }) =>
    isClicked ? 'rotate(180deg)' : 'unset'}; */
`;

const NavListItem = styled.li`
  font-size: ${font('size', 'xlarge')};
`;

const SubmenuNav = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  margin-top: 1rem;
  margin-left: 1rem;
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
            <Flexbox between>
              <Link
                onClick={() => toggleMobileMenu()}
                onKeyPress={() => toggleMobileMenu()}
                to={blog.fullUrlPath}
              >
                {' '}
                <Heading level="six">{blog.name}</Heading>
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
              <SubmenuNav>
                <BlogPosts blog={clickedBlogName} />
              </SubmenuNav>
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
          <Flexbox containerType="li" key={idx} vertical>
            <Flexbox between>
              <Link
                onClick={() => toggleMobileMenu()}
                onKeyPress={() => toggleMobileMenu()}
                to={offering.fullUrlPath}
              >
                {' '}
                <Heading level="six">{offering.title}</Heading>
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
              <Flexbox containerType="ul" vertical center middle>
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
          <a
            href={`${
              slug.match('^(http|https)://') ? slug : `https://${slug}`
            }`}
          >
            {text}
          </a>
        ) : (
          <Fragment>
            <Link
              onClick={() => toggleMobileMenu()}
              onKeyPress={() => toggleMobileMenu()}
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

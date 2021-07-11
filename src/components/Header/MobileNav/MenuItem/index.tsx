import React, { Fragment, useContext, useState } from 'react';
import ChevronDown from '../../../../assets/images/svg/chevron-down.svg';
// import ChevronUp from '../../../../assets/images/svg/chevron-up.svg';
import { Link } from '../../../Atoms';
import Heading from '../../../Heading';
import Services from '../../Collections/services';
import BlogPosts from '../../Collections/blog-posts';
import { MobileMenuContext } from '../..';
import { Flexbox } from '../../../Containers';
import {
  DynamicZone,
  MenuItem as StrapiMenuItem,
} from '../../../../typings/strapi';

type Props = Pick<DefaultProps, 'className'> & Omit<StrapiMenuItem, 'page'>;

type Offering = {
  title: string;
  url: string;
};

// data, className: Props
const MenuItem: React.FC<Props> = ({
  text,
  is_external_link,
  slug,
  content,
  className,
}: Props) => {
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

  const hasSubmenuContentToShow = () => (content.length > 0 ? true : false);

  const handleSubMenuBehavior = (content: Array<DynamicZone>): JSX.Element => {
    return (
      <>
        {content.map((item, idx) => {
          switch (item.__typename) {
            case 'STRAPI_ComponentCollectionsBlogs':
              return (
                <Fragment key={idx}>
                  {item.blogs.map((blog, idx) => {
                    return (
                      <Flexbox key={idx} containerType="li" vertical>
                        <Flexbox>
                          <Link
                            onClick={() => toggleMobileMenu()}
                            onKeyPress={() => toggleMobileMenu()}
                            to={blog.fullUrlPath}
                          >
                            {' '}
                            <Heading level={6}>{blog.name}</Heading>
                          </Link>
                          <ChevronDown
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
                          <Flexbox containerType="ul" vertical>
                            <BlogPosts blog={clickedBlogName} />
                          </Flexbox>
                        )}
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
                      <Flexbox containerType="li" key={idx}>
                        {' '}
                        <Link
                          onClick={() => toggleMobileMenu()}
                          onKeyPress={() => toggleMobileMenu()}
                          to={offering.fullUrlPath}
                        >
                          {' '}
                          <Heading level={6}>{offering.title}</Heading>
                        </Link>
                        <ChevronDown
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
                        {showServices &&
                          offering.title === clickedOffering.title && (
                            <Flexbox containerType="ul" vertical>
                              <Services offering={clickedOffering} />
                            </Flexbox>
                          )}
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
        <li className={cn}>
          <a
            href={`${
              slug.match('^(http|https)://') ? slug : `https://${slug}`
            }`}
          >
            {text}
          </a>
        </li>
      ) : (
        <Flexbox>
          <Flexbox flex="1 1 20%">
            <li className={cn}>
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
            </li>

            {hasSubmenuContentToShow() && (
              <ChevronDown onClick={() => setShowSubMenu(!showSubMenu)} />
            )}
          </Flexbox>

          {hasSubmenuContentToShow() && showSubMenu && (
            <Flexbox flex="2 0 80%">
              <Flexbox containerType="ul" vertical>
                <Flexbox vertical className="test">
                  {handleSubMenuBehavior(content)}
                </Flexbox>
              </Flexbox>
            </Flexbox>
          )}
        </Flexbox>
      )}
    </>
  );
};

export default MenuItem;

import React, { useContext } from 'react';
import { NavbarContext } from '../index';
import Panel from '../Panel';
import { Anchor, Link } from '../../../../Elements';
import { MenuItem as StrapiMenuItem } from '../../../../../typings/strapi';

interface Props extends DefaultProps, StrapiMenuItem {
  isActive: boolean;
}

const MenuItem = ({
  text,
  is_external_link,
  slug,
  content,
  isActive,
  className,
}: Props): JSX.Element => {
  const { showPanel, hidePanel } = useContext(NavbarContext);

  const handleShowPanel = (): void => showPanel(text);
  const handleHidePanel = (): void => hidePanel();

  const cn = `nav-list-item ${
    className
      ? Array.isArray(className)
        ? className.join(' ')
        : className
      : ''
  }`;

  return (
    <>
      {/* an external link makes page.id === null */}
      {is_external_link ? (
        <li className={cn} onMouseOver={handleHidePanel}>
          <Anchor
            href={`${
              // Ensures an external link for Gatsby to not think it's local
              slug.match('^(http|https)://') ? slug : `https://${slug}`
            }`}
          >
            {text}
          </Anchor>
        </li>
      ) : (
        <li
          className={cn}
          onMouseOver={handleShowPanel}
          // clear on navigation
          onClick={handleHidePanel}
        >
          <Link
            to={`/${
              // TODO: hardcoding homepage
              slug.toLocaleLowerCase() === 'home' ? '' : slug
            }`}
          >
            {text}
          </Link>

          {content.length > 0 && isActive && (
            <Panel className="panel-navbar" content={content} />
          )}
        </li>
      )}
    </>
  );
};

export default MenuItem;

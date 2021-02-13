import React, { useContext } from 'react';
import { NavbarContext } from '../index';
import Panel from '../Panel';
import PaintDripLink from '../../../PaintDripLink';
import { Anchor } from '../../../Atoms';

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
    const {
        isActivePanel,
        setIsActivePanel,
        activePanelName,
        setActivePanelName,
    } = useContext(NavbarContext);

    const cn = `nav-list-item ${
        className
            ? Array.isArray(className)
                ? className.join(' ')
                : className
            : ''
    }`;

    const handleOpenOrClosePanel = (title: string, isActive: boolean) => {
        setActivePanelName(title);
        setIsActivePanel(isActive);
    };

    return (
        <>
            {/* an external link makes page.id === null */}
            {is_external_link ? (
                <li
                    className={cn}
                    onMouseOver={() => {
                        handleOpenOrClosePanel('', false);
                    }}
                >
                    <Anchor
                        href={`${
                            slug.match(`^(http|https)://`)
                                ? slug
                                : `https://${slug}`
                        }`}
                    >
                        {text}
                    </Anchor>
                </li>
            ) : (
                <li
                    className={cn}
                    onMouseOver={() => {
                        handleOpenOrClosePanel(text, true);
                    }}
                    // clear on navigation
                    onClick={() => {
                        handleOpenOrClosePanel('', false);
                    }}
                >
                    <PaintDripLink
                        to={`/${
                            // TODO: hardcoding homepage
                            slug.toLocaleLowerCase() === 'home' ? '' : slug
                        }`}
                    >
                        {text}
                    </PaintDripLink>
                    {content.length > 0 &&
                        isActivePanel &&
                        activePanelName === text && (
                            <Panel className="panel-navbar" content={content} />
                        )}
                </li>
            )}
        </>
    );
};

export default MenuItem;

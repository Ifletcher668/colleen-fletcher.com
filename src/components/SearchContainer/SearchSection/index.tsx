import React, { useState } from 'react';
import styled from 'styled-components';

interface Props extends Pick<DefaultProps, 'children'> {
    hideElement: boolean;
}

const SearchSection: React.FC<Props> = ({
    hideElement,
    children,
}: Props): JSX.Element => {
    const [isHidden, hide] = useState(true);

    if (hideElement && isHidden) {
        hide(false);
    } else if (!hideElement && !isHidden) {
        hide(true);
    }

    // return a styled list item with a hide/show prop
    return (
        <StyledListItem hide={isHidden ? true : false}>
            {children}
        </StyledListItem>
    );
};

export default SearchSection;

interface StyleProps {
    hide: boolean;
}
const StyledListItem = styled.li<StyleProps>`
    display: ${props => (props.hide ? 'none' : 'block')};
`;

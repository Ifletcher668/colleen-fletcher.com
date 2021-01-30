import React, {useState} from 'react';
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
        <StyledListItem className={`${isHidden ? 'hide' : 'show'}`}>
            {children}
        </StyledListItem>
    );
};

export default SearchSection;

const StyledListItem = styled.li`
    &.hide {
        display: none;
    }
    &.show {
        display: block;
    }
`;

import React from 'react';
import styled from 'styled-components';

interface Props extends Pick<DefaultProps, 'children'> {
  hideElement: boolean;
}

const ListItem = styled.li``;

const SearchSection = ({ hideElement, children }: Props): JSX.Element => {
  return !hideElement ? <></> : <ListItem>{children}</ListItem>;
};

export default SearchSection;

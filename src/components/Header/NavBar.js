import React from 'react';

import NavBarWrapper from './NavBarWrapper';
import ItemsList from './ItemsList';
import Item from './Item';
import A from '../A';

export default function NavBar() {
  return(
    <NavBarWrapper key="navWrapper">
      <ItemsList>
        <Item><A href="/item1" >ITEM 1</A></Item>
        <Item><A href="/item2">ITEM 2</A></Item>
        <Item><A href="/item3">ITEM 3</A></Item>
      </ItemsList>
    </NavBarWrapper>
  );
}

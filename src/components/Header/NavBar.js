import React from "react";
import { Link } from "react-router-dom";

import NavBarWrapper from "./NavBarWrapper";
import ItemsList from "./ItemsList";
import Item from "./Item";

// devo aggiungere Link to={path?}

export default function NavBar() {
  return (
    <NavBarWrapper key="navWrapper">
      <ItemsList>
        <Link to={"/item1"}>
          <Item> ITEM 1 </Item>
        </Link>

        <Link to={"/item2"}>
          <Item> ITEM 2 </Item>
        </Link>
        <Link to={"/item3"}>
          <Item> ITEM 3 </Item>
        </Link>
        {/* <Item><A href="/item1">ITEM 1</A></Item>
        <Item><A href="/item2">ITEM 2</A></Item>
        <Item><A href="/item3">ITEM 3</A></Item> */}
      </ItemsList>
    </NavBarWrapper>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import NavBarWrapper from "./NavBarWrapper";
import ItemsList from "./ItemsList";
import Item from "./Item";

// devo aggiungere Link to={path?}
const LinkItem = styled(NavLink)`
  font-weight: bold;
  letter-spacing: 0.5px;
  color: inherit;

  :hover {
    text-shadow: 0 0 3px white;

  }
`;

export default function NavBar() {
  return (
    <NavBarWrapper key="navWrapper">
      <ItemsList>
        <LinkItem
          to={"/item1"}
          activeStyle={{
            textShadow: "0 0 3px white"
          }}
        >
          <Item> ITEM 1 </Item>
        </LinkItem>
        <LinkItem to={"/item2"}
         activeStyle={{
          textShadow: "0 0 3px white"
        }}>
          <Item> ITEM 2 </Item>
        </LinkItem>
        <LinkItem to={"/item3"}
         activeStyle={{
          textShadow: "0 0 3px white"
        }}>
          <Item> ITEM 3 </Item>
        </LinkItem>
        {/* <Item><A href="/item1">ITEM 1</A></Item>
        <Item><A href="/item2">ITEM 2</A></Item>
        <Item><A href="/item3">ITEM 3</A></Item> */}
      </ItemsList>
    </NavBarWrapper>
  );
}

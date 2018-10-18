import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import NavBarWrapper from "./NavBarWrapper";
import ItemsList from "./ItemsList";
import Item from "./Item";



const LinkItem = styled(NavLink)`
  font-weight: bold;
  letter-spacing: 0.5px;
  color: inherit;

  :hover {
    text-shadow: 0 0 3px white;

  }
`;

export default function NavBar({menuIsVisible}) {
  return (
    <NavBarWrapper menuIsVisible= { menuIsVisible } key="navWrapper">
      <ItemsList>
        {/* Counter */}
        <LinkItem
          to={"/item1"}
          activeStyle={{
            textShadow: "0 0 3px white"
          }}
        >
          <Item> ITEM 1 </Item>
        </LinkItem>
        {/* CounterSaved */}
        <LinkItem
          to={"/item2"}
          activeStyle={{
            textShadow: "0 0 3px white"
          }}
        >
          <Item> ITEM 2 </Item>
        </LinkItem>
        {/* ToDo */}
        <LinkItem
          to={"/item3/10"}
          activeStyle={{
            textShadow: "0 0 3px white"
          }}
        >
          <Item> ITEM 3 todos </Item>
        </LinkItem>
        {/* Item4 */}
        <LinkItem
          to={"/item4"}
          activeStyle={{
            textShadow: "0 0 3px white"
          }}
        >
          <Item> ITEM 4 </Item>
        </LinkItem>
        {/* Item5 */}
        <LinkItem
          to={"/item5"}
          activeStyle={{
            textShadow: "0 0 3px white"
          }}
        >
          <Item> ITEM 5 </Item>
        </LinkItem>
        {/* Item6 */}
        <LinkItem
          to={"/item6"}
          activeStyle={{
            textShadow: "0 0 3px white"
          }}
        >
          <Item> ITEM 6 </Item>
        </LinkItem>
        {/* Item7 */}
        <LinkItem
          to={"/item7"}
          activeStyle={{
            textShadow: "0 0 3px white"
          }}
        >
          <Item> ITEM 7 </Item>
        </LinkItem>
      </ItemsList>
    </NavBarWrapper>
  );
}


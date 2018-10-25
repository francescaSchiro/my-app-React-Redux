import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import NavBarWrapper from "./NavBarWrapper";
import ItemsList from "./ItemsList";
import Item from "./Item";

// const navLinkStyle = {};
const LinkItem = styled(NavLink)`
  text-decoration: none;
  width: 100%;


  @media screen and (max-width: 466px) {
    text-align: center;
    border-bottom: 1px solid rgba(245, 245, 245, 0.1);
    text-transform: uppercase;
    :hover {
      color: #ed704d;
      background-color: rgba(245, 245, 245, 0.7);
    }
  }
`;

export default function NavBar({ menuIsVisible, onMenuClick }) {
  return (
    <NavBarWrapper menuIsVisible={menuIsVisible} key="navWrapper">
      <ItemsList>
        {/* Counter */}
        <LinkItem
          to={"/counter"}
          activeStyle={{
            textShadow: "0 0 3px white"
          }}
          onClick={()=> onMenuClick() }
        >
          <Item> Counter </Item>
        </LinkItem>
        {/* CounterSaved */}
        <LinkItem
          to={"/reset"}
          activeStyle={{
            textShadow: "0 0 3px white"
          }}
          onClick={()=> onMenuClick() }
        >
          <Item> Reset </Item>
        </LinkItem>
        {/* ToDo */}
        <LinkItem
          to={"/todolist/10"}
          activeStyle={{
            textShadow: "0 0 3px white"
          }}
          onClick={()=> onMenuClick() }
        >
          <Item> Todo List </Item>
        </LinkItem>
        {/* Item4 */}
        <LinkItem
          to={"/tictactoe"}
          activeStyle={{
            textShadow: "0 0 3px white"
          }}
          onClick={()=> onMenuClick() }
        >
          <Item> Tic Tac Toe </Item>
        </LinkItem>
        {/* Item5 */}
        <LinkItem
          to={"/item5"}
          activeStyle={{
            textShadow: "0 0 3px white"
          }}
          onClick={()=> onMenuClick() }
        >
          <Item> ITEM 5 </Item>
        </LinkItem>
        {/* Item6 */}
        <LinkItem
          to={"/item6"}
          activeStyle={{
            textShadow: "0 0 3px white"
          }}
          onClick={()=> onMenuClick() }
        >
          <Item> ITEM 6 </Item>
        </LinkItem>
        {/* Item7 */}
        <LinkItem
          to={"/item7"}
          activeStyle={{
            textShadow: "0 0 3px white"
          }}
          onClick={()=> onMenuClick() }
        >
          <Item> ITEM 7 </Item>
        </LinkItem>
      </ItemsList>
    </NavBarWrapper>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import NavBarWrapper from "./NavBarWrapper";
import ItemsList from "./ItemsList";
import Item from "./Item";
import { breakPoint } from "../../utils";
import { NAV } from "../../pages";

// const navLinkStyle = {};
const LinkItem = styled(NavLink)`
  text-decoration: none;
  width: 100%;

  @media screen and (max-width: ${breakPoint()}px) {
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
        {NAV.map((p) => (
          <LinkItem
            key={p.key}
            to={p.path}
            activeStyle={{
              textShadow: "0 0 3px white"
            }}
            onClick={() => onMenuClick()}
          >
            <Item> {p.key} </Item>
          </LinkItem>
        ))}
      </ItemsList>
    </NavBarWrapper>
  );
}

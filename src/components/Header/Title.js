import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import TitleWrapper from "./TitleWrapper";
import H1 from "../H1";
import Hamburger from "./Hamburger";

const LinkTitle = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: whitesmoke;
  &:hover {
    text-shadow: 0 0 3px white;
  }
`;

const Logo = styled.span`
  margin-right: 4px;
  font-size: 1.2rem;
  transition: ease-in-out;
  &:hover {
    text-shadow: 0 0 3px white;
    animation: rotate 3s linear infinite;
    @keyframes rotate {
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

export default function Title({ onMenuClick, menuIsVisible }) {
  return (
    <TitleWrapper>
      <LinkTitle to="/">
        <Logo>
          <span role="img" aria-label="crying emojii">
            😭
          </span>
        </Logo>
        <H1>React</H1>
      </LinkTitle>
      <Hamburger menuIsVisible={menuIsVisible} onMenuClick={onMenuClick} />
    </TitleWrapper>
  );
}

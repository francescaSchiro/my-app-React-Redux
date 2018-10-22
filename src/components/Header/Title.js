import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TitleWrapper from "./TitleWrapper";
import H1 from "../H1";
// import Hamburger from "./Hamburger";

const LinkTitle = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: whitesmoke;
  :hover {
    text-shadow: 0 0 3px white;
  }
`;

const Logo = styled.div`
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

const MyIcon = styled(FontAwesomeIcon)`
  @media screen and (min-width: 466px) {
    display: none;
  }
`;

export default function Title({ onMenuClick }) {
  return (
    <TitleWrapper>
      <LinkTitle to="/">
        <Logo>😭</Logo>
        <H1>React</H1>
      </LinkTitle>
      {/* <Hamburger onClick = { () => onMenuClick() }/> */}
      <MyIcon
        type="button"
        onClick={() => onMenuClick()}
        icon="bars"
        style={{ cursor: "pointer" }}
      />
    </TitleWrapper>
  );
}

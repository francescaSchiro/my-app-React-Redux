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
  ::before {
    content: "😭";
    margin-right: 4px;
    font-size: 1.2rem;
  }
  :hover {
    text-shadow: 0 0 3px white;
  }
`;

const MyIcon = styled(FontAwesomeIcon)`
  @media screen and (min-width: 466px) {
    display: none;
  }
`;

export default function Title({onMenuClick}) {
  return (
    <TitleWrapper>
      <LinkTitle to="/">
        <H1>React</H1>
      </LinkTitle>
      {/* <Hamburger onClick = { () => onMenuClick() }/> */}
        <MyIcon type="button" onClick = { () => onMenuClick() } icon="bars"
        style={{cursor:'pointer'}}>
        </MyIcon>
    </TitleWrapper>
  );
}




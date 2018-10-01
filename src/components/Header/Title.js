import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import TitleWrapper from "./TitleWrapper";
import H1 from "../H1";

const LinkTitle = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: whitesmoke;
  ::before {
    content: '😭';
    margin-right: 4px;
    font-size: 1.2rem;
    
  }
  :hover {
    text-shadow: 0 0 3px white;
  }  
`

export default function Title() {
  return (
    <TitleWrapper>
      <LinkTitle to="/">
        <H1>React</H1>
      </LinkTitle>
    </TitleWrapper>
  );
}

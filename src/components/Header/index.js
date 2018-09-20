import React from 'react';
import HeaderWrapper from './HeaderWrapper';
import Title from './Title';
import NavBar from './NavBar';



export default function Header() {
    return(
      <HeaderWrapper key = "HeaderWrapper">
        <Title/>
        <NavBar/>
      </HeaderWrapper>
    );
  }
  
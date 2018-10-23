import React from "react";
import styled from "styled-components";
import { transition } from "../../utils";

/*** trying to replicate hamburger menu animation as in this codepen:
 * https://codepen.io/elijahmanor/pen/Igpoe
 */

const DivHamburger = styled.div`
  cursor: pointer;
  padding: 20px 20px 20px 0px;
`;

const SpanHamburger = styled.span`
  box-sizing: border-box;
 
  border-radius: 1px;
  height: 2px;
  width: 23px;
  position: absolute;
  display: block;
  content: "";
  background-color: ${props =>
    props.menuIsVisible ? "transparent" : "whitesmoke"};
  ${transition(500, 0.68, -0.55, 0.265, 1.55)}

  
  &:before {
    border-radius: 1px;
    height: 2px;
    width: 23px;
    position: absolute;
    display: block;
    content: "";
    background-color: whitesmoke;

   ${transition(500, 0.68, -0.55, 0.265, 1.55)}

    top: ${props => (props.menuIsVisible ? "0" : "-8px")};
    transform: ${props => (props.menuIsVisible ? "rotate(45deg)" : "none")};
  }

  &:after {
    border-radius: 1px;
    height: 2px;
    width: 23px;
    position: absolute;
    display: block;
    content: "";
    background-color: whitesmoke;

    ${transition(500, 0.68, -0.55, 0.265, 1.55)}

    top: ${props => (props.menuIsVisible ? "0" : "8px")};
    transform: ${props => (props.menuIsVisible ? "rotate(-45deg)" : "none")};
  }

   @media screen and (min-width: 466px) {
    display: none;
  }
`;

export default function Hamburger({ menuIsVisible, onMenuClick }) {
  return (
    <DivHamburger
      type="button"
      onClick={() => onMenuClick()}
      menuIsVisible={menuIsVisible}
    >
      <SpanHamburger menuIsVisible={menuIsVisible} />
    </DivHamburger>
  );
}

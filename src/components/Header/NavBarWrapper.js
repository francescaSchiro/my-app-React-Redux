import styled from "styled-components";
import { breakPoint } from "../../utils";

const NavBarWrapper = styled.nav`
  box-sizing: border-box;
  background-color: #ed704d;
  box-shadow: #ed704d;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  min-height: 3em;
  max-height: 3em;
  width: 100%;
  font-size: 1em;
  color: whitesmoke;
  transition: all 0.5s;

  @media screen and (max-width: ${breakPoint}px) {
    max-height: 100%;
    position: absolute;
    top: 4em;
    display: ${props => (props.menuIsVisible === false ? "none" : "block")};
    z-index:100;
  }
`;

export default NavBarWrapper;

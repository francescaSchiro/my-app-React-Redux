import styled from "styled-components";

const Button = styled.button`
  box-sizing: border-box;
  all: unset;

  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  overflow: hidden;

  letter-spacing: 0.12em;
  border-radius: 1em;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  ${props =>
    props.isDebugActive
      ? " transform: rotateY(40deg);"
      : "transform: rotateY(0deg);"}
  color: whitesmoke;
  width: fit-content;
  background-color: #4e8bed;
  padding: 20px;
  transition: transform 1s ease-in-out;
  &.focus {
    outline: 0;
    text-decoration: none;
    outline: none;
    border: none;
    box-shadow: none;
  }
  &:hover:not(:disabled) {
    box-shadow: 0px 0px 4px 1px whitesmoke;
    text-shadow: 0 0 3px white;
    ${props =>
      props.isDebugActive
        ? " transform: rotateY(0deg);"
        : "transform: rotateY(40deg);"}
  }

  &.active {
    outline: 0;
    text-decoration: none;
    outline: none;
    border: none;
    box-shadow: none;
  }
  :disabled {
    opacity: 0.6;
  }
`;

export default Button;

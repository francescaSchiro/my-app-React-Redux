import styled from "styled-components";

const ButtonYesNo = styled.button`
  background-color: ${props => (props.no ? "#ed704d" : "#4e8bed")};
  font-family: inherit;
  font-weight: bold;
  border-radius: 1em;
  border: none;
  color: whitesmoke;
  margin: 0 1em;
  padding: 1em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  letter-spacing: 0.1em;
  cursor: pointer;
  /* non toglie bordo blue di chrome quando clicco!!!!!!!! */
  &.focus {
    outline: 0;
    text-decoration: none;
    outline: none;
    border: none;
    box-shadow: none;
  }
  &.active {
    outline: 0;
    text-decoration: none;
    outline: none;
    border: none;
    box-shadow: none;
  }
`;

export default ButtonYesNo;

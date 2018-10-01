import styled from "styled-components";

const ButtonSubmit = styled.button`
  background-color: #ed704d;
  font-family: inherit;
  font-weight: bold;
  border-radius: 1em;
  border: none;
  color: whitesmoke;
  padding: 1em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  /* non toglie bordo blue di chrome quando clicco!!!!!!!! */
  &.focus {                                     
    outline: 0 ;
    text-decoration: none;
    outline: none;
    border: none;
    box-shadow: none;
  }
  &.active {
    outline: 0 ;
    text-decoration: none;
    outline: none;
    border: none;
    box-shadow: none;
  }
`;

export default ButtonSubmit;

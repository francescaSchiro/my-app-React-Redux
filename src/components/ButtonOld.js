import styled from "styled-components";

const ButtonOld = styled.button`
  text-decoration: none;
  border: none;
  width: fit-content;
  padding: 0 14px;
  height: 50px;
  font-family: inherit;
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 0.05em;
  border-radius: 0.1em;
  color: lightseagreen;
  text-align: center;
  outline: 0;
  margin: 10px 5px;
  /* padding-left: 40px; */
  cursor: pointer;
  :hover:not(:disabled) {
    box-shadow: 0px 0px 4px 1px whitesmoke;
    text-shadow: 0 0 3px white;
  }
  :active {
    box-shadow: 0px 0px 4px 1px #ed704d;
    color: #ed704d;
  }
  :disabled {
    opacity: 0.6;
  }
`;

export default ButtonOld;

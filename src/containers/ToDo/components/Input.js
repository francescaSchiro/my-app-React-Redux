import styled from "styled-components";
import { placeholder } from "polished";

const Input = styled.input`
  text-decoration: none;
  border: none;
  font-family: inherit;
  font-weight: bold;
  letter-spacing: 0.05em;
  border-radius: 1em;
  color: #ed704d;
  padding: 1em;
  text-align: center;
  outline: 0;
  margin-right: 1em;
  margin-left: 1em;
  ${placeholder({'color': 'rgba(0, 0, 0, 0.2)'})};
`;

export default Input;

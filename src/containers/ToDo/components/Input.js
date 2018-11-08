import styled from "styled-components";

const Input = styled.input`
  border: none;
  border-radius: 1em;
  padding: 1em;
  margin-left: 1em;
  margin-right: 1em;
  outline: 0;

  color: #ed704d;
  text-decoration: none;
  font-family: inherit;
  font-weight: bold;
  letter-spacing: 0.05em;

  text-align: center;
  &::placeholder{
    color: rgba(0, 0, 0, 0.2);
  }
  &:focus {
    box-shadow: 0 0 5px #ed704d;
  }
`;

export default Input;

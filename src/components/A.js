import styled from "styled-components";

const A = styled.a`
  display: inline-block;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  letter-spacing: 0.05em;
  padding: 10px 5px;

  &:hover {
    color: blueviolet;
    font-weight: bold;
  }
  &:active {
    color: green;
    font-weight: bold;
    letter-spacing: 0.05em;
  }
`;

export default A;

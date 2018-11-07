import styled from "styled-components";

const AFilter = styled.a`
  display: inline-block;
  letter-spacing: 0.05em;
  padding: 10px 5px;
  
  color: ${props=> props.active ? "rgb(237,112,77)" : "inherit"};
  font-weight: bold;
  text-decoration: none;
  cursor:pointer;
  

  &:hover {
    text-shadow: 0 0 3px white;
    font-weight: bold;
  }
`;

export default AFilter;

import styled from "styled-components";
import { breakPoint } from "../../utils";

const Item = styled.li`
  height: 3em;
  padding: 0 5px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 0px solid transparent;
  transition: all 0.2s ease-in-out;

  font-weight: bold;
  text-decoration: none;

  letter-spacing: 0.5px;
  color: whitesmoke;

  &:hover {
    text-shadow: 0 0 3px white;
    border-bottom: 7px solid transparent;
  }

  @media screen and (max-width: ${breakPoint}px) {
    padding: 15px;
    :hover {
      color: #ed704d;
      border-bottom: 0px;
    }
  }
`;

export default Item;
